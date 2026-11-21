// Shared helpers for the generators: where the mockups live and which class names belong to the kit.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

const here = dirname(fileURLToPath(import.meta.url));
export const STARTER = resolve(here, '..', '..');
export const MOCKUPS = resolve(STARTER, '..', 'design', 'html');
export const STYLES_CSS = resolve(MOCKUPS, 'assets', 'styles.css');

// Mockup token names → app token names (DESIGN_SYSTEM.md §1: the accent is called --brand in the app).
export const renameVars = css => css.replace(/--accent/g, '--brand');

// Classes the shell script (design/html/assets/shell.js) puts on the page. They live in styles.css too,
// but listing them keeps the converter correct even if a shell class has no rule of its own.
const SHELL_CLASSES = ['app', 'sidebar', 'ws-btn', 'mark', 'bell', 'dot', 'cmdk-btn', 'nav', 'nav-sec', 'side-foot',
  'ws-tag', 'main', 'utop', 'me-chip', 'pc-who', 'content', 'active', 'cnt', 'alert', 'avatar', 'i', 'st', 'kbd'];

/** Every class name used in a selector of the mockups' shared stylesheet: the "kit" (global) classes. */
export function kitClasses() {
  const root = postcss.parse(readFileSync(STYLES_CSS, 'utf8'));
  const set = new Set(SHELL_CLASSES);
  root.walkRules(rule => {
    selectorParser(sel => sel.walkClasses(c => { set.add(c.value); })).processSync(rule.selector);
  });
  return set;
}
