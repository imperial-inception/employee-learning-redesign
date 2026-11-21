# What would make Skill Portal worth opening?

A product argument, not a spec. Proposal screens in `design/` are marked **Proposal**; nothing here is agreed scope until the product owner says so.

## The honest starting point

Today Skill Portal mostly **asks** people for things: choose a level, record learning, fill in a profile, review submissions. Engineers open tools that **give** them something. If the portal stays a place to log training for compliance, people will use it only when they're told to.

The rule for every feature: **give before you take.** Every time we ask an employee or manager to do something, they get something useful back straight away.

## Who it's for, and what they actually want

| Person | What they want (not what we want from them) | What the portal gives back |
|---|---|---|
| Employee | “What do I need to grow into the next role, and how do I prove I can do it?” | A clear next step, a growth view against the next job level, a portfolio of approved evidence they own and can export |
| Manager | “Make 1:1s and reviews quick, and tell me who can do what.” | A 1:1 agenda that builds itself, fast reviews (also from phone/Teams), a team skills picture for staffing |
| Training owner / admin | “Keep the catalog right, show that learning works.” | One data-health queue, import previews, adoption and impact numbers |
| Auditor / quality | “Show approved evidence by framework.” | Audit-ready reports that don't rate people |

**Product goal (owner, 21 Nov 2026): help employees improve themselves, and give managers the insight to understand and help their people.** The **core loop** is employee growth plus the manager 1:1; recording and review are plumbing and stay quiet in the UI. Everything else supports that loop. Trying to serve every group equally from day one makes everything mediocre.

## The moments that make it feel great

1. **Home opens to one focus and one next step**, not a dashboard of everything.
2. **Ctrl K, ask anything** (“what should I learn for interface management?”) and get an answer that cites real catalog items, each one-click addable to the plan.
3. **Completions arrive by themselves** from the LMS. Recording becomes “add a 2-line reflection, submit”: under a minute, no retyping.
4. **Your manager approves in 10 seconds**, from the review queue, a phone, or an actionable Teams or email message.
5. **“Next level” shows exactly what to grow**, with the evidence you already have counted for you.
6. **The 1:1 agenda builds itself**: what was approved since last time, what's stuck, talking points from both sides.
7. **Your portfolio is yours**: a clean, exportable record of what you learned and applied, ready for a promotion packet.
8. **Home shows what colleagues are sharing on your topics**: an intranet article, an open question you can answer, a community call. Learning from people stops being invisible, and answering a question can be recorded as relational learning.

## Feature proposals, ranked by value ÷ effort

| # | Proposal | Why it matters | Effort | Risk / needs |
|---|---|---|---|---|
| 1 | **LMS completions inbox** (screen 28) | Removes the biggest chore: retyping completed courses | M | Needs an LMS completion feed or export |
| 2 | **Fast review everywhere**: keyboard queue, phone layout, actionable notifications (09, 29, 22) | Review turnaround is what makes employees trust the loop | M | Notification channel approval |
| 3 | **“Add to plan” on every suggestion** + goal ↔ learning linking (03, 18) | Turns browsing into a plan | S | None |
| 4 | **Next level growth view** (25) · *now core* | The #1 reason an engineer would open it voluntarily | M | Job catalog expectations must be mapped to skills |
| 5 | **1:1 prep** (26) · *now core* | Saves managers time every week; makes development a habit | M | Clear private vs shared rules (already defined) |
| 6 | **Team skills map** (27) | Staffing and mentoring: “who can help with interfaces?” | L | Must never become a rating; needs HR sign-off |
| 7 | **Portfolio export** (06) | Gives employees ownership and a reason to record well | S | Approved evidence only |
| 8 | **Verified LMS completions skip manager review** (policy toggle in 28) | Managers review only what needs judgment (experiential, relational) | S (code) | **Policy decision**: HR/quality must agree |
| 9 | **Community in “For your goal”** (Home, 01) · *core* | Brings intranet articles, questions and events that match the user's topics into one feed with catalog items and people; makes relational learning visible | M | Intranet feed/search API; topic tagging; ranking must stay explainable (one Why per item) |

## What NOT to build

- **Badges, points, streaks, leaderboards.** Engineers find them patronising, and rankings poison a development tool.
- **Self-selected levels or skill grades.** They were retired for good reasons. Any “strength” shown must be derived from approved evidence and explained.
- **AI that assesses people.** AI may explain, compare, draft and summarise, always labelled and editable. It never approves, rates or changes data.
- **More settings for employees.** Every new toggle is a decision we're pushing onto them.

## Architecture: what has to change to enable this

The current split (Next.js UI, Python API that owns identity, permissions, rules and trusted data, relational database, background worker, AI only over selected evidence) is the right foundation. Keep it. The changes:

1. **Make Skill a first-class entity.** Today the model is course-centric. Growth, skills map, people search and “why this fits” all need one graph: Skill ↔ job expectation ↔ catalog item ↔ approved evidence ↔ person (with source: self-reported / manager-confirmed / derived). This is the single most valuable data-model change.
2. **One submission state machine on the server**, with an append-only event log (submitted, returned, resubmitted, approved, rejected). Status, versions, on-time and turnaround metrics all come from it, and the UI just renders them.
3. **Screen-shaped read endpoints** (a backend-for-frontend layer): `/api/today`, `/api/plan`, `/api/team`… return exactly what a screen needs, including computed status and “why” reasons. The browser never computes business facts.
4. **Reporting read models** (database views or worker-refreshed tables) that implement the counting rules once: each person once, summed totals, approved only. Team view, reports and exports all read from them.
5. **Ingestion pipeline as a product**: stage → validate → detect conflicts and gaps → preview → publish, with freshness targets per source. A failed refresh pages an admin. If the org tree is older than ~36 h, manager-only actions pause instead of silently using stale access.
6. **Authorization in one policy module**: relationship-based (“current manager of”) plus roles taken from the company directory/auth layer instead of an app-local admin list.
7. **Notification service** with digests, channels (email, Teams), deduplication and quiet hours, so 5 due items don't mean 20 messages.
8. **Integrations**: LMS completions in (read-only), intranet community feed in (articles, questions, events by topic, read-only, links out), actionable notifications out; optional calendar hook for 1:1s. One recommendation service ranks catalog, community and people items together and returns the Why with each item, so the UI never guesses.
9. **Product analytics that respect privacy**: aggregated events to measure the loop (below), with no individual tracking dashboards.

## How we'll know it works

| Metric | Target to aim for |
|---|---|
| Employees with a focus goal | > 60% of the pilot population in 8 weeks |
| Time from LMS completion to submitted record | < 2 days median |
| Manager review turnaround | < 3 days median |
| Monthly active employees (opened + did something) | > 50% |
| Returned-for-changes rate | falling (better evidence guidance) |

## Rollout

Pilot with **one population** (one organisation, ~200 people) and 2–3 managers who want it. Ship the redesign plus proposals 1–3 first, watch the numbers for 4–6 weeks, talk to 8–10 users, then decide on 4–6. Proposals that need policy sign-off (6, 8) go to HR/quality in parallel, not after.
