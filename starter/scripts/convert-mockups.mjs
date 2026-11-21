// Converts every reference mockup (design/html/NN-*.html) into a React view for this Next.js Pages Router app:
//   screens/<mockup>/index.tsx        the view (JSX, using components/ds)
//   screens/<mockup>/view.module.css   the mockup's page-local CSS as a CSS Module
//   pages/views/<mockup>.tsx           the route (/views/<mockup>)
//   screens/registry.ts                list of all views (used by the index page and the visual tests)
//
//   node scripts/convert-mockups.mjs [mockup …]      (no argument = every view listed in codex/verification/screens.ts)
//
// The mockup is loaded in a real browser (Edge/Chromium via Playwright) with its shell script blocked, and the DOM
// is read from there, not from the HTML text: tables get their <tbody>, SVG attributes keep their case, and the
// browser tells us which whitespace between inline elements is actually rendered (React would otherwise drop it).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
import { chromium } from '@playwright/test';
import { MOCKUPS, STARTER, kitClasses, renameVars } from './lib/kit.mjs';

const KIT = kitClasses();
const screensTs = readFileSync(resolve(STARTER, '..', 'codex', 'verification', 'screens.ts'), 'utf8');
const ALL = [...screensTs.matchAll(/\{ id: '([^']+)', name: '([^']+)', mockup: '([^']+)'/g)]
  .map(m => ({ id: m[1], name: m[2], mockup: m[3] }));
const only = process.argv.slice(2);
const VIEWS = only.length ? ALL.filter(v => only.includes(v.mockup)) : ALL;

const GLYPH_TO_STATUS = { 'st-not': 'not_started', 'st-prog': 'in_progress', 'st-rev': 'submitted', 'st-ok': 'approved',
  'st-ret': 'returned', 'st-bad': 'rejected', 'st-lock': 'locked' };
// View_07f_profile_job_expectations: named after the file (camel-casing words could spell product names by accident).
const compName = mockup => `View_${mockup.replace(/-/g, '_')}`;

// ---------------------------------------------------------------- browser side: read the DOM
function serialize() {
  // 1) Measure which whitespace is rendered, with every icon placeholder (<i data-i>) given the box its <svg>
  //    will have (same classes → same CSS size, inline-level). An empty <i> is zero-width, and a space before it
  //    at the end of a line would wrongly look "not rendered".
  const icons = Array.from(document.querySelectorAll('i[data-i]'));
  const saved = icons.map(el => [el, el.getAttribute('class'), el.getAttribute('style')]);
  for (const el of icons) {
    const n = el.dataset.i;
    const extra = (el.dataset.c || '').split(/\s+/).filter(Boolean);
    if (n.startsWith('st-')) el.classList.add('st', n, ...extra); else el.classList.add('i', ...extra);
    el.style.display = 'inline-block';
  }
  const renderedWs = new Map();
  const isInline = n => {
    if (!n) return false;
    if (n.nodeType === 3) return !/^\s*$/.test(n.data);
    if (n.nodeType !== 1) return false;
    const d = getComputedStyle(n).display;
    return d.startsWith('inline') || d === 'contents';
  };
  const sib = (n, dir) => { let s = n[dir]; while (s && (s.nodeType === 8 || (s.nodeType === 3 && /^\s*$/.test(s.data)))) s = s[dir]; return s; };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    if (!/^\s*$/.test(t.data)) continue;
    const r = document.createRange();
    r.selectNodeContents(t);
    const visible = Array.from(r.getClientRects()).some(x => x.width > 0.1);
    // A space where a line wraps measures 0 wide but is still the break opportunity between two inline items.
    const pe = t.parentElement;
    if (pe && pe.namespaceURI === 'http://www.w3.org/2000/svg' && !/^(text|tspan|textPath)$/.test(pe.localName)) { renderedWs.set(t, false); continue; }
    const pd = pe ? getComputedStyle(pe).display : '';
    const flowParent = !/flex|grid/.test(pd);
    const between = flowParent && isInline(sib(t, 'previousSibling')) && isInline(sib(t, 'nextSibling'));
    renderedWs.set(t, visible || between);
  }
  for (const [el, cls, style] of saved) {
    if (cls === null) el.removeAttribute('class'); else el.setAttribute('class', cls);
    if (style === null) el.removeAttribute('style'); else el.setAttribute('style', style);
  }
  // 2) Serialize the untouched DOM.
  const ser = node => {
    if (node.nodeType === 3) {
      const v = node.data;
      const ws = /^\s*$/.test(v);
      const rendered = ws ? renderedWs.get(node) !== false : true;
      const pre = node.parentElement ? /^pre/.test(getComputedStyle(node.parentElement).whiteSpace) : false;
      return { t: 'text', v, ws, rendered, pre };
    }
    if (node.nodeType !== 1) return null;
    const el = node;
    if (el.localName === 'script' || el.localName === 'style') return null;
    return {
      t: 'el', tag: el.localName, svg: el.namespaceURI === 'http://www.w3.org/2000/svg',
      attrs: Array.from(el.attributes).map(a => [a.name, a.value]),
      kids: Array.from(el.childNodes).map(ser).filter(Boolean),
    };
  };
  const scripts = Array.from(document.querySelectorAll('script:not([src])')).map(s => s.textContent).join('\n');
  const bg = (scripts.match(/src\s*=\s*'([^']+)\.html'/) || [])[1] || null;
  return {
    title: document.title,
    body: Object.fromEntries(Array.from(document.body.attributes).map(a => [a.name, a.value])),
    css: Array.from(document.querySelectorAll('head style')).map(s => s.textContent).join('\n'),
    bg,
    kids: Array.from(document.body.childNodes).map(ser).filter(Boolean),
  };
}

