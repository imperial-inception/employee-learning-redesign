# Codex brief: implement the Skill Portal redesign

Paste this file as the **first message** of a fresh Codex thread in the Skill Portal app repository (after copying this design kit into it, see step 0). Attach `design/screens/00-overview.png` and `design/screens/01-home.png` to that first message (`codex -i path1,path2` or paste). Use **high** reasoning for the recon/plan phase and **medium** for screen-by-screen iteration (OpenAI's frontend guidance; it changes by model, so adjust if a slice keeps failing).

To see every view at once, open `design/index.html` (the gallery: 34 screens and 32 sub-views, dark/light switch). Each card opens a clickable mockup: the sidebar, profile chip, tabs and steps lead to the matching view. Use it to understand the flow; the PNGs in `design/screens/` stay the pixel reference.

**Start from `starter/`.** It is the whole design already written as code for this app's stack (Next.js Pages Router, React 18, TypeScript 5, next to MUI 5 / Emotion and Tailwind 4): tokens, fonts, theme switch, the component layer, the shell, and all 62 views as React, each measured against its PNG in both themes. Read `starter/README.md` and `starter/PORTING.md` before Phase 0. Your job is to port that layer into the app and wire it to the real API, not to re-derive styles from the mockups.

---

## Goal

Rebuild the Skill Portal UI so every screen matches the reference design in `design/` (HTML/CSS mockups + PNG renders, dark and light) **while keeping every backend rule, permission and API contract exactly as it is**. Work screen by screen. A screen is done only when the evidence says so (see "Done when"), not when it compiles.

## You are implementing, not designing

This is the most important instruction in this brief.

- `docs/DESIGN_SYSTEM.md` and the mockups **are the established design system** for this app. Preserve them. Do not be creative.
- **Do not add** colours, fonts, gradients, shadows, glass/blur, card styles, illustrations, emoji, animations or layout ideas that are not in the reference. Do not “improve” spacing or copy.
- If something is ambiguous, resolve it in this order: (1) backend rules and `docs/CONCEPT.md`, (2) `docs/DESIGN_SYSTEM.md`, (3) `docs/SCREENS.md`, (4) the mockup's **HTML/CSS** (exact values live here), (5) the PNG (overall look). If still unclear, write the question to `design/QUESTIONS.md` and choose the most conservative option. Never invent.
- Exact values (sizes, spacing, radii, colours, font sizes) come from `design/html/assets/styles.css` and each mockup's `<style>` block. Read the CSS; don't eyeball the PNG.
- **Calm density** (`docs/DESIGN_SYSTEM.md` §0) is a hard rule: show only what the user needs for the next decision; secondary detail goes behind one click. Never add panels, stats or text that aren't in the reference, even if the API has the data.

## Context

- Read first: `docs/CONCEPT.md` (what the product is and its rules), `docs/DESIGN_SYSTEM.md` (tokens, components, status system, icons, motion, accessibility), `docs/SCREENS.md` (per-screen spec + acceptance), `design/html/*.html` + `design/html/assets/*` (reference implementation), `design/screens/*.png` (dark) and `*-light.png`.
- Mockups use **placeholder names and data** (LMS, Library, Academy, Intranet, HR directory, Job catalog, levels L1–L5, sample people). In the app, show the real names and the real data from the API. Never hard-code mockup text.
- The backend owns identity, permissions, business rules and trusted data. The UI renders what the API returns: **never compute status, counts, eligibility, “on time”, progress or permissions in the browser.** A hidden button is not security.
- **Product goal:** help employees improve themselves, and give managers the insight to understand and help their people. Recording and review are plumbing: keep them quiet in the UI (no top-level “records” destination; record actions appear only where they're useful).
- Navigation (final names): **Home · Learning (tabs: Find · Pathways · My learning) · Goals & pathways (incl. Next level) · Colleagues** + **Profile (top right)**; managers also get **My team: Team · Insights · Reports**, where reviewing submitted learning is Team's **Waiting for you** tab (not a separate destination); admins get a separate **Admin console**: Data health · Catalog · Pathway templates · Rules & populations · Sources · Access & audit. Connected agents (MCP) moves inside Profile. The shell keeps the **left sidebar** (workspace + bell, search/ask, nav, My team group, Admin console, Help). **Profile moves to the top right**: a profile chip (avatar, name, role) alone in a slim band above the page; its menu holds Profile, Connected agents, Theme, Sign out. There is no Profile item in the sidebar. Keep the app's existing base path; add redirects from every old URL.

## Constraints

1. **No backend behaviour changes** unless a task explicitly allows it. If a screen needs data the API doesn't provide, don't fake it: render the honest empty/unavailable state, and add the gap to `design/GAPS.md` (field, screen, why it's needed).
2. **Tokens and theme, as in the starter.** Use `starter/styles/ds.css` (generated from the mockup stylesheet: tokens on `:root` = dark, the default, and `[data-theme="light"]`; every kit rule scoped to `[data-ds]`) plus `ds-reset.css` and `ds-additions.css`, imported in `_app` in that order. One `data-theme` attribute on `<html>` drives CSS, the MUI theme (`lib/mui-theme.ts`) and ECharts (`lib/echarts-theme.ts`); make the app's existing theme switch set it (`starter/lib/theme.ts`). Keep the brand colour as `--brand`. **No raw hex/rgb values in components**, only tokens; keep the raw-colour lint (`starter/scripts/check-no-raw-colors.mjs`) in the lint script.
3. **Fonts:** Geist + Geist Mono, self-hosted from `starter/public/fonts` (the same files the mockups and PNGs use) via `@font-face` in `ds.css`, preloaded in `_document`. Numbers, codes, IDs, dates in metadata and keyboard hints use Geist Mono / `tabular-nums`.
4. **Component layer before screens.** Port `starter/components/ds` (see its README: `DsRoot`, `AppShell`, `Button`, `Icon`, `StatusIcon`, `StatusPill`, `Pill`, `Tag`, `TypeDot`, `Kbd`, `Avatar`, `ProgressRing`, `ThemeSegment`) and use the kit classes from `ds.css` for panels, rows, tables, tabs and controls exactly as the generated views do. For behaviour (dialog, menu, popover, tabs, autocomplete, data grid, date picker) use the app's MUI components themed by `lib/mui-theme.ts`, with design-system markup inside them. Don't create near-duplicates; add a component to `components/ds` (and its README) only when two screens need it.
5. **Status** comes only from the API enum through `StatusIcon`/`StatusPill` (glyph + colour + text). Copy the `st-*` SVGs from `design/html/assets/shell.js`.
6. **Libraries:** the starter adds **no new runtime library** to an app that already has Next.js, React 18, MUI 5 / Emotion and Tailwind 4. Fetch data with the app's existing HTTP client and relay; charts with the app's ECharts and `lib/echarts-theme.ts`; tests with the existing Jest/React Testing Library plus Playwright for the visual harness (dev-only). Anything else must be allowed by the internal package registry and justified in the PR; if one isn't allowed, tell me and pick the closest allowed option. Don't add a client-side LLM SDK; the advisor stays behind the backend.
7. **One screen per task.** Don't start the next screen until the current one meets “Done when”. One writer on the repo at a time. Commit each finished screen separately with a clear message.
8. Check the installed Next.js version first. If it ships version-matched docs in `node_modules/next/dist/docs/` or a managed AGENTS.md block, read them before using any Next API.
9. Accessibility: WCAG 2.2 AA. Visible focus ring (2px `--brand`), full keyboard operation, status never by colour alone, dialogs and palette trap and restore focus.
10. Remove nothing the user can do today unless `docs/SCREENS.md` says where it moved.
11. **Sub-views.** A reference named `NNx-name` (a letter after the number, e.g. `07b-profile-experience`, `05c-record-learned`, `20b-person-role`) is another state of screen `NN`: a tab, a step or a dialog. Build it in the same task as screen `NN`; it has its own reference PNG and its own acceptance criteria in `docs/SCREENS.md`. If you need a state that is drawn nowhere, don't invent a layout: compose it from the nearest drawn view and list it in `design/GAPS.md`.
12. **Roles and manager-set goals.** Managers assign each direct report a professional role from the admin-configured choices (`20b`, `10b`, admin `15d`), and can set a goal for a direct report (`20c`; the employee's side is `04b`). Follow the rules in `docs/CONCEPT.md`. If the API can't do one of these yet, hide that action, show nothing fake, and log it in `design/GAPS.md`.
13. **Open product decisions.** Three behaviours are drawn as defaults that I have not confirmed yet: (a) an employee cannot decline a goal their manager set, only comment on it and discuss it in a 1:1 (`04b`); (b) the manager sees an employee's quick-feedback answers, but they never affect the review decision (`05e`, `09`); (c) activity owners see combined feedback only after 5 or more answers (`15f`). Build the defaults, keep each one in a single place (one constant or server setting, not repeated across components) so a change is a one-line edit, and add no UI to change them.

## Verification loop (build this first; use it for every screen)

Set this up in Phase 1 (templates in `codex/verification/`):

1. **Two Playwright projects** sharing one snapshot path:
   - `mockup` loads `design/html/<screen>.html` (file URL) and writes the **reference** screenshots (`--update-snapshots`, run once per screen). Baselines are made on this machine with the same browser and fonts, so font rendering matches.
   - `app` loads the real route with **deterministic fixture data that matches the mockup text** (add a test-only fixture mode, e.g. a mock upstream for the API relay or MSW; your choice, document it) and compares against the same baselines.
   - Viewport **1600×1060**, `deviceScaleFactor: 1`, themes **dark and light**, animations disabled, dynamic text (times, avatars) masked. If browser downloads are blocked, use `channel: 'msedge'`.
2. Threshold: `maxDiffPixelRatio: 0.03` from the start (the starter's own views measure 0–0.6% against the same mockups, so a bigger gap means something real). Report the actual ratio per screen and theme (`starter/scripts/visual-diff.mjs` prints it); never claim “pixel-perfect”.
3. **Accessibility:** `@axe-core/playwright` with tags `wcag2a, wcag2aa, wcag21a, wcag21aa`: zero violations. Plus a scripted keyboard pass of the screen's main flow.
4. **Responsive smoke test** (no pixel baseline): no horizontal scroll and no clipped text at 1280×800 and 1920×1080.
5. **For each screen, loop:** implement → `tsc` → lint → that screen's visual + axe + keyboard tests → open the `*-diff.png`, put the app screenshot and the reference side by side and **write a numbered list of every visible difference** (layout, spacing, size, colour, type, missing element, missing state) → fix → repeat. Maximum 3 rounds, then stop and report what remains and why.

## Phases

**Phase 0: Recon (no code changes).** Read the repo: routes, layouts, existing components and styles, API client, auth, feature flags, test setup, Next/React/Tailwind versions. Write `design/RECON.md`: (a) map of each reference screen → existing route(s)/component(s)/API endpoints; (b) data each screen needs vs what the API returns today (feeds `design/GAPS.md`); (c) old URL → new URL redirect table; (d) risks; (e) the exact slice order you propose. Stop and wait for my OK.

**Phase 1: Foundation.** Port the starter foundation (`starter/PORTING.md` Steps 1–3): CSS files and fonts, the single theme switch, `components/ds`, the MUI and ECharts themes, `AppShell` with the new nav behind a feature flag (old UI keeps working until each screen lands), the verification harness, and a `/ui-kit` page like the starter's. Run `check-collisions.mjs` against the app first and fix what it lists. Done when the ui-kit page matches the starter's, is axe-clean in both themes, and the raw-colour lint passes.

**Phase 2: Screens, one per task, in this order:**
`01 Home` → `03 Learning` + `02 palette` → `04 Goals & pathways` + `18 goal editor` + `19 pathway browser` → `05 Record learning` → `06 My learning` → `07 Profile` + `23 connected agents` → `08 Colleagues` → `10 Team` + `20 person view` → `09 Team › Waiting for you` → `33 Waiting for you (bulk)` → `32 Record for your team` → `31 Manager home` → `26 1:1 prep` → `30 Insights` → `11 Reports` → `25 Next level` → `12 Data health` → `13 Catalog` → `16 Sources` → `14 Pathway templates` → `15 Rules & populations` → `17 Access` + `24 Audit log` → `21 Welcome` → `22 Notifications`.
Proposal screens `27–29` (skills map, LMS completions inbox, mobile) are **out of scope** until I approve them in writing.
**Bulk approve (33) and team record (32) need backend support** (a bulk decision endpoint and a roster endpoint that checks the manager relationship for every person and records creator + approver). If the API doesn't have them, build the UI against the contract you propose in `design/GAPS.md`, keep it behind a feature flag, and stop to ask me before changing the backend. “Count as approved now” on 32 stays disabled until HR/quality sign off.

**Phase 3: Polish.** Motion per `docs/DESIGN_SYSTEM.md` §5, empty/loading/error states on every panel, keyboard shortcuts (R record, / search, A/R in Waiting for you), redirect cleanup, remove the old UI behind the flag.

## Done when (per screen)

- [ ] Matches the reference in **dark and light** at 1600×1060 within the agreed diff ratio; the difference list is empty or every remaining item is explained.
- [ ] Every number, status and label comes from the API (no mockup text in code); missing data uses the honest empty state; gaps logged.
- [ ] `docs/SCREENS.md` acceptance criteria for this screen all pass.
- [ ] axe: 0 violations; keyboard pass works; focus visible.
- [ ] No horizontal scroll or clipping at 1280×800 and 1920×1080.
- [ ] `tsc`, lint (incl. raw-colour rule) and existing tests pass.
- [ ] Only components from the component layer are used.

## How to report after each screen

```
Screen: <id + name>
Sub-views: <each id with its diff ratio, dark · light, or “none”>
Diff ratio: dark <x%> · light <y%>   (threshold <t%>)
Remaining differences: <numbered list or “none”>
Acceptance criteria: <n/n passed, list any failed>
axe: <0 violations | list>   Keyboard: <pass/fail>
API gaps logged: <list or “none”>
Files changed: <list>
Not verified: <anything you could not check, and why>
```
Be precise about what you ran versus what you assume. “Builds” is not “done”.
