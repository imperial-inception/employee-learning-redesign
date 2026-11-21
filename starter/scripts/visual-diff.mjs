// Measures how far each React view is from its HTML mockup, in both themes, and writes diff images.
//
//   npm run build && npm run start            (in another terminal; or let this script start it)
//   node scripts/visual-diff.mjs [mockup …]   (no argument = every view in screens/registry.ts)
//
// Output: a table of differing-pixel ratios (dark · light), test-results/visual-diff/summary.json, and for every
// view that differs: <mockup>-<theme>-{mockup,app,diff}.png in test-results/visual-diff/. Same viewport and
// per-pixel threshold as the Playwright harness (1600×1060, device scale 1, threshold 0.2).
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { MOCKUPS, STARTER } from './lib/kit.mjs';

const APP = process.env.APP_URL || 'http://127.0.0.1:3100';
const LIMIT = Number(process.env.MAX_DIFF || 0.03);
const OUT = resolve(STARTER, 'test-results', 'visual-diff');
mkdirSync(OUT, { recursive: true });

const registry = readFileSync(resolve(STARTER, 'screens', 'registry.ts'), 'utf8');
const all = [...registry.matchAll(/mockup: '([^']+)'/g)].map(m => m[1]);
const only = process.argv.slice(2);
const views = only.length ? all.filter(v => only.includes(v)) : all;

async function reachable() {
  try { return (await fetch(APP)).ok; } catch { return false; }
}
let server = null;
if (!(await reachable())) {
  server = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'start', '-p', new URL(APP).port || '3100'],
    { cwd: STARTER, stdio: 'ignore', shell: process.platform === 'win32' });
  for (let i = 0; i < 60 && !(await reachable()); i++) await new Promise(r => setTimeout(r, 500));
  if (!(await reachable())) throw new Error(`app not reachable at ${APP} (run npm run build first)`);
}

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || 'msedge' });
const shot = async (theme, url, isApp) => {
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 1060 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  if (isApp) await ctx.addInitScript(t => { try { localStorage.setItem('theme', t); } catch {} }, theme);
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  for (const f of page.frames()) { try { await f.evaluate(() => document.fonts.ready); } catch {} }
  await page.waitForTimeout(150);
  const buf = await page.screenshot({ animations: 'disabled', caret: 'hide' });
  await ctx.close();
  return buf;
};

const rows = [];
for (const m of views) {
  const row = { view: m };
  for (const theme of ['dark', 'light']) {
    const mockUrl = pathToFileURL(resolve(MOCKUPS, `${m}.html`)).href + (theme === 'light' ? '?theme=light' : '');
    const a = PNG.sync.read(await shot(theme, mockUrl, false));
    const b = PNG.sync.read(await shot(theme, `${APP}/views/${m}`, true));
    const { width, height } = a;
    const diff = new PNG({ width, height });
    const n = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.2 });
    const ratio = n / (width * height);
    row[theme] = ratio;
    if (n > 0) {
      writeFileSync(resolve(OUT, `${m}-${theme}-mockup.png`), PNG.sync.write(a));
      writeFileSync(resolve(OUT, `${m}-${theme}-app.png`), PNG.sync.write(b));
      writeFileSync(resolve(OUT, `${m}-${theme}-diff.png`), PNG.sync.write(diff));
    }
  }
  rows.push(row);
  const pct = r => (r * 100).toFixed(2).padStart(6) + '%';
  const flag = Math.max(row.dark, row.light) > LIMIT ? '  ✗' : '';
  console.log(`${m.padEnd(30)} dark ${pct(row.dark)} · light ${pct(row.light)}${flag}`);
}
await browser.close();
if (server) server.kill();

writeFileSync(resolve(OUT, 'summary.json'), JSON.stringify({ limit: LIMIT, rows }, null, 2));
const over = rows.filter(r => Math.max(r.dark, r.light) > LIMIT);
const worst = Math.max(...rows.map(r => Math.max(r.dark, r.light)));
console.log(`\n${rows.length} views · worst ${(worst * 100).toFixed(2)}% · over ${(LIMIT * 100).toFixed(0)}%: ${over.length}`);
process.exit(over.length ? 1 : 0);
