// Fails if a component or page uses a raw colour instead of a design token.
// Usage: node check-no-raw-colors.mjs app components   (add to the lint script)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const roots = process.argv.slice(2).length ? process.argv.slice(2) : ['app', 'components'];
const allowFiles = [/globals\.css$/, /tokens\.css$/, /tokens\.generated\.ts$/, /mui-theme\.ts$/, /ds(-[a-z]+)?\.css$/]; // + generated tokens and the MUI bridge (needs a few literal shadows)             // the only places colour values may live
const exts = new Set(['.ts', '.tsx', '.css', '.mdx']);
const raw = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(|\b(?:bg|text|border|ring|fill|stroke)-\[#/g;

let problems = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (name === 'node_modules' || name.startsWith('.')) continue;
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!exts.has(extname(p)) || allowFiles.some(r => r.test(p))) continue;
    readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
      if (raw.test(line)) { problems++; console.log(`${p}:${i + 1}: raw colour → use a token: ${line.trim().slice(0, 120)}`); }
      raw.lastIndex = 0;
    });
  }
}
roots.forEach(r => { try { walk(r); } catch { /* folder may not exist */ } });
if (problems) { console.error(`\n${problems} raw colour value(s) found.`); process.exit(1); }
console.log('No raw colour values.');
