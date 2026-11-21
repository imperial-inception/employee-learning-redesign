# Codex brief: implement the Skill Portal redesign

Paste this file as the **first message** of a fresh Codex thread in the Skill Portal app repository (after copying this design kit into it, see step 0). Attach `design/screens/00-overview.png` and `design/screens/01-home.png` to that first message (`codex -i path1,path2` or paste). Use **high** reasoning for the recon/plan phase and **medium** for screen-by-screen iteration (OpenAI's frontend guidance; it changes by model, so adjust if a slice keeps failing).

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
- Navigation (final names): **Home · Learning (tabs: Find · Pathways · My learning) · Goals & pathways (incl. Next level) · Colleagues** + **Profile (top right)**; managers also get **My team: Reviews · Team · Insights · Reports**; admins get a separate **Admin console**: Data health · Catalog · Pathway templates · Rules & populations · Sources · Access & audit. Connected agents (MCP) moves inside Profile. The shell keeps the **left sidebar** (workspace + bell, search/ask, nav, My team group, Admin console, Help). **Profile moves to the top right**: a profile chip (avatar, name, role) alone in a slim band above the page; its menu holds Profile, Connected agents, Theme, Sign out. There is no Profile item in the sidebar. Keep the app's existing base path; add redirects from every old URL.

## Constraints

1. **No backend behaviour changes** unless a task explicitly allows it. If a screen needs data the API doesn't provide, don't fake it: render the honest empty/unavailable state, and add the gap to `design/GAPS.md` (field, screen, why it's needed).
2. **Tokens first, as code.** Put the tokens from `docs/DESIGN_SYSTEM.md` §1 into `globals.css`: light values on `:root`, dark values on `.dark`, **default theme dark** (next-themes `attribute="class"`, `defaultTheme="dark"`, `suppressHydrationWarning` on `<html>`, `disableTransitionOnChange`). Map them into Tailwind v4 with `@theme inline`. Keep the brand colour as `--brand` (shadcn's `--accent` means hover). **No raw hex/rgb values in components**, only tokens. Add a lint rule or test that fails on raw colour literals in `components/` and `app/`.
3. **Fonts:** Geist + Geist Mono via `next/font` from the `geist` package (self-hosted). Numbers, codes, IDs, dates in metadata and keyboard hints use Geist Mono / `tabular-nums`.
4. **Component layer before screens.** Use shadcn/ui (Radix) primitives restyled with the tokens; then build the app components listed in `docs/DESIGN_SYSTEM.md` §3 (`AppShell`, `NavItem`, `CommandPalette`, `PageHeader`, `Panel`, `ListRow`, `Tag`, `Pill`, `StatusIcon`, `StatusPill`, `WhyLine`, `ProgressRing`, `SegmentedBar`, `MilestoneTimeline`, `Stepper`, `EvidenceUploader`, `ReviewDecision`, `AdvisorPanel`, `DataTable`, `KPI`, `Banner`, `Kbd`, `EmptyState`, `Skeleton`, `ErrorState`). Screens may only use these. List them in `components/README.md` and reuse; don't create near-duplicates.
5. **Status** comes only from the API enum through `StatusIcon`/`StatusPill` (glyph + colour + text). Copy the `st-*` SVGs from `design/html/assets/shell.js`.
6. **Libraries** (check each is allowed by the internal package registry before adding; if one isn't, tell me and pick the closest allowed option): `tailwindcss@4`, shadcn/ui + Radix, `lucide-react`, `geist`, `next-themes`, `cmdk` (palette), `motion` (micro-interactions; honour `prefers-reduced-motion`), `@tanstack/react-query` (server state), `@tanstack/react-table` (admin tables), `nuqs` (tabs, filters and queries in the URL), `react-hook-form` + `zod` (forms), `sonner` (toasts), `react-dropzone` (evidence), `recharts` via shadcn charts (manager charts), `date-fns`. Use `tw-animate-css` (not `tailwindcss-animate`). Don't add a client-side LLM SDK; the advisor stays behind the backend.
7. **One screen per task.** Don't start the next screen until the current one meets “Done when”. One writer on the repo at a time. Commit each finished screen separately with a clear message.
8. Check the installed Next.js version first. If it ships version-matched docs in `node_modules/next/dist/docs/` or a managed AGENTS.md block, read them before using any Next API.
9. Accessibility: WCAG 2.2 AA. Visible focus ring (2px `--brand`), full keyboard operation, status never by colour alone, dialogs and palette trap and restore focus.
10. Remove nothing the user can do today unless `docs/SCREENS.md` says where it moved.
11. **Sub-views.** A reference named `NNx-name` (a letter after the number, e.g. `07b-profile-experience`, `05c-record-learned`, `20b-person-role`) is another state of screen `NN`: a tab, a step or a dialog. Build it in the same task as screen `NN`; it has its own reference PNG and its own acceptance criteria in `docs/SCREENS.md`. If you need a state that is drawn nowhere, don't invent a layout: compose it from the nearest drawn view and list it in `design/GAPS.md`.
12. **Roles and manager-set goals.** Managers assign each direct report a professional role from the admin-configured choices (`20b`, `10b`, admin `15d`), and can set a goal for a direct report (`20c`; the employee's side is `04b`). Follow the rules in `docs/CONCEPT.md`. If the API can't do one of these yet, hide that action, show nothing fake, and log it in `design/GAPS.md`.

## Verification loop (build this first; use it for every screen)

Set this up in Phase 1 (templates in `codex/verification/`):

1. **Two Playwright projects** sharing one snapshot path:
   - `mockup` loads `design/html/<screen>.html` (file URL) and writes the **reference** screenshots (`--update-snapshots`, run once per screen). Baselines are made on this machine with the same browser and fonts, so font rendering matches.
   - `app` loads the real route with **deterministic fixture data that matches the mockup text** (add a test-only fixture mode, e.g. a mock upstream for the API relay or MSW; your choice, document it) and compares against the same baselines.
   - Viewport **1600×1060**, `deviceScaleFactor: 1`, themes **dark and light**, animations disabled, dynamic text (times, avatars) masked. If browser downloads are blocked, use `channel: 'msedge'`.
2. Threshold: start with `maxDiffPixelRatio: 0.05`, tighten to 0.03 when the shell and primitives are stable. Report the actual ratio per screen and theme; never claim “pixel-perfect”.
3. **Accessibility:** `@axe-core/playwright` with tags `wcag2a, wcag2aa, wcag21a, wcag21aa`: zero violations. Plus a scripted keyboard pass of the screen's main flow.
4. **Responsive smoke test** (no pixel baseline): no horizontal scroll and no clipped text at 1280×800 and 1920×1080.
5. **For each screen, loop:** implement → `tsc` → lint → that screen's visual + axe + keyboard tests → open the `*-diff.png`, put the app screenshot and the reference side by side and **write a numbered list of every visible difference** (layout, spacing, size, colour, type, missing element, missing state) → fix → repeat. Maximum 3 rounds, then stop and report what remains and why.

## Phases

**Phase 0: Recon (no code changes).** Read the repo: routes, layouts, existing components and styles, API client, auth, feature flags, test setup, Next/React/Tailwind versions. Write `design/RECON.md`: (a) map of each reference screen → existing route(s)/component(s)/API endpoints; (b) data each screen needs vs what the API returns today (feeds `design/GAPS.md`); (c) old URL → new URL redirect table; (d) risks; (e) the exact slice order you propose. Stop and wait for my OK.

**Phase 1: Foundation.** Tokens + theme + fonts; shadcn primitives restyled; the app components; `AppShell` with the new nav behind a feature flag (old UI keeps working until each screen lands); `CommandPalette` (Ctrl/⌘ K); the verification harness; a `/ui-kit` page showing every component in both themes. Done when the ui-kit page is axe-clean in both themes and the raw-colour lint passes.

**Phase 2: Screens, one per task, in this order:**
`01 Home` → `03 Learning` + `02 palette` → `04 Goals & pathways` + `18 goal editor` + `19 pathway browser` → `05 Record learning` → `06 My learning` → `07 Profile` + `23 connected agents` → `08 Colleagues` → `09 Reviews` → `33 Reviews bulk` → `32 Record for your team` → `31 Manager home` → `10 Team` + `20 person view` → `26 1:1 prep` → `30 Insights` → `11 Reports` → `25 Next level` → `12 Data health` → `13 Catalog` → `16 Sources` → `14 Pathway templates` → `15 Rules & populations` → `17 Access` + `24 Audit log` → `21 Welcome` → `22 Notifications`.
Proposal screens `27–29` (skills map, LMS completions inbox, mobile) are **out of scope** until I approve them in writing.
**Bulk approve (33) and team record (32) need backend support** (a bulk decision endpoint and a roster endpoint that checks the manager relationship for every person and records creator + approver). If the API doesn't have them, build the UI against the contract you propose in `design/GAPS.md`, keep it behind a feature flag, and stop to ask me before changing the backend. “Count as approved now” on 32 stays disabled until HR/quality sign off.

**Phase 3: Polish.** Motion per `docs/DESIGN_SYSTEM.md` §5, empty/loading/error states on every panel, keyboard shortcuts (R record, / search, A/R in reviews), redirect cleanup, remove the old UI behind the flag.

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
Diff ratio: dark <x%> · light <y%>   (threshold <t%>)
Remaining differences: <numbered list or “none”>
Acceptance criteria: <n/n passed, list any failed>
axe: <0 violations | list>   Keyboard: <pass/fail>
API gaps logged: <list or “none”>
Files changed: <list>
Not verified: <anything you could not check, and why>
```
Be precise about what you ran versus what you assume. “Builds” is not “done”.
