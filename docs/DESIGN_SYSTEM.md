# Skill Portal design system

The single source of truth for how the redesigned UI looks. The mockups in `design/html/` implement it in plain CSS (`design/html/assets/styles.css`). The real app must implement the **same tokens and rules**. For **token values** (colours, shadows) the mockup stylesheet `design/html/assets/styles.css` is canonical: the PNGs are rendered from it and `starter/styles/ds.css` is generated from it. For rules and behaviour, this file wins over a mockup.

Direction in one sentence: **"Linear-grade"**: dark-first, hairline borders instead of shadows, monochrome with one accent, dense aligned lists, mono type for numbers and codes, keyboard-first.

---

## 0. Calm density: the clutter rule (applies to every screen)

Dense is good; cluttered is not. A screen is cluttered when it shows things the user doesn't need for their next decision.

1. **One question per screen.** Write it down (“What should I do next?”, “Should I approve this?”). Everything on screen must help answer it.
2. **One primary action.** At most two secondary actions visible per region; the rest go in a “More” menu.
3. **At most ~4 regions** (panels/columns) above the fold. If you need a fifth, something is in the wrong place.
4. **Progressive disclosure.** Secondary detail lives one click away: expandable rows, a drawer, “Show details”, a tooltip. Not on the page by default.
5. **Rows show a title plus at most two metadata items.** More goes in the expanded row or drawer.
6. **No number without a purpose.** A KPI or chart must answer a question and lead to an action, and its title is the takeaway in words (“2 skills rest on one person”), not a label. Employee screens: no stat strips on Home; max 4 numbers anywhere. Manager screens: max 4 KPIs; charts live on the dedicated Insights page (max 6, each with an action), not sprinkled across other screens.
7. **Say it once.** One explanation per concept (as a help tooltip or empty state), never repeated on every row.
8. **Hide what's empty.** An empty section collapses to one honest line or disappears; never a big empty box.
9. **Whitespace is a feature.** When in doubt, remove, don't shrink.

---

## 1. Tokens

Implement these as CSS variables on `:root` (dark, the default) and `[data-theme="light"]`, switched by one `data-theme` attribute on `<html>` (`starter/lib/theme.ts`). Use them as `var(--token)` in CSS Modules (or the `ds-` Tailwind colours in `starter/styles/tailwind-tokens.css`); **never hard-code a colour in a component**.

### Colour: dark (default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#09090B` | page background |
| `--panel` | `#0D0D10` | sidebar |
| `--surface` | `#121215` | panels, cards, inputs |
| `--surface-2` | `#17171B` | inset areas, secondary buttons |
| `--surface-3` | `#1D1D22` | kbd, empty bar track, selected segment |
| `--hover` | `rgba(255,255,255,.045)` | row hover |
| `--sel` | `rgba(255,255,255,.075)` | selected row / active nav |
| `--line` | `rgba(255,255,255,.075)` | hairline borders, dividers |
| `--line-2` | `rgba(255,255,255,.13)` | stronger borders (inputs, tags, buttons) |
| `--text` | `#EDEDF0` | primary text |
| `--text-2` | `#C6C6CE` | secondary text |
| `--muted` | `#8C8C97` | labels, meta |
| `--faint` | `#5F5F6A` | section labels, disabled, counts |
| `--brand` | `#7D8BFF` | the one accent (mockup name: `--accent`) |
| `--brand-2` | `#A9B2FF` | accent text on dark |
| `--brand-bg` | `rgba(125,139,255,.13)` | accent pill background |
| `--brand-line` | `rgba(125,139,255,.38)` | glow edge, focus ring |
| `--cyan` | `#5CE1E6` | second stop of the brand gradient only |
| `--ok` / `--ok-bg` | `#3DD68C` / 12% | approved, success |
| `--warn` / `--warn-bg` | `#F2B544` / 12% | in review, waiting, stale |
| `--orange` / `--orange-bg` | `#FF8B4D` / 12% | returned |
| `--danger` / `--danger-bg` | `#FF5D6E` / 12% | rejected, failed, destructive |
| `--info` / `--info-bg` | `#5CC4FF` / 12% | neutral notices |
| `--t-formal` `--t-rel` `--t-exp` | `#7D8BFF` `#3DD6C3` `#FF9F5A` | learning-type dots |
| `--btn-primary-bg` / `-fg` | `#EDEDF0` / `#09090B` | primary button (inverted) |

### Colour: light

| Token | Value |
|---|---|
| `--bg` `--panel` `--surface` `--surface-2` `--surface-3` | `#FAFAFA` `#F4F4F5` `#FFFFFF` `#F7F7F8` `#EFEFF1` |
| `--hover` `--sel` | `rgba(0,0,0,.035)` `rgba(0,0,0,.06)` |
| `--line` `--line-2` | `rgba(9,9,11,.08)` `rgba(9,9,11,.14)` |
| `--text` `--text-2` `--muted` `--faint` | `#09090B` `#3F3F46` `#71717A` `#A1A1AA` |
| `--brand` `--brand-2` `--brand-bg` `--brand-line` | `#4B5BEF` `#3644D6` `rgba(75,91,239,.09)` `rgba(75,91,239,.35)` |
| `--ok` `--warn` `--orange` `--danger` `--info` | `#15A05A` `#CA8A04` `#EA580C` `#E11D48` `#0284C7` (backgrounds at ~10%; in review stays yellow-amber and returned red-orange so they never look alike) |
| `--btn-primary-bg` / `-fg` | `#09090B` / `#FFFFFF` |
| panels | add `box-shadow: 0 1px 2px rgba(9,9,11,.04), 0 2px 6px -2px rgba(9,9,11,.04)` (light only) |

