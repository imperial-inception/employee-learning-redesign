# Implementation spec: Home, Learning, Pathways (re-skin plan)

Read with `CODEX_RESKIN.md`. This file says **how to build** the three screens so they behave right, not only look
right: what each section is for, the data it needs, who computes what, empty states, privacy, and how to test it.

- **Reference pages** (run `cd starter && npm run dev`): `/mui/home` (and `/mui/home?state=new`), `/mui/learning`
  (`?tab=recommended|role|browse`), `/mui/pathways` (`?id=`). Their markup: `starter/pages/mui/*`, `starter/mui/screens/*`.
- **Data contracts** = the exported TypeScript types in `starter/mui/data/home.ts`, `learning.ts`, `pathways.ts`,
  `levels.ts`. They are the shapes each screen needs. They are **proposals**: map the real API onto them in one adapter
  per screen (`toHomeData(apiResponse)` …). Never change a backend contract to fit them without my OK.

---

## 0. Rules for all three screens

1. **Data in, display out.** The API decides every status, count, progress number, due date, "why" text, eligibility
   and permission. The screen only formats and lays out. The starter computes a few of these in the browser so the demo
   works (`progress()`, `stageState()`, `nextActivity()`, `groupsOf()` in `starter/mui/data/pathways.ts`, per-level
   "x of y done" in Learning): in the app these come from the API. Use the starter functions as the **written rules**
   (and as test oracles), not as production logic.
2. **One adapter per screen**, unit-tested: API response → screen type. It is the only place that knows both shapes.
3. **Missing data → honest UI + `design/GAPS.md`.** If the API can't provide a field, hide that part (or show
   "Not recorded"), never invent it, and log: field, screen, why it's needed, proposed source.
4. **"Not recorded" is never 0.** `null` means unknown/not recorded (hatched meter, the words "Not recorded");
   `0` means known and none.
5. **Only approved learning counts** toward goals, skills and progress. "In review" is shown separately.
6. **Privacy:** colleagues appear only if they opted in to share their learning/skills (Profile › Privacy) AND the skill
   is manager-confirmed. Never show another person's level, score or ranking. Aggregates ("142 colleagues") only.
   The AI ask never receives goal text, private notes or manager notes; it may only cite catalog items the user can see.
7. **State in the URL:** Learning tab (`?tab=`), Pathways selection (`?id=`), filters and page (`?q=&type=&…&page=`).
   Back/forward and shared links must restore the view (shallow routing).
8. **Every panel has loading (skeleton), empty (one line + one action) and error (one line + retry) states.**
9. **One contained (primary) button per screen**; the rest outlined or text. Status = icon + text. Keyboard and screen
   reader friendly (labels on icon buttons, focus visible, drawers trap and restore focus).
10. **Tests** (existing Jest + React Testing Library): adapter tests (real-looking API JSON → screen type), component
    tests for empty/not-recorded/error states, URL-state tests; plus the visual check against the starter page.

---

## 1. Home: a skills home

**The question Home answers:** *"Where do my skills stand, and what's the one thing to do next?"*

### Layout (active user)

```
MY DEVELOPMENT
Good afternoon, Jordan                         [Record learning] [↻]
Systems Engineer · L2 → L3
1 thing needs you · 2 in review · 3 of 6 skill areas for L3      ← links
┌ Your skills (highlight) ─────────────┐ ┌ Your focus ─────────────┐
│ Requirements & traceability ●●● 3 p. │ │ goal · due · 1 of 5 ███░ │
│ Architecture modelling ●○○ FOCUS     │ │ Next: SY-140 [Open ↗]    │
│ Communication ●●○                    │ └──────────────────────────┘
│ Integration & interfaces ○○○ Gap L3  │ ┌ Needs you · 3 ───────────┐
│ V&V planning ○○○ Gap L3              │ │ ↩ Returned  CO-120 [Revise]│
│ Mentoring  ▨▨▨ Not recorded  Gap L3  │ │ ⏱ Due 15 Jan PS-100 [Start]│
│ 3 of 6 areas for L3 ██████░░░░       │ │ Waiting on Sam: FA-110 ◐  │
└──────────────────────────────────────┘ └──────────────────────────┘
┌ Grow a skill: Integration & interfaces [▾ switch skill] ─────────────┐
│ [Learn: IM-201 · Add to plan] [Learn from: Priya · Ask] [Practise: call]│
└──────────────────────────────────────────────────────────────────────┘
Recently added: +1 Architecture modelling · FA-110 · 12 Nov …   From the intranet: 3 slim cards
```

