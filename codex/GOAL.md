# /goal text for Codex

Use this only **after** Phase 0 (recon) and Phase 1 (foundation + verification harness) are done and at least one screen (Home) has passed the loop once. A long-running goal without a proven loop drifts.

Paste after `/goal`:

```
Implement the Skill Portal redesign screen by screen, following CODEX_PROMPT.md exactly, in the Phase 2 order listed there, skipping proposal screens 27–29.
Product goal: help employees improve themselves and help managers understand and support their people; keep recording/review quiet in the UI.
You are implementing an established design system (docs/DESIGN_SYSTEM.md + design/html mockups), not designing: add nothing that is not in the reference.
For each screen: implement with components from the component layer only, render data only from the API (log missing data in design/GAPS.md), then run tsc, lint, the screen's Playwright visual test (dark + light, 1600x1060) and axe test, list every visible difference against the reference and fix, at most 3 rounds.
Commit each screen separately and append its report (CODEX_PROMPT.md "How to report") to design/PROGRESS.md.
The evidence decides done: the goal is complete when every Phase 2 screen in design/PROGRESS.md shows diff ratio <= 3% in both themes, 0 axe violations, a passing keyboard test, and all docs/SCREENS.md acceptance criteria passed. If a screen cannot meet this after 3 rounds, record why in design/PROGRESS.md and continue to the next screen; stop and ask me if 3 screens in a row get stuck.
Never change backend behaviour, permissions or API contracts. Never claim a result you did not run.
```