### MUI and ECharts

Libraries that need literal colours read the same values from `starter/lib/tokens.generated.ts` (generated with `ds.css`):
- **MUI 5**: `createDsMuiTheme(mode)` in `starter/lib/mui-theme.ts` maps `--brand` → `primary`, `--bg`/`--surface` → `background.default`/`paper`, `--text`/`--muted`/`--faint` → `text.*`, `--line` → `divider`, `--ok`/`--warn`/`--danger`/`--info` → `success`/`warning`/`error`/`info`, and restyles Button, Paper, Dialog, Menu, Tooltip, TableCell, Chip, Tabs, OutlinedInput to the sizes below. No elevation shadows in dark mode.
- **ECharts**: `echartsTheme(mode)` in `starter/lib/echarts-theme.ts`; status series use `statusColor(mode)` so approved / in review / returned keep their meaning in charts.

### Typography

- **Geist** (UI) and **Geist Mono** (numbers, codes, IDs, timestamps, keyboard hints), self-hosted from `starter/public/fonts` (the same woff2 files the mockups use, SIL OFL) via `@font-face`, so there are no requests to external font servers and screenshots match the PNGs.
- Base 13.5px / 1.45. Page title 26px / 600 / letter-spacing −0.025em. Hero title 28px / 600 / −0.03em. Panel title 13.5px / 600. Meta 12–12.5px. Section labels: mono 11px, letter-spacing .07em, uppercase, `--faint`.
- All numbers in tables, KPIs, durations and dates use `font-variant-numeric: tabular-nums` (Geist Mono or `tabular-nums`).

### Space, shape, depth

- 4px grid. Page padding 26px 36px. Panel padding 14–16px. Gaps between panels 18px.
- Radius: panels 12px, inputs and buttons 8px (sm 7px), tags 6px, kbd 5px, overlays 14px.
- Borders: 1px `--line` everywhere; `--line-2` for interactive outlines. **No drop shadows in dark mode** except overlays (`0 24px 80px rgba(0,0,0,.6)`).
- Height scale: nav item 31px, buttons 32 (sm 28, lg 38), inputs 36, list rows ≥ 44, table rows 48, panel header 46.

### Glow (signature, use sparingly)

The `.glow` treatment is a gradient 1px border (`--brand-line` → `--line` → cyan at 35%) plus a soft outer glow and a faint brand wash in the top-left. **At most one element per screen** gets it: the focus goal on Today, the advisor panel on Find, the review decision panel, and so on. If everything glows, nothing does.

---

## 2. Status system (the most important component)

Status is shown by **shape + colour + text**, never colour alone. Implement one `<StatusIcon status>` component (SVGs in `design/html/assets/shell.js`, symbols `st-*`) and one `<StatusPill>`; map them **only** from the API's status enum.

| API status | Glyph | Colour | Label |
|---|---|---|---|
| `not_started` | dashed circle | `--faint` | Not started |
| `in_progress` | half-filled circle | `--brand` | In progress |
| `submitted` | ¾-filled circle | `--warn` | In review |
| `approved` | filled circle + check | `--ok` | Approved |
| `returned` | filled circle + back arrow | `--orange` | Returned |
| `rejected` | filled circle + × | `--danger` | Rejected |
| `locked` | padlock | `--faint` | Locked: “Opens when X is approved” |

Rules: only `approved` counts toward goals, progress and reports. A milestone or stage is "In progress" only if at least one activity has started. "On time" depends on the **submission** date, not the review date.

Learning types are marked with a small coloured dot inside a neutral tag: Formal (`--t-formal`), Relational (`--t-rel`), Experiential (`--t-exp`). Only Formal items have a course link.

---

## 3. Components (build these once, reuse everywhere)

