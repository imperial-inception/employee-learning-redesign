// Run this against the HOST app before bringing the design layer in:
//   node scripts/check-collisions.mjs <path-to-app>          (e.g. node scripts/check-collisions.mjs ../../my-app)
// It lists global CSS in the app that defines the same CSS variable names as the design tokens (--text, --bg …) or
// styles the same class names as the kit (.panel, .btn, .tag …). Inside the design area those would mix with the
// design's styles. CSS Modules (*.module.css) are skipped: their class names are already unique.
// Fix by renaming on the app side or by prefixing the tokens (search-and-replace in styles/ds.css + lib/tokens.generated.ts).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { kitClasses, STARTER } from './lib/kit.mjs';

const target = resolve(process.argv[2] || '.');
const kit = kitClasses();
const tokens = Object.keys((await import(`file:///${resolve(STARTER, 'lib', 'tokens.generated.ts').replace(/\\/g, '/')}`).catch(() => null))?.tokens?.dark ?? {});
const tokenNames = tokens.length ? tokens : [...readFileSync(resolve(STARTER, 'styles', 'ds.css'), 'utf8').matchAll(/(--[a-z0-9-]+)\s*:/g)].map(m => m[1].slice(2));
const tokenSet = new Set(tokenNames);

const hits = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.') || name === 'starter') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    const ext = extname(p);
    if (!['.css', '.scss', '.sass', '.less'].includes(ext) || /\.module\.(css|scss|sass|less)$/.test(p)) continue;
    readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
      for (const m of line.matchAll(/(--[a-zA-Z0-9-]+)\s*:/g)) if (tokenSet.has(m[1].slice(2))) hits.push(`${p}:${i + 1}  token ${m[1]}`);
      if (/[{,]\s*$|^\s*[.#\w[:*][^;{}]*\{/.test(line)) {
        for (const m of line.matchAll(/\.([a-zA-Z_][\w-]*)/g)) if (kit.has(m[1])) hits.push(`${p}:${i + 1}  class .${m[1]}`);
      }
    });
  }
}
walk(target);
if (!hits.length) { console.log(`No collisions in ${target}.`); process.exit(0); }
console.log(hits.join('\n'));
console.log(`\n${hits.length} possible collision(s). Each one can change how the design looks inside [data-ds].`);
process.exit(1);
