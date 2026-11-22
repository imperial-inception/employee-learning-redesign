# Starter: the redesign as working Next.js code

A design-only reference implementation of every view in `design/`, built for a **Next.js Pages Router app (13+) on
React 18 and TypeScript 5**, next to **MUI 5 / Emotion** and **Tailwind 4**. Data is static sample data and nothing
talks to a backend: the job of this folder is to hand over the **look**, proven, so the app only has to wire data.

**Proof:** each of the 62 views is screenshotted against its HTML mockup in dark and light (1600×1060). Almost all are
pixel-identical, and the worst measures well under the 3% pass mark. This is with Tailwind's preflight and MUI's
CssBaseline both active, like in a typical host app. Re-measure any time with `npm run diff` (see below).

## Re-skin (current plan): `/mui`

The app keeps its own brand, layout and screens; one MUI theme makes it look better.

- `mui/theme/index.ts` (`createAppTheme(mode, brand?)`, `appThemeOptions` for merging with a company theme) and
  `mui/theme/brand.ts` (the brand colours as inputs; defaults approximate today's app).
- `/mui`: every MUI component the app uses, themed. `/mui/home`, `/mui/learning`, `/mui/pathways`: today's screens
  recreated in MUI with the small fixes from `../CODEX_RESKIN.md`.
- `mui/components/AppFrame.tsx`: today's frame (blue top bar, left menu, breadcrumbs), polished.
- `mui/theme/linear.ts`: the full redesign's black/indigo theme, used only by the design-kit pages below.

## Run it

```powershell
cd starter
npm install
npm run dev            # http://localhost:3100 : index of all views, /ui-kit, /views/<id>
```

Press **T** to switch dark / light (or add `?theme=light`).

## What is in here

```
starter/
  styles/
    globals.css          layer order + Tailwind (host-app stand-in)
    ds-reset.css         undoes the host app's global reset inside the design area
    ds.css               GENERATED from design/html/assets/styles.css: tokens + the kit classes, scoped to [data-ds]
    ds-additions.css     hand-written: real links/buttons, hover, focus ring
    tailwind-tokens.css  tokens as Tailwind colours (bg-ds-surface …) for layout glue
  components/ds/         the component layer (README.md there): AppShell, Button, Pill, Tag, StatusIcon, Icon …
  lib/
    tokens.generated.ts  the same token values for JS (MUI, ECharts)
    mui-theme.ts         MUI 5 theme from the tokens
    echarts-theme.ts     ECharts theme from the tokens
    status.ts            API status enum → glyph, label, pill tone (the only place status is mapped)
    theme.ts             dark / light / system: one data-theme attribute drives everything
    routes.ts            every navigation target in one place (swap in the real routes)
    format.ts            presentation-only formatting (dates, "2 h", "a · b")
  screens/<view>/        one folder per view: index.tsx + view.module.css
    01-home/             HAND-WRITTEN, data-driven: types.ts (the screen's API shape), fixture.ts, index.tsx
    registry.ts          list of all views
  pages/                 _app (imports + providers), _document (theme before paint), index, ui-kit, views/<id>
  scripts/               generators, visual diff, lint, collision check
  tests/design/          Playwright visual + axe tests
```

## The two kinds of view

- **`screens/01-home` is the pattern.** `types.ts` is the data the screen needs (one screen-shaped API response),
  `fixture.ts` is sample data, `index.tsx` lays it out. Nothing is computed in the browser except formatting.
- **The other 61 views are generated** from the mockups (`npm run gen:views`): exact markup and classes, with the sample
  text hard-coded. To build one for real: copy its markup into the app screen, keep classes and structure, and
  replace the literals with data the way Home does. Delete the `// GENERATED` header line of a view you edit by hand
  and the generator will leave it alone.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | dev server on :3100 |
| `npm run build` / `npm run start` | production build / serve it on :3100 |
| `npm run typecheck`, `npm run lint` | TypeScript; ESLint + the raw-colour rule |
| `npm run gen` | regenerate `styles/ds.css`, tokens, and all views from `design/` (after a mockup changes) |
| `npm run diff` | build must exist; screenshots every view vs its mockup, prints the differing-pixel ratio per theme, writes diff images to `test-results/visual-diff/` |
| `npm run test:design:baseline` then `npm run test:design` | the Playwright harness (baselines from the mockups, then compare + axe) |
| `npm run check:collisions -- <app path>` | lists global CSS in the host app that would clash with the tokens or kit classes |

Browser for the scripts: Playwright's own Chromium, or an installed one with `PW_CHANNEL=msedge` / `chrome`.

## Bringing it into the app

Read **[PORTING.md](PORTING.md)**: the order of steps, what to copy, and the traps (global resets, theme switch,
MUI and Tailwind side by side, CSS order).
