# Skill Portal: redesign kit

High-fidelity redesign of **Skill Portal**, an employee development app whose goal is simple: **help employees improve themselves, and give managers the insight to understand and help their people.** Includes every screen (employee, manager, admin) in dark and light, plus a complete brief for an AI coding agent (Codex) to implement it.

**Style:** “Linear-grade”: dark-first with a polished light mode, Geist type, hairline borders instead of shadows, monochrome plus one accent, dense aligned lists, keyboard-first (Ctrl K), status shown by shape + colour + text.

> All names, people, course codes and numbers in this kit are **placeholders** (LMS, Library, Academy, Intranet, HR directory, Job catalog, levels L1–L5). The real app shows real data from its API.

## What's inside

| Path | What it is |
|---|---|
| `CODEX_PROMPT.md` | **Start here if you're the implementer.** The full brief: goal, rules, phases, verification loop, done-when, report format |
| `codex/GOAL.md` | Text for Codex `/goal` (use after the first screen passes the loop) |
| `codex/AGENTS.md` | Block to paste into the app repo's `AGENTS.md` |
| `codex/verification/` | Playwright config + specs (mockup vs app screenshots, axe a11y), raw-colour lint |
| `docs/CONCEPT.md` | What Skill Portal is and the product rules the UI must respect |
| `docs/DESIGN_SYSTEM.md` | Tokens (dark + light), type, spacing, status system, components, icons, motion, accessibility |
| `docs/SCREENS.md` | Spec + acceptance criteria for every screen |
| `docs/PRODUCT_VISION.md` | Why people would open it, feature proposals, architecture changes, metrics |
| `design/html/` | The mockups: plain HTML/CSS, open any file in a browser; add `?theme=light` for light mode |
| `design/screens/` | Rendered PNGs, 1600×1060 @2x: `<name>.png` (dark) and `<name>-light.png` |
| `tools/render.ps1` | Re-renders every mockup with headless Edge (Windows) |

## The screens

### Overview
| | |
|---|---|
| ![Overview](design/screens/00-overview.png) | **00 · Overview**: the learning loop, the new navigation, six principles. [light](design/screens/00-overview-light.png) |

### Employee
| | |
|---|---|
| ![Home](design/screens/01-home.png) | **01 · Home**: one focus goal, one next step, inbox, quarter stats. [light](design/screens/01-home-light.png) |
| ![Command palette](design/screens/02-command.png) | **02 · Command palette (Ctrl K)**: search, ask the advisor, run actions. [light](design/screens/02-command-light.png) |
| ![Learning](design/screens/03-learning.png) | **03 · Learning**: search with specific “why”, filters, advisor with cited sources. [light](design/screens/03-learning-light.png) |
| ![Colleagues](design/screens/08-colleagues.png) | **08 · Colleagues**: find people by skill; opt-in; self-reported vs confirmed. [light](design/screens/08-colleagues-light.png) |
| ![Goals & pathways](design/screens/04-goals.png) | **04 · Goals & pathways**: focus goal + pathway timeline with honest states. [light](design/screens/04-goals-light.png) |
| ![Growth](design/screens/25-growth.png) | **25 · Next level** (inside Goals & pathways): what changes at the next job level, with your evidence. [light](design/screens/25-growth-light.png) |
| ![Goal editor](design/screens/18-goal-editor.png) | **18 · Goal editor**: due date drives timeframe; link learning. [light](design/screens/18-goal-editor-light.png) |
| ![Pathways](design/screens/19-pathways.png) | **19 · Browse pathways**: preview before adopting. [light](design/screens/19-pathways-light.png) |
| ![Record learning](design/screens/05-record-new.png) | **05 · Record learning**: 6-step flow with manager preview. [light](design/screens/05-record-new-light.png) |
| ![My learning](design/screens/06-my-learning.png) | **06 · Learning › My learning**: what you've done, what's in review, what came back, exports. [light](design/screens/06-my-learning-light.png) |
| ![Profile](design/screens/07-profile.png) | **07 · Profile**: experience, tools, privacy, connected agents. [light](design/screens/07-profile-light.png) |
| ![Agent confirm](design/screens/23-agent-confirm.png) | **23 · Connected agents**: approve or decline what an agent proposes. [light](design/screens/23-agent-confirm-light.png) |
| ![Welcome](design/screens/21-welcome.png) | **21 · Welcome**: first run for a new employee, honest empty states. [light](design/screens/21-welcome-light.png) |
| ![Notifications](design/screens/22-notifications.png) | **22 · Notifications**: grouped, actionable, daily digest. [light](design/screens/22-notifications-light.png) |

