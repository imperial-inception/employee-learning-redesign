# Screen specifications

One section per screen: **route**, **purpose**, **primary action**, **layout**, **data** and **acceptance criteria** (what must be true before the screen is done). Read `docs/CONCEPT.md` and `docs/DESIGN_SYSTEM.md` first (§0 “Calm density” applies to every screen).

Reference images: `design/screens/<file>.png` (dark) and `<file>-light.png`. Reference HTML: `design/html/<file>.html`. Names, people and numbers in the mockups are placeholders; the app shows real data from the API and never hard-codes mockup text. Routes are proposals: keep the app's base path and add redirects from old URLs.

**Sub-views:** a file named `NNx-name` (e.g. `07b-profile-experience`) is another state of screen `NN` (a tab, a step or a dialog). Its spec sits right under its parent. Build it in the same task as the parent.

**Sample data:** names, titles and course codes are consistent across screens; per-person counts and dates are illustrative and may differ between screens. The app always shows the API's numbers.

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

### 02b · Profile menu: `02b-profile-menu`, global (top-right profile chip)
- **Primary:** none; Enter on the focused item (Profile is focused first)
- **Accept:** anchored under the chip, which shows its open state, over the current page dimmed only slightly; header has avatar, name and professional role; items Profile, Connected agents with a “1 waiting” badge from the API, Theme (Dark / Light / System, current selected), Sign out; Esc closes it and returns focus to the chip.

### 03 · Learning: `03-learning`, route `/learning?q=&type=&…`
- **Primary:** “Add to plan” on the top result.
- **Layout:** title + tab switch (Find · Pathways · My learning); search bar (“Advisor on”); filters (type with counts, required for my role, hide done, time, provider); results (status, title + code, Why line, tags, actions); advisor panel (glow) with cited answer, source rows, follow-ups, scope note.
- **Accept:** query and filters in the URL (nuqs); experiential items show “Done on the job…” instead of a link; advisor marks items already in the plan; follow-ups capped at 8 turns; advisor down → results still work.

### 03b · Learning item: `03b-learning-item`, route `/learning/items/:code` (e.g. `/learning/items/IM-201`)
- **Primary:** “Add to plan” (optional goal link chosen at add time)
- **Accept:** header shows title, code, type, level, duration, provider and the user's status; “Why it fits you” gives specific reasons from the user's own data (e.g. no approved evidence yet for the “Integration & interfaces” gap, a linked goal, related activity already started), never generic copy; prerequisites show their status from the API and whether the user is ready; pathways that include the item are listed, and adding the item neither adopts a pathway nor duplicates it later; the colleague count and names include only colleagues who opted in; “Open in LMS” is secondary; at most 3 related items, each with a Why.

### 19 · Learning › Pathways: `19-pathways`, route `/learning/pathways/:id?`
- **Primary:** “Adopt pathway”.
- **Accept:** only templates published for the user's population; preview shows milestones, activities, prerequisites and what's already in the plan (not duplicated); adoption is the user's action.

### 08 · Colleagues: `08-colleagues`, route `/colleagues?q=`
- **Primary:** “Message” on the top result.
- **Accept:** only opted-in colleagues; never the current user; every skill marked self-reported / manager-confirmed / not recorded; notice explains visibility and links to Profile › Privacy.

### 08b · Colleague profile: `08b-colleague-profile`, route `/colleagues/:personId?q=`
- **Primary:** Message
- **Accept:** only what the person opted to share: skills, tools with self-rated confidence, experience labelled Manager-confirmed or Self-reported; no goals, learning records, feedback or ratings; “Why she matched” names the matching tool, experience and skill, and those rows are marked; crumbs Colleagues / name with “1 of 6 for ‘SysML’” and up/down keys; if the viewer is her manager, a quiet “Open in Team” link appears, the page itself stays the colleague view.