// ---------------------------------------------------------------- page CSS → CSS Module
function transformCss(css) {
  const root = postcss.parse(renameVars(css));
  const wrapGlobal = inner => {
    const p = selectorParser.pseudo({ value: ':global' });
    const s = selectorParser.selector();
    s.append(inner);
    p.append(s);
    return p;
  };
  const xform = selectorParser(selectors => {
    selectors.each(sel => {
      let hasLocal = false;
      const classes = []; const ids = []; const tags = []; const attrs = []; const roots = [];
      sel.walk(n => {
        if (n.type === 'class') classes.push(n);
        else if (n.type === 'id') ids.push(n);
        else if (n.type === 'tag') tags.push(n);
        else if (n.type === 'attribute' && n.attribute === 'data-theme') attrs.push(n);
        else if (n.type === 'pseudo' && n.value === ':root') roots.push(n);
      });
      for (const c of classes) {
        if (KIT.has(c.value)) c.replaceWith(wrapGlobal(selectorParser.className({ value: c.value })));
        else hasLocal = true;
      }
      for (const i of ids) i.replaceWith(wrapGlobal(selectorParser.id({ value: i.value })));
      for (const a of attrs) a.replaceWith(wrapGlobal(a.clone()));
      for (const t of tags) {
        if (t.value === 'body' || t.value === 'html') { t.replaceWith(selectorParser.className({ value: 'v' })); hasLocal = true; }
      }
      for (const r of roots) { r.replaceWith(selectorParser.className({ value: 'v' })); hasLocal = true; }
      if (!hasLocal) {
        // CSS Modules need a local class in every selector: scope it to the view root (.v), which wraps the whole view.
        // :where() keeps the specificity exactly as in the mockup (a bare .v would make the rule win fights it lost there).
        const first = sel.nodes[0];
        const isTheme = first && first.type === 'pseudo' && first.value === ':global' && String(first).includes('data-theme');
        const v = selectorParser.pseudo({ value: ':where' });
        v.append(selectorParser.selector().append(selectorParser.className({ value: 'v' })));
        if (isTheme) {
          // [theme] <comb> rest  →  [theme] <space> .v <comb> rest
          sel.insertAfter(first, v);
          sel.insertAfter(first, selectorParser.combinator({ value: ' ' }));
        } else {
          sel.prepend(selectorParser.combinator({ value: ' ' }));
          sel.prepend(v);
        }
      }
    });
  });
  root.walkRules(rule => {
    if (rule.parent && rule.parent.type === 'atrule' && /keyframes/.test(rule.parent.name)) return;
    // #bg was the mockup's iframe showing the page behind a dialog. Its look (blur, saturation) moves to the
    // Backdrop as the local class .bg; its box (fixed, full size, no border) is what Backdrop already does.
    if (rule.selectors.some(s => /#bg\b/.test(s))) {
      rule.selectors = ['.bg'];
      rule.walkDecls(d => { if (/^(position|inset|width|height|border|top|left|right|bottom)$/.test(d.prop)) d.remove(); });
      if (!rule.nodes.length) rule.remove();
      return;
    }
    rule.selectors = rule.selectors.map(s => xform.processSync(s));
  });
  // Collect which local class names the CSS defines (so JSX knows what to read from the module).
  const locals = new Set();
  root.walkRules(rule => {
    selectorParser(s => s.walkClasses(c => {
      let p = c.parent; let global = false;
      while (p) { if (p.type === 'pseudo' && p.value === ':global') global = true; p = p.parent; }
      if (!global) locals.add(c.value);
    })).processSync(rule.selector);
  });
  return { css: root.toString().trim(), locals };
}

// ---------------------------------------------------------------- DOM → JSX
const ATTR_MAP = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', colspan: 'colSpan',
  rowspan: 'rowSpan', maxlength: 'maxLength', contenteditable: 'contentEditable', spellcheck: 'spellCheck',
  autocomplete: 'autoComplete', autofocus: 'autoFocus', datetime: 'dateTime', crossorigin: 'crossOrigin',
  'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', checked: 'defaultChecked' };