### Sections

| Section | Shows | Data (type in `home.ts`) | Computed by | Empty / fallback |
|---|---|---|---|---|
| Header summary | greeting, role, level path, 3 counts as links | `HomeData` header fields | API: counts, level, next level | omit any count the API lacks |
| **Your skills** | each skill area: strength 0–3, evidence label, FOCUS tag, "Gap for L3" | `SkillsSummary`, `SkillArea[]` | **API**: strength, evidence counts, in-review counts, `requiredForNextLevel`, gap flag | `strength: null` → hatched meter + "Not recorded". No skill data at all → hide the card, log in GAPS.md |
| Your focus | goal, due, progress (approved / in review / to go), next activity | `FocusGoal` | API: progress numbers, next activity | no goal → "Set a goal" one-liner with "Create a goal" |
| **Needs you** | what needs the person's action (returned items, required items due) with one action each; below a "Waiting on <manager>" band, items in review (no action). The title count = items needing action only | `NeedsYouItem[]` | API: which items, due dates, on-time | "Nothing needs you yet." |
| **Grow a skill** | for the selected gap skill: 3 ways to grow (learn, learn from someone, practise) | `GrowSkill`, `GrowOption` | API: gap ranking, catalog items mapped to the skill, people (privacy rule 6), community events by topic | no gaps → hide; a missing option kind → show the other tiles only |
| **Recently added** | latest approved items and the skill each raised | `RecentEvidence[]` | API | hide when empty |
| From the intranet | 3 community items by the person's topics | existing community feed | API / intranet source (read-only, links out) | hide when the source is down; never block the page |

**New user** (`?state=new`): a **Get started** checklist (check profile ✓ · choose your learning level · set a goal ·
optional add a pathway) replaces Your focus and is the highlight; Your skills shows the areas with "Not recorded" and
"Choose your level to see which skills matter for you"; Grow a skill and Recently added are hidden.

### What the backend must provide (and likely gaps)

- **Skill areas per person** (the biggest likely gap: today the model is course-centric). Needed: the framework's skill
  areas for the person's job family, and per area: `strength` (0–3 or null), approved evidence count, in-review count,
  whether it's required for the next level and the expectation there. **Strength rule** (proposal, the API owns it):
  derived from approved learning mapped to the area + manager-confirmed experience; thresholds come from the admin
  framework (job expectations per level). If this doesn't exist yet: hide Your skills + Grow a skill, keep the rest,
  and write the GAPS.md entry with this proposal.
- **Catalog item → skill area mapping** (for Grow a skill and "+1 skill" in Recently added).
- **People who can help:** opted-in colleagues with a manager-confirmed strength in that area (name, initials,
  job title only). If the opt-in doesn't exist, show the learn and practise tiles only.
- Proposed screen endpoint: `GET /api/home` returning `HomeData` (a backend-for-frontend read). If you build it from
  several existing endpoints instead, do it in the adapter, in parallel, with a skeleton per card.

### Done when (Home)

- Active and new-user states match `/mui/home` and `/mui/home?state=new` side by side (dark and light).
- "Not recorded" renders for `null` strength (test), gaps only for areas `requiredForNextLevel` (test), only approved
  counts in strength and progress (test with an in-review item).
- No colleague appears without opt-in (test the adapter filters them, even if the API sent them).
- Each card degrades on its own: one failing source doesn't blank the page (test with a mocked failure).

---

## 2. Learning

**The question:** *"What should I learn, and why?"* Three tabs, in the URL: `?tab=recommended|role|browse`
(old `?tab=discover` → browse, `?tab=recommendations` → recommended).

