# Porting the starter into the app

Target: a Next.js **Pages Router** app (13+), React 18, TypeScript 5, with MUI 5 / Emotion and Tailwind 4 already in
use, and an existing API behind it. The backend, auth, permissions and API contracts **do not change**. Old screens keep
working while new ones land one at a time.

## The idea in one picture

```
 app page (pages/team.tsx)                         design layer (copied from starter/)
 ─────────────────────────                         ──────────────────────────────────
 getServerSideProps / useQuery ── API data ──►  adapter  ──►  ScreenView({ data })  ──►  components/ds
                                    (one function per screen:              (markup + kit classes,
                                     API shape → screen shape)              no data fetching)
```

Fetching stays where it is today (the app's HTTP client and relay). New code only adds an **adapter** (API response →
the screen's `types.ts` shape) and the **view** (markup from `screens/<view>`).

## Step 1: bring in the foundation (one PR, no visible change)

1. Copy `styles/ds-reset.css`, `styles/ds.css`, `styles/ds-additions.css` (and `tailwind-tokens.css` if you use Tailwind),
   `components/ds/`, and `lib/{tokens.generated,status,theme,routes,format,mui-theme,echarts-theme}.ts`.
   Copy `public/fonts/*` (Geist + Geist Mono, SIL OFL; keep the licence file).
2. In `pages/_app.tsx`, import in this order, after the app's own global CSS:
   `ds-reset.css` → `ds.css` → `ds-additions.css`. CSS Modules load after these automatically.
3. In the app's first global CSS file, **before** `@import "tailwindcss"`, declare the layer order:
   `@layer theme, base, ds-reset, components, utilities;` This puts the reset above Tailwind's preflight but below
   its utilities. Without Tailwind, keep the line anyway (harmless).
4. In `pages/_document.tsx`, inline `themeInitScript` from `lib/theme.ts` in `<Head>` and preload the two fonts
   (see `starter/pages/_document.tsx`).
5. Run `node starter/scripts/check-collisions.mjs <app root>`. Rename anything it lists (or prefix the tokens) before going on.
6. Nothing changes yet, because every design rule only applies inside `[data-ds]`.

## Step 2: one theme switch

The app has its own light/dark today. Make **one** switch drive everything:
- it sets `document.documentElement.dataset.theme = 'light' | 'dark'` (that is all the CSS needs),
- the MUI `ThemeProvider` gets `createDsMuiTheme(mode)` with `mode = useThemeMode()` (re-renders on change),
- ECharts instances are re-created with `echartsTheme(mode)` when it changes.
Store the choice under the existing key if there is one; `THEME_STORAGE_KEY` in `lib/theme.ts` is the only place to change.

## Step 3: the shell behind a feature flag

Render the new layout for redesigned pages only:

```tsx
// a layout used by redesigned pages
<DsRoot>
  <AppShell active="team" manager={me.isManager} counts={{ team: me.waitingCount }} user={me.shellUser}>
    {children}
  </AppShell>
</DsRoot>
```

- `manager`, `counts` and `user` come from the API's "me" response. Never guess them in the browser.
- Set the real URLs in `lib/routes.ts`.
- **Portals:** MUI Dialog / Menu / Popover render into `document.body`, outside `[data-ds]`. For design-system content
  inside a portal, wrap the portal content in `<div data-ds="">` (MUI: `slotProps={{ paper: { 'data-ds': '' } }}` or a
  wrapper inside the Paper). Tokens are global, so colours work either way. The kit classes need the attribute.

## Step 4: screens, one per task (order in CODEX_PROMPT.md)

For each screen:
1. Write `types.ts` (what the screen needs) and the **adapter** from today's API. Anything the API can't provide goes to
   `design/GAPS.md`, and the UI shows the honest empty state (never invent data).
2. Copy `screens/<view>/view.module.css` as is, and the markup from `screens/<view>/index.tsx`. Keep class names and
   nesting (the CSS depends on them); replace literals with data, following `screens/01-home`.
3. Its sub-views (07b, 20b …) are tabs, steps or dialogs of the same screen: same task.
4. Verify with the harness (`tests/design`) against the reference PNG: ≤ 3% in both themes, axe clean, keyboard pass.

## Traps (each one cost time once)

| Trap | What happens | Already handled by |
|---|---|---|
| Global reset (preflight, CssBaseline) | headings, lists, svg and buttons shift by a few px | `ds-reset.css` (keeps SVG drawing attributes intact) |
| Specificity drift | a rule that lost in the mockup wins in the app | `:where([data-ds])` and `:where(.v)` add zero specificity |
| Generic class names | `.panel` or `--text` already used by the app | `check-collisions.mjs` |
| CSS order | a page rule loses a tie it won in the mockup | global ds CSS in `_app`, page CSS as CSS Modules (load later) |
| Whitespace in JSX | words or icons touch, or text wraps differently | generated views keep every rendered space as `{" "}`; keep them when editing |
| Status logic in the browser | counts/progress disagree with reports | `lib/status.ts` maps the API enum only; the API computes everything |
| Two theme switches | MUI dark, page light | one `data-theme` attribute, Step 2 |
| Icons | lucide shapes differ slightly from the reference | `components/ds/Icon` draws the design's own set; lucide only for icons the set lacks |

## What is NOT in the starter

Data fetching, auth, permissions, form handling, validation, optimistic updates, real search, real charts (the views
draw static SVG; use ECharts with `lib/echarts-theme.ts`), routing beyond `/views/*`. Those stay in the app.
