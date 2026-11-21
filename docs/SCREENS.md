# Screen specifications

One section per screen: **route**, **purpose**, **primary action**, **layout**, **data** and **acceptance criteria** (what must be true before the screen is done). Read `docs/CONCEPT.md` and `docs/DESIGN_SYSTEM.md` first (§0 “Calm density” applies to every screen).

Reference images: `design/screens/<file>.png` (dark) and `<file>-light.png`. Reference HTML: `design/html/<file>.html`. Names, people and numbers in the mockups are placeholders; the app shows real data from the API and never hard-codes mockup text. Routes are proposals: keep the app's base path and add redirects from old URLs.

**Product goal:** help employees improve themselves; give managers insight to help their people. Recording/review is plumbing, kept quiet.

**Navigation:** a left sidebar (236px): workspace + bell, `Search or ask… Ctrl K`, then Home · Learning (tabs: Find · Pathways · My learning) · Goals & pathways (incl. Next level) · Colleagues; managers add a **My team** group: Reviews · Team · Insights · Reports; footer: Admin console (if permitted) · Help. **Profile sits top right**, alone in a slim 52px band above the page: avatar, name and role, opening Profile, Connected agents, Theme, Sign out. Admins get a separate **Admin console** workspace with its own sidebar and “Back to my portal”. Ctrl/⌘ K opens the command palette everywhere.

---

## Overview

### 00 · `00-overview`: map of the redesign
Not a product screen. The learning loop, the navigation, six principles. Read it first.

---

## Employee

### 01 · Home: `01-home`, route `/home` (default after sign-in)
- **Question:** what should I do next?
- **Primary:** the next step of the focus goal (“Open in LMS” for Formal; “Record it” once done).
- **Layout:** header (date, greeting, one-line growth status, Find learning (/)); top row: focus-goal hero (glow): ring + segmented bar (approved / in review / returned / not started) + next step + “Then:” line, and Inbox (Needs you / Waiting on others / Required). Bottom row: **Your skills** toward the next role (areas with a 3-step meter of approved evidence; unrecorded areas hatched, never shown as zero) and **For your goal**, one feed with tabs All / Learning / Community / People: catalog items, intranet community posts, questions and events that match the user's topics, and opted-in colleagues strong where the user has a gap.
- **Accept:** no stat strips; no personal levels; only approved counts toward progress; on-time from submission date; every feed item has a specific Why and one action (Add to plan / Read / Answer / Ask); at most 5 feed items; topics are the user's own and editable; community items come from the intranet feed API and degrade to “Community is unavailable” without breaking Home; / works; no focus goal → “Pick a focus” state; inbox empty → one honest line.

### 02 · Command palette: `02-command`, global
- **Primary:** Enter on the selected row (first row = “Ask the advisor: <query>”).
- **Accept:** opens anywhere with Ctrl/⌘ K; scopes All / Learning / Pathways / People / Actions; ↑↓ Enter Tab Esc; focus restored; results permission-checked by the API; people = opted-in colleagues only.

### 03 · Learning: `03-learning`, route `/learning?q=&type=&…`
- **Primary:** “Add to plan” on the top result.
- **Layout:** title + tab switch (Find · Pathways · My learning); search bar (“Advisor on”); filters (type with counts, required for my role, hide done, time, provider); results (status, title + code, Why line, tags, actions); advisor panel (glow) with cited answer, source rows, follow-ups, scope note.
- **Accept:** query and filters in the URL (nuqs); experiential items show “Done on the job…” instead of a link; advisor marks items already in the plan; follow-ups capped at 8 turns; advisor down → results still work.

### 19 · Learning › Pathways: `19-pathways`, route `/learning/pathways/:id?`
- **Primary:** “Adopt pathway”.
- **Accept:** only templates published for the user's population; preview shows milestones, activities, prerequisites and what's already in the plan (not duplicated); adoption is the user's action.

### 08 · Colleagues: `08-colleagues`, route `/colleagues?q=`
- **Primary:** “Message” on the top result.
- **Accept:** only opted-in colleagues; never the current user; every skill marked self-reported / manager-confirmed / not recorded; notice explains visibility and links to Profile › Privacy.