| Component | Notes |
|---|---|
| `AppShell` | Left sidebar, 236px, `--panel` with a right hairline (light theme `#F4F4F5`): workspace button + bell, `Search or ask… Ctrl K` trigger, nav groups (Home · Learning · Goals & pathways · Colleagues; manager group My team), footer (Admin console / Help). **Profile corner** top right of the main area: a 52px band holding only the profile chip (30px avatar, name, role, chevron; `--surface` fill, `--line` border, pill radius; `--sel` + accent ring when on Profile) that opens Profile, Connected agents, Theme, Sign out. Content padding 2px 36px 28px below the band. Admin console is a separate workspace with its own sidebar. |
| `NavItem` | 31px, icon 16px `--muted`, active = `--sel` background + `--text`. Optional mono count on the right (`--danger` when it's an alert). |
| `CommandPalette` | a dialog with a filtered list (MUI Dialog, or `cmdk` if the registry allows it). Scopes (All, Learning, Pathways, People, Actions), first row “Ask the advisor: …”, grouped results, footer with keyboard hints and “Results respect your permissions”. |
| `PageHeader` | optional crumbs, title, one-line subtitle, right-aligned actions (max one primary). |
| `Panel` / `PanelHeader` | surface + hairline, 12px radius; header 46px with title, mono count, right link. |
| `ListRow` | ≥44px, status icon, title, context (muted), right-aligned mono meta; hover = `--hover`. |
| `Tag` | neutral outline tag with optional type dot. `Pill` = tinted status/label (`ok`, `rev`, `ret`, `bad`, `acc`, `info`, `neu`). |
| `WhyLine` | `Why` in brand colour + a specific reason (what matched, which pathway step, which goal). Never generic. |
| `ProgressRing`, `SegmentedBar`, `Legend` | approved / in review / not started, with counts. |
| `MilestoneTimeline` | vertical timeline of milestones with computed state and nested activities. |
| `Stepper` | record-learning flow; current step highlighted, completed steps checked. |
| `EvidenceUploader` | react-dropzone; files + links; size limits shown. |
| `ReviewDecision` | shared feedback (eye icon, “Priya will see this”) and private note (lock, dashed border, collapsed) visibly separate; Reject / Return (R) / Approve (A). |
| `AdvisorPanel` | glow panel, answer with numbered citations, source rows with actions, follow-up chips, input, scope note. |
| `DataTable` | TanStack Table: sticky header, row selection, bulk bar, column filters synced to the URL. |
| `KPI` / `StatStrip` | label, big tabular number, delta or context, optional sparkline. |
| `Banner` | `danger` / `warn` / `info`, tinted left fade, message, actions. |
| `Kbd` | mono 10.5px, 19px high. |
| `EmptyState`, `Skeleton`, `ErrorState` | every list and panel has all three. |

---

## 4. Icons

Use `<Icon name>` from `starter/components/ds` (the design's own set, generated from the mockups, so it matches the PNGs exactly): 16px in nav and rows, 14px in buttons, 12px in tags. For an icon the set lacks, use `lucide-react` with stroke 1.75; mockup name → closest Lucide name:

home→`House` · target→`Target` · search→`Search` · record→`ClipboardCheck` · user→`User` · inbox→`Inbox` · users→`Users` · chart→`ChartColumn` · shield→`ShieldCheck` · book→`BookOpen` · route→`Route` · sliders→`SlidersHorizontal` · cloud→`Cloud` · key→`KeyRound` · file→`FileText` · bell→`Bell` · help→`CircleHelp` · cr/cd/cl/cu→`ChevronRight/Down/Left/Up` · ext→`ExternalLink` · plus→`Plus` · check→`Check` · clock→`Clock` · lock→`Lock` · spark→`Sparkles` · clip→`Paperclip` · cal→`Calendar` · alert→`TriangleAlert` · refresh→`RefreshCw` · x→`X` · arrow→`ArrowRight` · enter→`CornerDownLeft` · filter→`Filter` · moon→`Moon` · sun2→`Sun` · link→`Link` · info→`Info` · eye/eyeoff→`Eye/EyeOff` · msg→`MessageSquare` · cap→`GraduationCap` · upload/download→`Upload/Download` · brief→`Briefcase` · send→`Send` · swap→`ArrowLeftRight` · more→`Ellipsis` · flag→`Flag` · grid→`LayoutGrid` · cmd→`Command`.

Status glyphs are **custom** (not Lucide): `<StatusIcon status>` in the starter (generated from the `st-*` SVGs in `shell.js`).

---

## 5. Motion

`motion` (Framer Motion) for: palette open (scale .98 → 1, 120ms), drawer slide (200ms), list item enter (opacity + 4px, 120ms, staggered ≤ 6 items), progress bar fill on first view (400ms). Respect `prefers-reduced-motion` (disable all of the above). No bouncing, no looping animations.

## 6. Accessibility (WCAG 2.2 AA)

- Text contrast ≥ 4.5:1 (≥ 3:1 for 18px+). Check `--muted` and `--faint` on every surface in both themes; `--faint` is only for non-essential text.
- Every interactive element is reachable by keyboard with a visible focus ring (2px `--brand`, 2px offset).
- Status never by colour alone (glyph + text). Charts have text equivalents.
- The palette, dialogs and drawers trap focus and restore it on close (Radix does this).
- Zoom to 200% without horizontal scroll at 1280px width.

## 7. Do / don't

| Do | Don't |
|---|---|
| Dense, aligned rows | Grids of identical rounded cards |
| One accent, used for meaning | Blue + purple gradients everywhere |
| Specific copy (“Sam reviews by 25 Nov”) | Boilerplate (“Learning you can choose for your development”) |
| “Not recorded” | “0” or “none” for missing data |
| One primary button per screen | Three equally loud buttons |
| Status from the API | Status computed in the browser |
| Glow on one element | Glow, glass and blur on everything |
