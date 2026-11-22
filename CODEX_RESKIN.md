# Codex brief: re-skin the app (START HERE)

Paste this file as the **first message** of a fresh Codex thread in the app repository, after copying this kit
next to it (at least `starter/`). This replaces the full-redesign plan for now: the full redesign (`CODEX_PROMPT.md`,
`design/`, `starter/screens`) stays as a reference for later, not this task.

## Goal

Make the existing app **look and feel better without changing what it is**:

1. **Re-skin:** apply one polished MUI theme to the whole app. Same brand (blue top bar, navy surfaces), same layout,
   same screens, same flows. Cleaner components: consistent radii and heights, hairline borders instead of heavy
   gradients, clearer type hierarchy, readable secondary text, tinted status chips, calm alerts, a finished light mode.
2. **Restructure two areas for a better experience:** **Learning** and **Pathways** get a new inside structure
   (below), in the same brand and frame. **Home** keeps its layout with a few small fixes.

**Backend, API contracts, permissions and business rules do not change.** If a fix needs data the API doesn't return,
hide that part, show the honest empty state, and log it in `design/GAPS.md` (field, screen, why).

## Reference implementation (read and run it first)

```
cd starter && npm install && npm run dev        →  http://localhost:3100/mui
```

- `starter/mui/theme/index.ts` (`appThemeOptions(mode, brand)`, `createAppTheme`) and `starter/mui/theme/brand.ts`
  (the brand colours as inputs; defaults approximate today's app) and `starter/mui/theme/augment.d.ts` (type extensions).
- `/mui`: every MUI component the app uses, themed (compare your themed app against it).
- `/mui/home`, `/mui/learning?tab=role|discover|recommendations`, `/mui/pathways`: the three areas recreated from
  today's screens with the fixes applied. Their markup lives in `starter/pages/mui/*` and `starter/mui/screens/*`;
  their sample data in `starter/mui/data/*` (placeholder names; the app shows real data).
- `starter/mui/components/AppFrame.tsx`: today's frame (top bar + left menu + breadcrumbs), polished.

## Rules

1. **Use the app's own theme setup.** If the app builds its theme from a company design-system theme, **merge**:
   `createTheme(deepmerge(companyThemeOptions, appThemeOptions(mode, brand)))` (`deepmerge` from `@mui/utils`), with
   `brand` filled from the company theme's exact values (primary blue, background, paper…). Don't replace the company
   theme. If a company component ignores the theme (hard-coded styles), list it in `design/RESKIN_REPORT.md`, don't fork it.
2. **One theme switch.** The existing light/dark switch passes `mode` to the theme; nothing else changes.
3. **No new runtime libraries.** MUI, Emotion, Next.js, React as they are. Icons: keep the app's icon set.
4. **No layout changes outside the three areas.** Every other screen only picks up the theme.
5. **Colours only through the theme** (`theme.palette.*`, `sx` keys), never hex/rgb in components.
6. Accessibility: WCAG 2.1 AA contrast in both themes, visible focus, keyboard works, status = icon + text.
7. One screen per commit, clear messages. Run the existing tests, type check and lint before each commit.

## The fixes (only these)

**Home**
- "Choose your level" appears **once** (the info strip with its button), not in 3–4 places.
- "Your next steps": no "Course link missing" badge; each item shows one specific reason ("Fits your focus goal: SysML v2",
  "Required for your role by 15 Jan"); items suit the person's level.

**Learning** (restructured; tab in the URL `?tab=recommended|role|browse`)
- Tabs: **Recommended** (default) · **For your role** · **Browse all** (was "Discover learning").
- Items are **compact rows in one panel** (title + code, one meta line, one specific "Why", status, Add to plan, ⋯)
  instead of one big card each; the detail drawer stays. About 8 items fit above the fold.
- **One filter row** (search + Type, Status, Level, Requirement; active filters as removable chips); count and sort in
  the list header; pagination only at the bottom.
- **Recommended** is never empty: an ask bar (the page's one primary button) with example questions, then rows grouped
  by reason (For your goal · To reach your next level · Required for your role); asking shows the AI answer and its
  matches above the list.
- **For your role**: grouped by level in collapsible sections with progress ("L1 · 2 of 6 done"); your level open.
- No "Course link missing" badge for employees; the drawer's "Why this learning fits" is the API's specific reason;
  type ("Formal") and format ("Online") are separate.

**Pathways** (restructured; selected pathway in the URL `?id=`)
- Two panes: **your pathways** on the left (progress, next step) and **the selected pathway** on the right, instead of
  every pathway expanded on one page.
- The selected pathway shows a progress summary, a highlighted **Next step** (with Open training / Record learning),
  and its **stages as a numbered timeline** with status from data ("In progress" only when an activity started) and
  the activities under each stage (level as a small chip). Unstaged items go in "Other activities".
- One **"Explore pathways"** button (replaces "Browse templates" and the "Explore topic pathways" card) opens a panel
  of published pathways to add. One refresh control. No generic text repeated on every item.

**Menu:** the admin "Pathways" item is renamed "Pathway templates".

## Phases

**Phase 0: Recon (no code).** Find where the theme is created (and the company theme it builds on), the theme switch,
the frame (top bar, drawer, breadcrumbs), and the Home / Learning / Pathways pages with their API calls. Write
`design/RECON.md`: (a) theme files and how to merge, (b) the data each fix needs vs what the API returns today
(feeds GAPS.md), (c) risks. **Stop and wait for my OK.**

**Phase 1: Theme.** Merge the theme, wire the switch, set the brand values. Take before/after screenshots (dark + light)
of Home, the three Learning tabs, Pathways, Goals, Profile and one admin table into `design/RESKIN_REPORT.md`, with a
list of anything that looks wrong. Done when: nothing broke (tests, lint, types), no screen changed layout, AA contrast holds.

**Phase 2: The three areas**, one per commit: Home's next steps → Learning → Pathways. Rebuild each against the
starter's `/mui` page (Home: today's structure + fixes; Learning and Pathways: the new structure), wired to the real
API (adapters, not new endpoints).
Done when: side by side with the starter page in both themes there's no unexplained difference, the fixes are in,
existing tests pass, axe is clean, keyboard works.

## Report after each phase / screen

```
Screen/phase: <name>
Changed files: <list>
Before/after: <screenshot paths, dark + light>
Fixes applied: <list>   Not possible without API data: <list → GAPS.md>
Tests / lint / types: <pass/fail>   axe: <0 | list>   Keyboard: <pass/fail>
Not verified: <anything you could not check, and why>
```
Be precise about what you ran versus what you assume.