### 04 · Goals & pathways: `04-goals`, route `/goals`, `/goals/:id`, `/goals/pathways/:id`
- **Primary:** the next actionable activity (e.g. “Open in LMS”).
- **Layout:** left: Goals, Pathways. Main: goal header (title, why, due, derived timeframe, progress, linked learning) + selected pathway as a milestone timeline; revision banner when a newer template exists.
- **Accept:** milestone state computed by the API (In progress only if ≥1 started); locked items say what unlocks them; timeframe derived from due date; revision adoption is the user's choice unless an admin requires it by a date.

### 25 · Next level: `25-growth`, route `/goals/next-level` (core)
- **Question:** what do I need to grow into the next job level?
- **Accept:** compares current and next job-catalog expectations; evidence = approved items + manager-confirmed experience, with how it was derived; gaps offer “+ Add to plan”; framed as guidance for a conversation, never an assessment; needs job expectations mapped to skills (log in `design/GAPS.md` if the API lacks it).

### 18 · Goal editor: `18-goal-editor`, dialog on `/goals/:id/edit`
- **Primary:** Save changes (Ctrl Enter).
- **Accept:** timeframe read-only and derived from the due date; link learning via inline search; one focus goal at a time; visibility note (“Your manager can see this goal”); goal text never sent to AI.

### 05 · Record learning: `05-record-new`, route `/learning/record?activity=&step=`
- **Primary:** Continue (Ctrl Enter); last step Submit.
- **Layout:** 6-step stepper; current step form; “What <manager> will see” preview; footer Back / Save draft / Continue.
- **Accept:** react-hook-form + zod; drafts autosave; evidence via drop zone + links with limits; linked goal selectable; 7-day review window and on-time rule stated once.

### 06 · Learning › My learning: `06-my-learning`, route `/learning/mine?tab=`
- **Primary:** “Revise and resubmit” when something is returned; otherwise “Record learning”.
- **Accept:** a tab inside Learning (Find · Pathways · My learning), not a top-level destination; status tabs with counts in the URL; versions visible; returned item shows the shared thread; export includes approved items only.

### 07 · Profile: `07-profile`, route `/profile/<section>`
- **Primary:** “Review” when an agent change waits; otherwise none.
- **Layout:** header (name, HR-directory title read-only + link, manager-assigned role, job expectations); sub-nav; overview: Experience (manager-confirmed vs self-reported), Tools (self-rated), Privacy (opt-in toggle), Connected agents.
- **Accept:** “Not recorded” for missing data; directory visibility defaults OFF; HR-sourced fields read-only; “Preview as colleague” shows exactly what others see.

### 23 · Profile › Connected agents: `23-agent-confirm`, route `/profile/agents`
- **Primary:** Approve (per proposed change).
- **Accept:** every agent write is a proposal shown as before → after; approve/decline per change; connection shows client, start, expiry (≤1 h), scopes, Revoke; activity log of what the agent read and requested.

### 21 · Welcome (first run): `21-welcome`, `/home` for a user with no goals or records
- **Primary:** “Use this goal” on a starter goal.
- **Accept:** 3 optional steps (focus goal, pathway, visibility); no fake numbers; empty sections collapse to one honest line.

### 22 · Notifications: `22-notifications`, panel from the sidebar bell
- **Accept:** grouped Today / This week; each item has one action; agent changes and returned work come first; digest preference visible; “Mark all read”.

---

## Manager (“My team”)