### 04 · Goals & pathways: `04-goals`, route `/goals`, `/goals/:id`, `/goals/pathways/:id`
- **Primary:** the next actionable activity (e.g. “Open in LMS”).
- **Layout:** left: Goals, Pathways. Main: goal header (title, why, due, derived timeframe, progress, linked learning) + selected pathway as a milestone timeline; revision banner when a newer template exists.
- **Accept:** milestone state computed by the API (In progress only if ≥1 started); locked items say what unlocks them; timeframe derived from due date; revision adoption is the user's choice unless an admin requires it by a date.

### 04b · Goal set by your manager: `04b-goals-manager-set`, route `/goals/:id`
- **Primary:** the next actionable linked activity (here “Open in LMS”)
- **Accept:** a manager-set goal shows “Set by <manager> · <date>” in the goal list and the detail header; “Discuss in 1:1” action; Delete is disabled with the reason “Only Sam can remove a goal he set”; the employee can link learning (own links removable, the manager's are not), update milestones, comment (thread visible to the manager) and make it the focus; title, why and due date are read-only for the employee; only approved learning moves progress.

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

### 05b · Record learning › Activity: `05b-record-activity`, route `/learning/record?activity=&step=activity`
- **Primary:** Continue (Ctrl Enter); Back is disabled on step 1
- **Accept:** kind picker Formal / Relational / Experiential, each with a one-line explanation (Formal = catalog course, picked from the catalog, course link comes with it); Experiential shows “no course link, show the work in step 4”; title, date range, hours and an optional goal link (focus goal preselected); the preview fills in title, type, goal tag and dates while later sections say “Not written yet” / “Not answered”.

### 05c · Record learning › What you learned: `05c-record-learned`, route `/learning/record?activity=&step=learned`
- **Primary:** Continue (Ctrl Enter)
- **Accept:** one textarea with a live word count (also shown under the step); no minimum length, gentle guidance (“what can you do now that you couldn't before?”); one “Show an example” toggle with a short example from a different kind of learning; the preview shows the text as Sam will read it (first 3 lines).

### 05d · Record learning › How you'll apply it: `05d-record-apply`, route `/learning/record?activity=&step=apply`
- **Primary:** Continue (Ctrl Enter)
- **Accept:** textarea with a word count; “Link to a goal milestone” lists the linked goal's milestones from the API (with due dates, or “no date”) plus “No specific milestone”; the chosen milestone appears in the preview under the answer; the milestone is optional.

### 05e · Record learning › Quick feedback: `05e-record-feedback`, route `/learning/record?activity=&step=feedback`
- **Primary:** Continue (Ctrl Enter)
- **Accept:** two questions (Worth the time? Yes, definitely / Partly / Not really; Suggest it to a colleague? Yes / Maybe / No) plus an optional comment (280 characters); a visible note says the activity owner sees the answers combined with other people's, and that Sam sees them but they are not part of his decision; the preview marks this section “not part of the review”.

### 05f · Record learning › Review & submit: `05f-record-review`, route `/learning/record?activity=&step=review`
- **Primary:** Submit to Sam (Ctrl Enter)
- **Accept:** the record is rendered exactly as Sam's review shows it (same layout as 09: header, title and tags, learned, apply, evidence, linked goal and milestone, submitted / review-by dates, quick feedback marked not part of the review), each section with an Edit link back to its step; the footer gives the on-time rule once (the submission date decides; Sam usually reviews within 7 days); the side panel shows how the record lands in Sam's queue, his three possible decisions, and “Only approved learning counts toward your goal”.

### 06 · Learning › My learning: `06-my-learning`, route `/learning/mine?tab=`
- **Primary:** “Revise and resubmit” when something is returned; otherwise “Record learning”.
- **Accept:** a tab inside Learning (Find · Pathways · My learning), not a top-level destination; status tabs with counts in the URL; versions visible; returned item shows the shared thread; export includes approved items only.

### 07 · Profile: `07-profile`, route `/profile/<section>`
- **Primary:** “Review” when an agent change waits; otherwise none.
- **Layout:** header (name, HR-directory title read-only + link, manager-assigned role, job expectations); horizontal section tabs (Overview · Experience · Tools · Certifications · Education · Job expectations · Feedback, with Privacy · Connected agents pushed right); overview: Experience (manager-confirmed vs self-reported), Tools (self-rated), Privacy (opt-in toggle), Connected agents.
- **Accept:** “Not recorded” for missing data; directory visibility defaults OFF; HR-sourced fields read-only; “Preview as colleague” shows exactly what others see.

### 07b · Profile › Experience: `07b-profile-experience`, route `/profile/experience`
- **Primary:** “Add experience” (Ctrl Enter) in the add form
- **Accept:** every entry shows role · project, dates and a one-line description, plus its source: Manager-confirmed with who and when (“Sam · 12 Aug”), or Self-reported with “Ask Sam to confirm” (or “Asked Sam · 18 Nov” once requested); the add form opens in a right-side panel with title, project, from/to (with “I still do this”), what you did (280-character limit), an optional link, “Ask Sam to confirm after saving”, and a visibility line; a missing field reads “Not recorded” with “Add details”, never as a gap in skill; one footnote says only manager-confirmed experience counts as evidence in Next level.

### 07c · Profile › Tools: `07c-profile-tools`, route `/profile/tools`
- **Primary:** “Save” on the row being edited (Enter); “Add tool” stays secondary
- **Accept:** each tool shows a 4-step self-rated meter (Basic / Working / Advanced / Expert) and when it was last updated; one row edits inline with a segmented control, “was Working · 2 Feb”, and Cancel / Save; the agent's pending change shows on its own row (“Agent proposes Basic → Working”, Review) and nothing changes until the user reviews it; a tool with no rating shows a hatched meter, “Not recorded” and “Rate it”; a side panel explains the levels as self-rated (not an assessment) and says colleagues see tools only if Privacy allows (toggle off by default).

### 07d · Profile › Certifications: `07d-profile-certifications`, route `/profile/certifications`
- **Primary:** “Add certification”
- **Accept:** each row shows name, issuer, earned date, expiry date and verification (“Verified from file” with the file name, or “Self-reported” with “Attach certificate”); a certification expiring within 60 days gets a quiet amber “in 49 days” note, no banner; expired certifications stay listed, muted and marked Expired; a missing expiry date reads “Not recorded”; attaching a certificate (PDF/PNG/JPG up to 10 MB, plus an optional expiry date) happens in a side panel for the selected row, and only Sam can open the file; the 60-day reminder rule is explained once.

### 07e · Profile › Education: `07e-profile-education`, route `/profile/education`
- **Primary:** “Add education”
- **Accept:** each row shows degree or course, field, institution and year; a missing year reads “Not recorded” with “Add year” and sorts last; “self-reported” is said once in the footnote, not on every row; a side panel states that education never sets the professional role or makes learning required, that colleagues see it only if Privacy allows, and that short courses belong in Learning › My learning.

### 07f · Profile › Job expectations: `07f-profile-job-expectations`, route `/profile/job-expectations`
- **Primary:** Open Next level
- **Accept:** same profile header and section tabs as 07, with Job expectations active; the same 6 areas as Next level with “What's expected at IC1” and “Looks like on the job”, read-only and labelled “Read-only · Job catalog” with the catalog version and publish date; a side card shows IC1 (you now) → IC2 (next) and “Compare with Individual contributor 2 → Next level”; says plainly this is not an assessment and colleagues never see it.

### 07g · Profile › Feedback: `07g-profile-feedback`, route `/profile/feedback?filter=&thread=`
- **Primary:** Reply (Ctrl Enter)
- **Accept:** only feedback Sam shared, newest first; filter All / On submissions / General kept in the URL; each submission item links its learning item with status glyph and code; selecting an item opens its thread with a reply box marked “Sam will see your reply”; a fixed notice says a manager's private notes never appear here and are never shown, exported or sent to AI.

### 07h · Profile › Privacy: `07h-profile-privacy`, route `/profile/privacy`
- **Primary:** Turn on visibility (settings save as they change; no Save button)
- **Accept:** colleague-directory visibility defaults to Off; “What to share when on” (skills, tools with self-rated confidence, experience with its label) is disabled and unticked while off; name, HR title and team are stated as always shown once visible; “What colleagues see today: nothing” points to Preview as colleague; the never-shown list covers goals, learning records, feedback and job expectations; the AI note says profile, goal text and manager notes are never sent to the advisor; Download my data exports JSON and CSV.

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

### 32b · Record for your team › Activity: `32b-team-record-activity`, route `/team/record?step=activity`
- **Primary:** Continue (Ctrl Enter); Save draft is secondary
- **Accept:** session type is Relational or Formal only (Experiential is explained as recorded by each person); title, date, duration, led by (person picker; the leader's own record says they led it), an optional catalog link that counts toward goals and pathways containing that course, and an optional “What it covered” copied into each record; values match the collapsed Activity line on steps 2 and 3.

### 32c · Record for your team › Evidence (optional): `32c-team-record-evidence`, route `/team/record?step=evidence`
- **Primary:** Create 8 records (Ctrl Enter)
- **Accept:** steps 1 and 2 collapse to one editable line each; shared files are attached once and copied to each record, with limits and who can see them stated; the creation mode chosen in step 2 is shown with Change; a preview shows what each person gets, including creator and reviewer; the footer reads “N records will be created · M skipped (already approved)”.

### 10 · Team: `10-team`, route `/team`
- **Accept:** org-data freshness shown (and a warning if today's refresh failed); KPIs max 4; table listed by name, never ranked; each person counted once; percentages from summed totals; “Not recorded” instead of zero; the Professional role column shows the manager-assigned role (one of the job family's configured roles) or “Not recorded”, and each cell is editable in place (10b).

### 10b · Team › set a role inline: `10b-team-role-picker`, route `/team` (popover, no route change)
- **Primary:** Assign (Enter)
- **Accept:** clicking a Professional role cell opens a picker with the configured roles and the current value (“Now: Not recorded”); the hovered or selected row shows its one-line description; assigning takes effect today, notifies the person and leaves the HR job title unchanged; “Start date & note” opens the full role dialog (20b); the row stays highlighted while the picker is open; the API rejects anyone who isn't the person's current manager.

### 20 · One person: `20-person`, route `/team/:personId`
- **Accept:** plan progress, in-review items, experience to confirm (Confirm / Not sure), shared feedback thread, and a private notes panel (lock, “Only you can see this”) that is never exported, shown to the person or sent to AI.

### 20b · Professional role: `20b-person-role`, route `/team/:personId/role` (dialog over 20)
- **Primary:** Save role (Ctrl Enter)
- **Accept:** radio list of the job family's configured roles (max 5, in admin order), each with a one-line description; current role marked “Current”; choosing another shows “What changes” from the API: job expectations, suggested learning (before → after), required learning added by role rules (title, code, due date), and what stays the same (goals, plan, approved items); start date (expectations switch on that date); optional note to the employee, labelled shared and never mixed with private notes; HR job title shown read-only with a lock and explained as separate from the role; footnote links admins' Rules › Roles; the employee is notified and sees who set the role.

### 20c · Set a goal for a direct report: `20c-person-goal`, route `/team/:personId/goals/new` (dialog over 20)
- **Primary:** Set goal (Ctrl Enter)
- **Accept:** same fields as the goal editor (title, why, due date, read-only timeframe derived from the due date, milestones with optional dates); link learning or a pathway, where a linked pathway is only “Suggested” and the employee chooses whether to adopt it; “Make this her focus” off by default, naming the current focus it would replace; footer states “Priya sees this goal and that you set it; she can link learning and comment; only you can remove it”; goal text never sent to the advisor; the API checks the manager relationship.

### 30 · Insights: `30-team-insights`, route `/team/insights?period=`
- **Accept:** max 6 charts, each titled with its takeaway and ending in an action (Open reviews, Start a goal together, Remind, Book 1:1s); no activity tracking, no rankings, people sorted A–Z; text/table equivalent for every chart (“Table view”); footnote with counting rules.

### 26 · 1:1 prep: `26-one-on-one`, route `/team/:personId/one-on-one` (core)
- **Primary:** Share agenda with the employee.
- **Accept:** agenda built from approved evidence, submissions and goal movement since the last 1:1; talking points from both sides; AI summary labelled “Draft · edit before sharing” with sources, drafted only from items on the page; private-notes strip that only the manager sees, never shared or sent to AI.

### 11 · Reports: `11-reports`, route `/team/reports/:type`
- **Accept:** approved learning only; same counting rules as Team; CSV/PDF export; text equivalent for every chart; footnote says the report shows evidence, not performance.

### 11b · Reports › Audit-ready evidence by framework: `11b-report-framework`, route `/team/reports/framework?period=`
- **Primary:** Export CSV (E); PDF is secondary
- **Accept:** approved items only, grouped by competency framework area (the same area names as Insights): items by type, files and links, items without a file, last approved; totals agree with the team report; each person counted once per area and once in the total (not the sum of rows); a row expands to the people behind it, and an approved item with no file is flagged; the CSV has one row per approved item with approver, date and file links; filters (period, people, framework) in the URL; Status stays locked to Approved only; people with nothing show “nothing recorded yet”, never zero.

### 11c · Reports › Review turnaround: `11c-report-turnaround`, route `/team/reports/turnaround?period=`
- **Primary:** Export CSV (E); “Open reviews” is secondary
- **Accept:** only the signed-in manager's own decisions, marked “Only you see this report”; median days per month against the 7-day window with the slowest decision, previous quarter faded for context; decision counts (approved / returned / rejected) agree with Insights and Manager home; no employee breakdown or ranking; “Waiting now” lists open reviews by when their window ends; footnote: review time never changes on-time status, which is judged by submission date.

### 11d · Reports › Goal progress: `11d-report-goal-progress`, route `/team/reports/goals?period=`
- **Primary:** Export CSV (E)
- **Accept:** one row per person, listed by name, never ranked; columns: focus goal, set by (Self, or “You” for goals the manager set), approved steps n/m, steps approved this quarter, due date, last approved, status; the bar shows in-review and returned steps but only approved steps count; people without a goal show “No active goal” with context, not zero; totals use summed figures and agree with Insights.

---

## Admin console (`/admin/...`)

### 12 · Data health: `12-admin-health`, route `/admin`
- **Accept:** a failed source refresh is red here and anywhere that source is shown; gaps (one side blank) separate from conflicts; decisions persist across imports and re-flag on change; nothing here appears on employee screens.

### 12b · Data health › Gaps: `12b-health-gaps`, route `/admin?tab=gaps`
- **Primary:** “Fill all N” (N from the API). On 12b–12d the banner's “Retry now” is a normal button so the tab's action is the only primary; on 12 (Conflicts) “Retry now” stays primary.
- **Accept:** lists only fields where one source has a value and the other is blank (both filled = Conflicts); each row shows item + code, field, both sources with the blank one marked “blank” (never 0), the value that will be used and its source; per-row Skip keeps the gap blank and on the list; filled values persist across imports and move to Conflicts if the blank source later sends a different value.

### 12c · Data health › Formal items missing a link: `12c-health-missing-links`, route `/admin?tab=missing-links`
- **Primary:** “Save N links” (N = links that pass validation)
- **Accept:** formal items only; employees never see a “missing link” state, because these items are left out of search, suggestions, pathways and the advisor until a valid link is saved; pasted links are checked by the server (https, approved domain, link opens), the failing part is highlighted and the reason given in words; only valid links are saved; a summary shows ready / need a fix / empty.

### 12d · Data health › Formatting: `12d-health-formatting`, route `/admin?tab=formatting`
- **Primary:** “Apply N fixes” (N = accepted rows)
- **Accept:** each row shows before → after with changed characters highlighted, the rule that flagged it, the source and the date; Accept/Skip per row, Accept by default; a warning shows when a fix would create a duplicate title; the source keeps its original title and the override persists across imports; silent fixes are listed, and auto-applying title fixes is an opt-in toggle, off by default.

### 13 · Catalog: `13-admin-catalog`, route `/admin/catalog?…`
- **Accept:** filters in the URL; health column (OK / Missing link (formal only) / Conflict / Formatting); bulk actions; edit drawer with history; imports go preview → publish.

### 16 · Sources: `16-admin-sources`, route `/admin/sources/:id`
- **Accept:** honest status per source; full timestamps with time zone; run history; import preview diff before publish; column mapping; provider URL must be https on an approved domain.

### 14 · Pathway templates: `14-admin-templates`, route `/admin/templates/:id`
- **Accept:** draft revisions; ordered activities; prerequisites only to earlier activities; planning activities marked “no completion credit”; diff vs published; impact count; optional “Require update by <date>”.

### 15 · Rules & populations: `15-admin-rules`, route `/admin/rules/<tab>`
- **Accept:** rules as plain sentences; live match count + sample; overlap warning with priority; required-learning rules show reason and approver; removing a requirement needs a second approver; unsaved-changes bar.

### 15b · Rules › Frameworks: `15b-rules-frameworks`, route `/admin/rules/frameworks/:id?`
- **Primary:** Publish v2
- **Accept:** each framework shows its status (Published / Draft) and how many people it affects; the draft shows its areas with competency counts and changes against v1; course levels L1–L5 are defined as course depth with catalog item counts summing to the catalog total, with a line saying people never get a level; “Used by” and the footer name exactly who moves on publish and who stays on v1; checks confirm approved evidence keeps its credit and warn about competencies with no catalog items; version history shows who changed what and when.

### 15c · Rules › Required learning: `15c-rules-required`, route `/admin/rules/required`
- **Primary:** Require learning
- **Accept:** each rule shows item and code, population with its count, due rule (fixed date or “N days after joining the population”), a plain-sentence reason, and who approved it and when; a removal request stays inline on its rule and the item stays required until a second approver agrees (the requester can't approve); overrides are per person and per item, always with a reason, and an exemption shows its second approver; a preview shows the employee-facing Home card with its Why.

### 15d · Rules › Roles: `15d-rules-roles`, route `/admin/rules/roles/:jobFamily?`
- **Primary:** Save roles (Ctrl S)
- **Accept:** a job family has at most 5 roles in order (Systems engineering: Associate Systems Engineer, Systems Engineer, Interface Architect, Senior Systems Engineer, Lead System Architect), each with a one-line description and how many people hold it, plus a separate “Not recorded” count, never shown as 0; “Managers assign these to their direct reports.” is stated; “Add role” is disabled at 5 of 5; the professional role is shown as different from the read-only HR job title; the footer names the pending edit and confirms existing assignments are kept.

### 15e · Rules › Reminders: `15e-rules-reminders`, route `/admin/rules/reminders`
- **Primary:** Save (Ctrl S)
- **Accept:** three rules written as sentences with editable values (Due soon, Overdue with a manager digest after N days, Review waiting), each with an on/off toggle and per-rule channels; delivery: email and chat (one always on), daily digest time in each person's time zone, quiet hours incl. weekends and public holidays, one message per person per day (“5 due items = 1 message”); states that reminders never change a status and on-time uses the submission date.

### 15f · Rules › Feedback form: `15f-rules-feedback-form`, route `/admin/rules/feedback-form`
- **Primary:** Publish form
- **Accept:** the questions match Record learning step 5 (two required choice questions, optional comment), each with a type and a required toggle; at most 3 questions; activity owners see combined results only after 5 or more answers, comments unnamed; answers are not part of manager review and never affect approval; the live preview matches the employee step; the published version stays live until a new one is published.

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