### Manager
| | |
|---|---|
| ![Manager home](design/screens/31-manager-home.png) | **31 · Manager home**: your next step, then your team today. [light](design/screens/31-manager-home-light.png) |
| ![Reviews](design/screens/09-reviews.png) | **09 · Reviews**: queue by due date; shared feedback vs private note; A / R keys. [light](design/screens/09-reviews-light.png) |
| ![Bulk reviews](design/screens/33-reviews-bulk.png) | **33 · Reviews · bulk**: approve several at once; rows that need individual review are locked with a reason. [light](design/screens/33-reviews-bulk-light.png) |
| ![Team record](design/screens/32-team-record.png) | **32 · Record for your team**: one roster after a team session or shared course; creates a record per person. [light](design/screens/32-team-record-light.png) |
| ![Team](design/screens/10-team.png) | **10 · Team**: support, not ranking; counting rules stated. [light](design/screens/10-team-light.png) |
| ![Person](design/screens/20-person.png) | **20 · One person**: plan, evidence, experience to confirm, private notes. [light](design/screens/20-person-light.png) |
| ![1:1 prep](design/screens/26-one-on-one.png) | **26 · 1:1 prep**: shared agenda that builds itself. [light](design/screens/26-one-on-one-light.png) |
| ![Insights](design/screens/30-team-insights.png) | **30 · Team insights**: review backlog, learning mix, skill coverage, goals, due soon, 1:1 cadence. [light](design/screens/30-team-insights-light.png) |
| ![Reports](design/screens/11-reports.png) | **11 · Reports**: audit-ready evidence, approved only. [light](design/screens/11-reports-light.png) |

### Admin console
| | |
|---|---|
| ![Data health](design/screens/12-admin-health.png) | **12 · Data health**: failures are loud; conflicts vs gaps; bulk decisions. [light](design/screens/12-admin-health-light.png) |
| ![Catalog](design/screens/13-admin-catalog.png) | **13 · Catalog**: filters, health column, edit drawer with history. [light](design/screens/13-admin-catalog-light.png) |
| ![Sources](design/screens/16-admin-sources.png) | **16 · Sources**: honest status, run history, preview before publish. [light](design/screens/16-admin-sources-light.png) |
| ![Templates](design/screens/14-admin-templates.png) | **14 · Pathway templates**: revisions, diff, impact, require-by date. [light](design/screens/14-admin-templates-light.png) |
| ![Rules](design/screens/15-admin-rules.png) | **15 · Rules & populations**: rules in plain sentences, live match counts. [light](design/screens/15-admin-rules-light.png) |
| ![Access](design/screens/17-admin-access.png) | **17 · Access**: admins by name, roles, last-owner guard. [light](design/screens/17-admin-access-light.png) |
| ![Audit](design/screens/24-admin-audit.png) | **24 · Audit log**: every change with before → after. [light](design/screens/24-admin-audit-light.png) |

### Proposals (not agreed scope)
| | |
|---|---|
| ![Skills map](design/screens/27-skills-map.png) | **27 · Team skills map**: evidence-derived coverage, never a rating. [light](design/screens/27-skills-map-light.png) |
| ![LMS inbox](design/screens/28-lms-inbox.png) | **28 · LMS completions inbox**: no more retyping. [light](design/screens/28-lms-inbox-light.png) |
| ![Mobile](design/screens/29-mobile.png) | **29 · On the go**: employee home and manager review on a phone. [light](design/screens/29-mobile-light.png) |

### Sub-views: tabs, steps and dialogs (32)

A file named `NNx-name` is another state of screen `NN`, built in the same task. Each has a dark PNG (linked) and a `-light.png`, and its spec sits under its parent in `docs/SCREENS.md`.