### 31 · Manager home: `31-manager-home`, `/home` for managers
- **Primary:** the most urgent team action (e.g. “Review Priya's FA-110”, due tomorrow).
- **Accept:** personal focus strip stays compact; “Your team today” = reviews waiting, people who could use a hand (support framing, no judgement), 1:1s coming up; what to do first is obvious in 5 seconds.

### 09 · Reviews: `09-reviews`, route `/team/reviews/:submissionId?`
- **Primary:** Approve (A). Return for changes (R, feedback required); Reject (quiet, confirm).
- **Accept:** queue sorted by due date; detail with evidence and version history; **shared feedback** and **private note** visibly and structurally separate; private notes never shown to the employee or sent to AI; only the current direct manager can decide (API); keyboard end to end.

### 33 · Reviews · bulk: `33-reviews-bulk`, route `/team/reviews?mode=select`
- **Primary:** “Approve N” (A).
- **Accept:** rows that can't be bulk-approved are disabled with a reason (no evidence; resubmission needs individual review); one optional shared note for all; no private notes in bulk; every decision recorded per item and version.

### 32 · Record for your team (roster): `32-team-record`, route `/team/record`
- **Primary:** “Create N records”.
- **Flow:** 1 Activity → 2 Who attended → 3 Evidence (optional); the footer summary is the confirmation.
- **Accept:** API validates the manager relationship for **each** person; already-approved people are skipped with a reason; default mode = “ask each person to add a short reflection, then approve”; “count as approved now” is behind a **policy flag** (needs HR/quality sign-off); records show creator and approver.

### 10 · Team: `10-team`, route `/team`
- **Accept:** org-data freshness shown (and a warning if today's refresh failed); KPIs max 4; table listed by name, never ranked; each person counted once; percentages from summed totals; “Not recorded” instead of zero.

### 20 · One person: `20-person`, route `/team/:personId`
- **Accept:** plan progress, in-review items, experience to confirm (Confirm / Not sure), shared feedback thread, and a private notes panel (lock, “Only you can see this”) that is never exported, shown to the person or sent to AI.

### 30 · Insights: `30-team-insights`, route `/team/insights?period=`
- **Accept:** max 6 charts, each titled with its takeaway and ending in an action (Open reviews, Start a goal together, Remind, Book 1:1s); no activity tracking, no rankings, people sorted A–Z; text/table equivalent for every chart (“Table view”); footnote with counting rules.

### 26 · 1:1 prep: `26-one-on-one`, route `/team/:personId/one-on-one` (core)
- **Primary:** Share agenda with the employee.
- **Accept:** agenda built from approved evidence, submissions and goal movement since the last 1:1; talking points from both sides; AI summary labelled “Draft · edit before sharing” with sources, drafted only from items on the page; private-notes strip that only the manager sees, never shared or sent to AI.

### 11 · Reports: `11-reports`, route `/team/reports/:type`
- **Accept:** approved learning only; same counting rules as Team; CSV/PDF export; text equivalent for every chart; footnote says the report shows evidence, not performance.

---

## Admin console (`/admin/...`)

### 12 · Data health: `12-admin-health`, route `/admin`
- **Accept:** a failed source refresh is red here and anywhere that source is shown; gaps (one side blank) separate from conflicts; decisions persist across imports and re-flag on change; nothing here appears on employee screens.

### 13 · Catalog: `13-admin-catalog`, route `/admin/catalog?…`
- **Accept:** filters in the URL; health column (OK / Missing link (formal only) / Conflict / Formatting); bulk actions; edit drawer with history; imports go preview → publish.

### 16 · Sources: `16-admin-sources`, route `/admin/sources/:id`
- **Accept:** honest status per source; full timestamps with time zone; run history; import preview diff before publish; column mapping; provider URL must be https on an approved domain.

### 14 · Pathway templates: `14-admin-templates`, route `/admin/templates/:id`
- **Accept:** draft revisions; ordered activities; prerequisites only to earlier activities; planning activities marked “no completion credit”; diff vs published; impact count; optional “Require update by <date>”.

### 15 · Rules & populations: `15-admin-rules`, route `/admin/rules/<tab>`
- **Accept:** rules as plain sentences; live match count + sample; overlap warning with priority; required-learning rules show reason and approver; removing a requirement needs a second approver; unsaved-changes bar.

### 17 · Access: `17-admin-access`, route `/admin/access`
- **Accept:** admins chosen from the directory with names (never bare IDs); roles Owner / Catalog editor / Viewer; last Owner can't be removed; connected-agent policy visible; every change audited.

### 24 · Audit log: `24-admin-audit`, route `/admin/audit?…`
- **Accept:** filters (actor, action, target, date); time zone explicit; expandable before → after diff; system events included; CSV export.

---

## Proposals (out of scope until approved)

| # | File | Idea |
|---|---|---|
| 27 | `27-skills-map` | Team skills map derived from approved evidence + confirmed experience; never a rating. |
| 28 | `28-lms-inbox` | LMS completions arrive automatically; two short answers to submit. Optional policy: verified formal completions skip review. |
| 29 | `29-mobile` | Employee Home and manager review on a phone. |
