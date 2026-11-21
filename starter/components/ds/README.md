# components/ds: the design-system component layer

Build screens from these components and the kit classes in `styles/ds.css`. Never restyle them per screen; screen
layout goes in the screen's `view.module.css`.

| Component | Use it for | Notes |
|---|---|---|
| `DsRoot` | wrapping every redesigned page (and portal content) | sets `data-ds`; every kit rule is scoped to it |
| `AppShell` | the layout of every redesigned page | sidebar (236px) + profile chip top right; props from the API's "me" |
| `Button` | actions | variants `secondary` (default) · `primary` (one per screen) · `accent` · `ghost` · `ok`; `danger`; sizes sm/md/lg; `href` → link |
| `Icon` | line icons | the design's own set (`icon-paths.generated.tsx`); sizes xs 12 · sm 14 · md 16 · lg 20 |
| `StatusIcon` | the status glyph | from the API enum only (`lib/status.ts`); `label=""` when text next to it says the status |
| `StatusPill` | status as a label | glyph + text, tone from the status |
| `Pill` | tinted labels | tones ok · rev · ret · bad · acc · info · neu |
| `Tag` + `TypeDot` | learning type, duration, source | Formal / Relational / Experiential dots |
| `Kbd` | keyboard hints | `Ctrl K`, `/`, `A` |
| `Avatar` | people | initials + tone (`avatarTone(personId)` for a stable colour); no photos |
| `ProgressRing` | focus-goal ring | segments from API counts |
| `ThemeSegment` | Dark / Light / System switch | writes `data-theme` |
| `Backdrop` | reference views only | the page behind a dialog in static views; not needed in the app |

## Kit classes (in `styles/ds.css`, used directly in markup)

Layout and text: `row` `stack` `grow` `sp` (push right) `ellipsis` `muted` `faint` `t2` `mono` `num` `c-ok` `c-warn` …
Surfaces: `panel` `panel-h` (with `h2`, `cnt`, `lnk`) `glow` (one per screen) `overlay` `banner` (`danger` / `warn` / `info`)
Lists: `li` (with `t`, `c`, `m`) `grp` · tables: plain `table/th/td` · data: `bar` (`a` `r` `p` `n`) `legend` `big` `hatch` (not recorded ≠ zero) `priv` (private notes)
Controls: `input` `textarea` `label` `help` `check` `toggle` `radio` `seg` `tabs` · page: `ph` `crumbs` `sub` `acts` · `why` `cite` `ai-mark`

Rules that matter most (DESIGN_SYSTEM.md): one primary action per screen; status = glyph + colour + text, from the API;
"Not recorded" is never shown as 0; the glow on at most one element; no raw colours (use the tokens).
