# AGENTS.md block for the Skill Portal app repo

Copy the block below into the app repository's root `AGENTS.md` (create it if missing; keep the whole file under 32 KiB). Restart Codex after editing: instructions are loaded once per session.

```markdown
## UI redesign (design kit in design/)
- The UI follows docs/DESIGN_SYSTEM.md and the mockups in design/html/. This is an established design system: implement it, never redesign it. No new colours, fonts, gradients, shadows, card styles, animations or layout ideas.
- Precedence when unsure: backend rules and docs/CONCEPT.md > docs/DESIGN_SYSTEM.md > docs/SCREENS.md > mockup HTML/CSS (exact values) > PNG (overall look). Unresolved questions go to design/QUESTIONS.md.
- Tokens live in app/globals.css (light on :root, dark on .dark, default dark) and Tailwind @theme inline. No raw colour literals in components; the lint rule enforces it.
- Fonts: Geist + Geist Mono via next/font (geist package). Numbers, codes, dates and kbd use Geist Mono / tabular-nums.
- Components: use only the component layer listed in components/README.md. Status = StatusIcon/StatusPill mapped from the API enum, never computed in the browser.
- The backend owns identity, permissions, rules and trusted data. The UI never computes status, counts, eligibility, on-time, progress or permissions. Missing data = honest empty state + entry in design/GAPS.md.
- One screen per task. Done = the per-screen checklist in CODEX_PROMPT.md, proven by tests you ran.

### Commands
- Type check: <fill in, e.g. pnpm tsc --noEmit>
- Lint: <fill in>
- Unit tests: <fill in>
- Visual + a11y tests for one screen: npx playwright test -c playwright.design.config.ts --grep "<screen-id>"
- Refresh reference baselines for one screen: npx playwright test -c playwright.design.config.ts --project=mockup --grep "<screen-id>" --update-snapshots
- Dev server: started by the developer in a separate terminal on 127.0.0.1 (don't start long-running servers yourself unless asked).

### Verification
- Compare at 1600x1060, dark and light. Open *-diff.png, write a numbered list of differences, fix, max 3 rounds.
- axe (wcag2a, wcag2aa, wcag21a, wcag21aa): 0 violations. Keyboard pass for the main flow.
- Report per screen in design/PROGRESS.md using the template in CODEX_PROMPT.md. Never write "pixel-perfect"; report the measured diff ratio.
```