| Screen | Sub-views |
|---|---|
| 02 Command palette | [Profile menu](design/screens/02b-profile-menu.png) |
| 03 Learning | [Course detail](design/screens/03b-learning-item.png) |
| 04 Goals & pathways | [Goal set by your manager](design/screens/04b-goals-manager-set.png) |
| 05 Record learning (step 4) | [1 Activity](design/screens/05b-record-activity.png) · [2 What you learned](design/screens/05c-record-learned.png) · [3 How you'll apply it](design/screens/05d-record-apply.png) · [5 Quick feedback](design/screens/05e-record-feedback.png) · [6 Review & submit](design/screens/05f-record-review.png) |
| 07 Profile (Overview) | [Experience](design/screens/07b-profile-experience.png) · [Tools](design/screens/07c-profile-tools.png) · [Certifications](design/screens/07d-profile-certifications.png) · [Education](design/screens/07e-profile-education.png) · [Job expectations](design/screens/07f-profile-job-expectations.png) · [Feedback](design/screens/07g-profile-feedback.png) · [Privacy](design/screens/07h-profile-privacy.png) |
| 08 Colleagues | [A colleague's profile](design/screens/08b-colleague-profile.png) |
| 10 Team | [Set a role inline](design/screens/10b-team-role-picker.png) |
| 11 Reports | [By framework](design/screens/11b-report-framework.png) · [Review turnaround](design/screens/11c-report-turnaround.png) · [Goal progress](design/screens/11d-report-goal-progress.png) |
| 12 Data health (Conflicts) | [Gaps](design/screens/12b-health-gaps.png) · [Missing links](design/screens/12c-health-missing-links.png) · [Formatting](design/screens/12d-health-formatting.png) |
| 15 Rules & populations (Populations) | [Frameworks](design/screens/15b-rules-frameworks.png) · [Required learning](design/screens/15c-rules-required.png) · [Roles](design/screens/15d-rules-roles.png) · [Reminders](design/screens/15e-rules-reminders.png) · [Feedback form](design/screens/15f-rules-feedback-form.png) |
| 20 One person | [Choose her professional role](design/screens/20b-person-role.png) · [Set a goal for her](design/screens/20c-person-goal.png) |
| 32 Record for your team (step 2) | [1 Activity](design/screens/32b-team-record-activity.png) · [3 Evidence](design/screens/32c-team-record-evidence.png) |

**Roles and manager-set goals:** a manager picks each direct report's professional role (20b, or inline on Team 10b) from the choices admins configure (15d), and can set a goal for a direct report (20c); the employee sees it labelled “Set by …” (04b).

## Using this with Codex (summary)

1. Copy `design/`, `docs/`, `codex/` and `CODEX_PROMPT.md` into the app repository.
2. Paste the block from `codex/AGENTS.md` into the app's `AGENTS.md`; restart Codex.
3. New thread → paste `CODEX_PROMPT.md`, attach `00-overview.png` + `01-home.png`. Codex does **Phase 0 (recon)** and stops.
4. Approve the plan → **Phase 1** (tokens, components, verification harness) → **Home** as the first screen through the full loop.
5. Only then start `/goal` with `codex/GOAL.md` for the remaining screens. Review each screen's report in `design/PROGRESS.md`, and finish with a human pass in the Codex in-app browser.

## View it locally (clickable)

Open `design/index.html` in a browser: a gallery of all 34 screens and 32 sub-views with a dark/light switch. Click one to open it; the sidebar, bell, search, profile chip, tabs and steps take you to the matching view. Inside a screen, **T** switches dark/light and **G** returns to the gallery.

Double-clicking the file works. To serve it instead (Windows, Python installed):

```powershell
python -m http.server 8791 --bind 127.0.0.1 --directory design
```

Then open http://localhost:8791/.

## Re-rendering the PNGs

```powershell
.\tools\render.ps1                         # all screens, dark + light
.\tools\render.ps1 -Names 01-home          # one screen
```

Fonts: Geist and Geist Mono are bundled under the SIL Open Font License 1.1 (`design/html/assets/fonts/OFL-LICENSE.txt`).
