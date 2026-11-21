# What Skill Portal is

Read this before anything else. It explains the product the designs are for.

> **Product goal:** help employees improve themselves, and give managers the insight to understand their team and help each person grow. Recording and review are the plumbing that makes progress trustworthy; they are never the point, and the UI keeps them quiet.

## In one paragraph

Skill Portal helps people understand what they need to learn, find useful learning, record what they learned, and show evidence of their development. It gives managers a consistent way to support their people, review learning and understand team capability. Learning usually happens elsewhere (an LMS, a content library, an academy, on the job, with colleagues). Skill Portal is where it comes together, gets reviewed, and becomes **approved evidence**.

## The problem

Learning and competency information is scattered: courses in several systems, experience in spreadsheets and meetings, or only in people's heads. Employees struggle to find relevant learning; managers struggle to see what the team has done and what evidence supports it.

## The learning loop

**Understand your role → find learning → plan → do it (in the LMS or on the job) → record it → get it reviewed → use approved evidence to choose the next step.** Every screen serves one step of this loop.

## Core ideas

- **Three kinds of learning.** Formal (courses), Relational (with and from people), Experiential (on the job). All three count only with evidence and manager review. Only formal items have a course link.
- **Finding ≠ doing ≠ approved.** A course link opens the provider; the employee completes it there and records it here. Only *approved* learning counts toward goals, progress and reports. *Submitted* is not approved. On-time depends on when it was submitted, not on how long the review took.
- **The direct manager reviews.** They approve, return with feedback (the employee revises and resubmits), or reject. Versions and decisions are kept. Nobody approves their own work.
- **Roles, not personal levels.** Employees don't pick a personal level. Managers assign a professional role from choices configured for the job family. Course levels (L1–L5) describe *courses*, never people.
- **Required only when someone says so.** Matching learning is optional unless an explicit rule or override with a reason makes it required. Company-wide required training stays in the LMS.
- **Goals and pathways.** Goals have target dates, milestones and progress; one goal is the focus; learning links to goals; approved linked learning moves the goal. Pathways are ordered activities with milestones and prerequisites, published by admins as templates; adopting one is the employee's choice.
- **Profile.** Experience, tools, certifications, education. Self-reported and manager-confirmed are always distinct. Missing information is “not recorded”, never evidence of no skill. Identity and org data come from the HR directory and are read-only here.
- **Private vs shared.** A manager's private note is visible only to its author. Shared feedback is for the employee to read and answer. They never mix, and private notes never go to AI.
- **Team views support, they don't rank.** Each person is counted once; percentages come from summed totals; only approved counts. No leaderboards, no activity tracking.
- **The AI advisor explains, it doesn't decide.** The backend first retrieves catalog items and pathways the user may see, then the model explains, compares and suggests ways to apply them, citing those sources. Links are validated; invented items are rejected. Profile, goal text and manager notes are never sent to the model. Factual questions (“how many approved trainings do I have?”) are answered from data, not by the model. The AI can't make anything required, approve, or change data.
- **Learning from the community.** The intranet already holds articles, questions and events from colleagues. Home's “For your goal” feed shows the few that match the user's own topics next to catalog items and people, each with a Why. They link out to the intranet; answering or attending can be recorded as relational learning.
- **Connected agents.** A user's own AI assistant can connect (MCP) with the user's permissions for at most an hour. It can only *propose* changes; the user confirms each one in the browser.

## Architecture rule the UI must respect

**The backend owns identity, permissions, business rules and trusted data.** The browser renders what the API returns. A hidden button is only a UI choice; the API rejects anything unauthorised. The UI never computes status, counts, eligibility or permissions itself.