| Part | Behaviour | Data (`learning.ts`) | Computed by |
|---|---|---|---|
| Row (everywhere) | title + code · one meta line (type chip, format · duration · provider, level, Mandatory) · one "Why" · status (only if started/done) · Add to plan / In your plan · ⋯ (Open training, Copy link, Record your learning) | `LearningItem` | API: `why`, status, in-plan |
| Detail drawer | opens from a row; Why it fits, details, actions; row stays highlighted | `LearningItem` | API |
| **Recommended** | ask bar (primary "Find learning", "Explain with AI", 3 example questions); groups by reason: For your goal · To reach <next level> · Required for your role | `RecGroup[]`, `EXAMPLE_QUESTIONS` | API: groups, order, whys |
| Ask (answer) | explanation with citation numbers, matched rows numbered to match, follow-ups, Clear | `ANSWER`, `FOLLOW_UPS` shapes | backend AI endpoint; citations must be catalog items the user can access |
| **For your role** | level sections (collapsible), header "L2 · description · x of y done" + bar; the person's level open | `ROLE_ITEMS`, `LEVELS` | API: items per level and the done counts |
| **Browse all** | one filter row (search, Type, Status, Level, Requirement; removable chips), count + Sort in the panel header, pagination at the bottom | `BROWSE_*` | **server-side** filtering, sorting, paging (`?q=&type=&status=&level=&requirement=&sort=&page=`) |

- **Add to plan** = add to the person's plan (a pathway or goal); if the API has no endpoint, disable it with a tooltip
  and log the gap. Never show "Course link missing" to employees (it's an admin catalog flag).
- **Done when:** tabs restore from the URL (test), filters are server-side and in the URL (test), empty filter result
  shows one line + "Clear filters", the AI never receives goal text or notes (review the request payload), visual match
  with `/mui/learning` in both themes.

---

## 3. Pathways

**The question:** *"In my pathway, what's next?"* Two panes; selection in the URL (`?id=`).

| Part | Behaviour | Data (`pathways.ts`) | Computed by |
|---|---|---|---|
| Mine (left) | each saved pathway: title, kind (Mandatory / Optional / Personal), progress "x of y approved", Next | `Pathway[]` | API: progress, next activity |
| Suggested (left) | 2 published pathways with a why, Preview | `PublishedPathway` | API |
| Header (right) | title, template revision, activities, hours, goal it supports, ⋯ (Remove, Copy link) | `Pathway` | API |
| Progress | approved / in review / to go bar + counts | `progress()` rule | **API** (rule in `progress()`) |
| **Next step** (highlight) | the next activity with why, Open training, Record learning | `nextActivity()` rule | **API** (rule: continue anything in progress or returned, else the first activity not waiting on a prerequisite) |
| Stages | numbered timeline; status "Not started" / "In progress · 1 of 2 started" / "Done"; activities with level chip, type, status, prerequisite note ("After …"); "Other activities" for unstaged; Hide completed | `groupsOf()`, `stageState()` rules | **API** (rules in those functions: a stage is In progress only when an activity has started; Done only when all are approved) |
| Explore pathways | right drawer: search + topic chips, published pathways, Add / Added | `PUBLISHED` | API; adopting needs an endpoint (gap if missing) |

- **Done when:** `?id=` restores the selection (test); stage status matches the rule for: none started, one started,
  all approved (adapter or API contract tests using `stageState()` as the oracle); one refresh control; no generic text
  repeated on items; visual match with `/mui/pathways` in both themes.

---

## 4. Proposed screen endpoints (only if the API lacks them; ask me before any backend change)

| Endpoint | Returns |
|---|---|
| `GET /api/home` | `HomeData` (skills, focus, needs-you, grow-a-skill, recent evidence) |
| `GET /api/learning/recommended` | `RecGroup[]` |
| `GET /api/learning/role?level=` | items per level + done counts |
| `GET /api/learning/catalog?q=&type=&status=&level=&requirement=&sort=&page=` | page of `LearningItem` + total |
| `POST /api/learning/ask` | answer paragraphs with citations to catalog item ids + matched items |
| `POST /api/plan/items` | add an item to the person's plan |
| `GET /api/pathways/mine`, `GET /api/pathways/:id`, `GET /api/pathways/published`, `POST /api/pathways/:id/adopt` | pathways with stages, statuses, progress and next activity computed server-side |

Existing endpoints first: if the data exists across several calls, compose it in the adapter.