const BOOL = new Set(['disabled', 'hidden', 'checked', 'readonly', 'open', 'autofocus', 'required', 'multiple', 'selected']);
const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'col', 'area', 'source', 'wbr']);
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const q = v => (/["\\&{}]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`);
const lit = v => JSON.stringify(v).replace(/\u00a0/g, '\\u00a0');

function styleObj(css) {
  const parts = []; let depth = 0; let cur = '';
  for (const ch of css) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
  }
  parts.push(cur);
  const props = parts.map(p => p.trim()).filter(Boolean).map(p => {
    const i = p.indexOf(':');
    const k = p.slice(0, i).trim(); const val = renameVars(p.slice(i + 1).trim());
    const key = k.startsWith('--') ? `'${k}'` : k.startsWith('-webkit-') ? camel('Webkit-' + k.slice(8)) : camel(k);
    return `${key}: ${lit(val)}`;
  });
  return `{{ ${props.join(', ')} }}`;
}

function makeEmitter(locals, used) {
  const classExpr = tokens => {
    const kit = []; const loc = [];
    for (const t of tokens) {
      if (!t) continue;
      if (locals.has(t)) loc.push(t);
      if (KIT.has(t) || !locals.has(t)) kit.push(t); // unknown classes stay as plain strings (harmless)
    }
    const l = loc.map(n => (/^[a-z_][a-z0-9_]*$/i.test(n) ? `s.${n}` : `s[${lit(n)}]`));
    if (!kit.length && !l.length) return null;
    if (!l.length) return `"${kit.join(' ')}"`;
    if (!kit.length && l.length === 1) return `{${l[0]}}`;
    used.add('cx');
    return `{cx(${[kit.length ? lit(kit.join(' ')) : null, ...l].filter(Boolean).join(', ')})}`;
  };
  const attrsOf = (node, skip = new Set()) => {
    const out = [];
    for (const [name, value] of node.attrs) {
      if (skip.has(name) || name === 'data-go' || name === 'data-i' || name === 'data-c') continue;
      if (name === 'class') { const e = classExpr(value.split(/\s+/)); if (e) out.push(`className=${e}`); continue; }
      if (name === 'style') { if (value.trim()) out.push(`style=${styleObj(value)}`); continue; }
      let n = ATTR_MAP[name] || name;
      if (node.svg && !name.startsWith('data-') && !name.startsWith('aria-') && name.includes('-')) n = camel(name);
      if (n === 'contentEditable') out.push('suppressContentEditableWarning');
      if (BOOL.has(name) && (value === '' || value === name)) { out.push(n); continue; }
      if (['colSpan', 'rowSpan', 'tabIndex', 'maxLength'].includes(n) && /^-?\d+$/.test(value)) { out.push(`${n}={${value}}`); continue; }
      out.push(`${n}=${q(value)}`);
    }
    return out;
  };
  const classesOf = node => ((node.attrs.find(a => a[0] === 'class') || [])[1] || '').split(/\s+/).filter(Boolean);
  const attr = (node, name) => (node.attrs.find(a => a[0] === name) || [])[1];

  const emit = (node, ind) => {
    const pad = '  '.repeat(ind);
    if (node.t === 'text') {
      if (node.ws) return node.rendered ? `${pad}{" "}` : null;
      const v = node.pre ? node.v : node.v.replace(/\s+/g, ' ');
      if (/^\s|\s$|[{}<>"'&`]/.test(v) || node.pre) return `${pad}{${lit(v)}}`;
      return `${pad}${v}`;
    }
    const cls = classesOf(node);
    const kids = () => node.kids.map(k => emit(k, ind + 1)).filter(Boolean);
    const wrap = (open, close, body) => (body.length ? `${pad}${open}\n${body.join('\n')}\n${pad}${close}` : `${pad}${open.replace(/>$/, ' />')}`);
    const extra = (drop, more = [], skip = []) => {
      const rest = cls.filter(c => !drop.includes(c));
      const e = classExpr(rest);
      return [...more, ...(e ? [`className=${e}`] : []), ...attrsOf(node, new Set(['class', ...skip]))];
    };

    // icons: <i data-i="name" data-c="sm">  and  <svg class="i"><use href="#i-name"/></svg>
    let iconName = node.tag === 'i' ? attr(node, 'data-i') : null;
    let iconCls = iconName ? [...(attr(node, 'data-c') || '').split(/\s+/), ...cls].filter(Boolean) : [];
    if (!iconName && node.tag === 'svg' && node.kids.length === 1 && node.kids[0].tag === 'use') {
      const href = attr(node.kids[0], 'href') || attr(node.kids[0], 'xlink:href') || '';
      if (href.startsWith('#i-')) { iconName = href.slice(3); iconCls = cls.filter(c => c !== 'i' && c !== 'st' && c !== iconName); }
    }
    if (iconName) {
      const others = attrsOf(node, new Set(['class', 'data-i', 'data-c']));
      if (iconName.startsWith('st-')) {
        used.add('StatusIcon');
        const e = classExpr(iconCls);
        return `${pad}<StatusIcon status="${GLYPH_TO_STATUS[iconName]}"${e ? ` className=${e}` : ''}${others.length ? ' ' + others.join(' ') : ''} />`;
      }
      used.add('Icon');
      const size = ['xs', 'sm', 'lg'].find(s => iconCls.includes(s));
      const e = classExpr(iconCls.filter(c => c !== size));
      return `${pad}<Icon name="${iconName}"${size ? ` size="${size}"` : ''}${e ? ` className=${e}` : ''}${others.length ? ' ' + others.join(' ') : ''} />`;
    }

    if (cls.includes('btn')) {
      used.add('Button');
      const variant = ['primary', 'accent', 'ghost', 'ok'].find(v => cls.includes(v));
      const size = ['sm', 'lg'].find(v => cls.includes(v));
      const props = [];
      if (variant) props.push(`variant="${variant}"`);
      if (size) props.push(`size="${size}"`);
      if (cls.includes('danger')) props.push('danger');
      const href = node.tag === 'a' ? attr(node, 'href') : null;
      if (href) props.push(`href=${q(href.endsWith('.html') ? `/views/${href.replace(/\.html.*$/, '')}` : href)}`);
      const a = extra(['btn', variant, size, 'danger'], props, ['href']);
      return wrap(`<Button${a.length ? ' ' + a.join(' ') : ''}>`, '</Button>', kids());
    }
    if (cls.includes('pill')) {
      used.add('Pill');
      const tone = cls.find(c => /^p-(ok|rev|ret|bad|acc|info|neu)$/.test(c));
      const props = [];
      if (tone) props.push(`tone="${tone.slice(2)}"`);
      if (cls.includes('sm')) props.push('size="sm"');
      const a = extra(['pill', tone, 'sm'], props);
      return wrap(`<Pill${a.length ? ' ' + a.join(' ') : ''}>`, '</Pill>', kids());
    }
    if (cls.includes('tag') && node.tag === 'span') {
      used.add('Tag');
      const a = extra(['tag']);
      return wrap(`<Tag${a.length ? ' ' + a.join(' ') : ''}>`, '</Tag>', kids());
    }
    if (cls.includes('kbd') && node.tag === 'span') {
      used.add('Kbd');
      const a = extra(['kbd']);
      return wrap(`<Kbd${a.length ? ' ' + a.join(' ') : ''}>`, '</Kbd>', kids());
    }
    if (node.tag === 'span' && cls.length === 2 && cls[0] === 'd' && ['formal', 'rel', 'exp'].includes(cls[1]) && !node.kids.length) {
      used.add('TypeDot');
      const others = attrsOf(node, new Set(['class']));
      return `${pad}<TypeDot kind="${cls[1]}"${others.length ? ' ' + others.join(' ') : ''} />`;
    }
    if (cls.includes('avatar') && node.kids.length === 1 && node.kids[0].t === 'text' && cls.every(c => KIT.has(c) || !locals.has(c))) {
      used.add('Avatar');
      const size = ['xs', 'sm', 'lg'].find(v => cls.includes(v));
      const tone = cls.find(c => /^a[2-6]$/.test(c));
      const props = [`initials=${q(node.kids[0].v.trim())}`];
      if (size) props.push(`size="${size}"`);
      if (tone) props.push(`tone={${tone.slice(1)}}`);
      const a = extra(['avatar', size, tone], props);
      return `${pad}<Avatar ${a.join(' ')} />`;
    }
    // theme switch (profile menu): a .seg whose options carry data-t="dark|light|system" → the live component
    const opts = node.kids.filter(k => k.t === 'el');
    if (cls.includes('seg') && opts.length && opts.every(k => k.attrs.some(a => a[0] === 'data-t'))) {
      used.add('ThemeSegment');
      const id = attr(node, 'id');
      const e = classExpr(cls.filter(c => c !== 'seg'));
      return `${pad}<ThemeSegment${id ? ` id="${id}"` : ''}${e ? ` className=${e}` : ''} />`;
    }
    if (node.tag === 'a') {
      const href = attr(node, 'href');
      if (href && /^[\w-]+\.html/.test(href)) {
        used.add('Link');
        const a = [`href=${q(`/views/${href.replace(/\.html.*$/, '')}`)}`, ...attrsOf(node, new Set(['href']))];
        return wrap(`<Link ${a.join(' ')}>`, '</Link>', kids());
      }
    }
    const a = attrsOf(node);
    const open = `<${node.tag}${a.length ? ' ' + a.join(' ') : ''}>`;
    if (VOID.has(node.tag)) return `${pad}${open.replace(/>$/, ' />')}`;
    return wrap(open, `</${node.tag}>`, kids());
  };
  return emit;
}

// ---------------------------------------------------------------- one view
function generate(view, dom) {
  const { css, locals } = transformCss(dom.css);
  const used = new Set();
  const emit = makeEmitter(locals, used);
  const hasV = locals.has('v');
  const rootOpen = hasV ? '<div className={s.v}>' : '<div>';
  const body = [];
  const mainNode = dom.kids.find(k => k.t === 'el' && k.tag === 'main' && k.attrs.some(a => a[0] === 'id' && a[1] === 'page'));
  const others = dom.kids.filter(k => k !== mainNode && !(k.t === 'el' && k.tag === 'iframe') && !(k.t === 'text' && k.ws));
  const b = dom.body;
  let bgImport = '';

  if (mainNode) {
    used.add('AppShell');
    const props = [];
    if (b['data-ws'] === 'admin') props.push('workspace="admin"');
    if (b['data-active']) props.push(`active="${b['data-active']}"`);
    if (b['data-role'] === 'manager') props.push('manager');
    if (b['data-counts']) props.push(`counts={${JSON.stringify(JSON.parse(b['data-counts']))}}`);
    if (b['data-user']) props.push(`user={${JSON.stringify(JSON.parse(b['data-user']))}}`);
    body.push(`      <AppShell${props.length ? ' ' + props.join(' ') : ''}>`);
    body.push(emit(mainNode, 4));
    body.push('      </AppShell>');
    for (const o of others) { const e = emit(o, 3); if (e) body.push(e); }
  } else {
    for (const o of others) { const e = emit(o, 3); if (e) body.push(e); }
  }

  let tree;
  if (dom.bg) {
    used.add('Backdrop');
    bgImport = `import Background from '@/screens/${dom.bg}';\n`;
    const bgCls = locals.has('bg') ? ' className={s.bg}' : '';
    tree = `    <>\n      <Backdrop${bgCls}>\n        <Background />\n      </Backdrop>\n      ${rootOpen}\n${body.map(l => '  ' + l).join('\n')}\n      </div>\n    </>`;
  } else {
    tree = `    ${rootOpen}\n${body.join('\n')}\n    </div>`;
  }

  const ds = ['AppShell', 'Avatar', 'Backdrop', 'Button', 'Icon', 'Kbd', 'Pill', 'StatusIcon', 'Tag', 'ThemeSegment', 'TypeDot', 'cx'].filter(n => used.has(n));
  const title = dom.title.replace(/^[^:]*:\s*/, '');
  const tsx = `// GENERATED from design/html/${view.mockup}.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
${used.has('Link') ? "import Link from 'next/link';\n" : ''}${ds.length ? `import { ${ds.join(', ')} } from '@/components/ds';\n` : ''}${bgImport}${css ? "import s from './view.module.css';\n" : ''}
export const title = ${lit(title)};

export default function ${compName(view.mockup)}() {
  return (
${tree}
  );
}
`;
  const dir = resolve(STARTER, 'screens', view.mockup);
  mkdirSync(dir, { recursive: true });
  // A view whose index.tsx no longer starts with "// GENERATED" is hand-maintained (e.g. 01-home): keep it.
  const target = resolve(dir, 'index.tsx');
  let handMade = false;
  try { handMade = !readFileSync(target, 'utf8').startsWith('// GENERATED'); } catch { /* new view */ }
  if (!handMade) writeFileSync(target, tsx);
  if (css) writeFileSync(resolve(dir, 'view.module.css'), `/* GENERATED from the page-local <style> of design/html/${view.mockup}.html (kit classes wrapped in :global, view root = .v). */\n${css}\n`);
  writeFileSync(resolve(STARTER, 'pages', 'views', `${view.mockup}.tsx`),
    `import Head from 'next/head';\nimport View, { title } from '@/screens/${view.mockup}';\nimport { site } from '@/lib/site';\n\nexport default function Page() {\n  return (\n    <>\n      <Head><title>{\`\${site.name}: \${title}\`}</title></Head>\n      <View />\n    </>\n  );\n}\n`);
  return { title };
}

// ---------------------------------------------------------------- main
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || 'msedge' });
const context = await browser.newContext({ viewport: { width: 1600, height: 1060 } });
const titles = {};
for (const view of VIEWS) {
  const page = await context.newPage();
  const file = resolve(MOCKUPS, `${view.mockup}.html`);
  const mainUrl = pathToFileURL(file).href;
  await page.route('**/*', r => {
    const u = r.request().url();
    if (u.endsWith('/assets/shell.js') || (u.endsWith('.html') && u.split('?')[0] !== mainUrl)) return r.abort();
    return r.continue();
  });
  await page.goto(mainUrl);
  await page.evaluate(() => document.fonts.ready);
  const dom = await page.evaluate(serialize);
  await page.close();
  titles[view.mockup] = generate(view, dom).title;
  process.stdout.write(`${view.mockup} `);
}
await browser.close();

// registry of every generated view (index page + tests)
const all = ALL.filter(v => titles[v.mockup] || existsTitle(v.mockup));
function existsTitle(m) {
  try { return /export const title = "([^"]*)"/.exec(readFileSync(resolve(STARTER, 'screens', m, 'index.tsx'), 'utf8'))[1]; } catch { return null; }
}
const reg = all.map(v => `  { id: '${v.id}', name: '${v.name}', mockup: '${v.mockup}', title: ${lit(titles[v.mockup] || existsTitle(v.mockup))} },`).join('\n');
writeFileSync(resolve(STARTER, 'screens', 'registry.ts'), `// GENERATED by scripts/convert-mockups.mjs. Every reference view in this starter, in docs/SCREENS.md order.
// Ids with a letter (07b, 20b …) are sub-views of the screen with the same number: tabs, steps, dialogs.
export type ViewEntry = { id: string; name: string; mockup: string; title: string };

export const views: ViewEntry[] = [
${reg}
];
`);
console.log(`\n${VIEWS.length} view(s) generated; registry has ${all.length}.`);
