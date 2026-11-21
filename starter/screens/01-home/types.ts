// What the Home screen needs from the API: ONE screen-shaped response (a "backend-for-frontend" read endpoint,
// e.g. GET /api/home). This is a PROPOSED contract. In the app, map whatever the API returns today onto it in one
// adapter function, and log anything the API can't provide in design/GAPS.md (render the honest empty state).
// Rule: the API computes every status, count, due date and "why"; the UI only lays them out.
import type { ApiStatus } from '@/lib/status';
import type { LearningKind } from '@/components/ds';
import type { AvatarTone } from '@/components/ds';

export type HomeData = {
  /** Server time, ISO 8601. Drives the date line and greeting (fixtures pin it so screenshots are stable). */
  now: string;
  user: { firstName: string };
  growth: {
    /** Job-catalog level the person is working toward, e.g. "Individual contributor 2". */
    targetLevel: string;
    areasWithEvidence: number;
    areasTotal: number;
  };
  /** How many inbox items need the person's own action today (0 = say nothing). */
  needsYouCount: number;
  focusGoal: FocusGoal | null;
  inbox: {
    needsYou: InboxItem[];
    waitingOnOthers: InboxItem[];
    /** null when required learning exists (then it is listed instead). */
    requiredNote: string | null;
  };
  skills: SkillArea[];
  feed: {
    topics: string[];
    counts: { learning: number; community: number; people: number };
    items: FeedItem[];
  };
};

export type FocusGoal = {
  id: string;
  title: string;
  /** Due date label and days left, both from the API (it owns the calendar rules). */
  dueLabel: string;
  daysLeft: number;
  /** Only `approved` counts as progress. */
  counts: { approved: number; submitted: number; returned: number; notStarted: number; total: number };
  nextStep: {
    position: number; // e.g. 3 (of total)
    title: string;
    kind: LearningKind;
    hours: number;
    source: string; // "LMS", "Library" …
    status: ApiStatus;
    openUrl: string | null; // deep link into the LMS for formal items, else null
  } | null;
  /** Titles of the steps after the next one. */
  then: string[];
};

export type InboxItem = {
  id: string;
  status: ApiStatus;
  title: string;
  code?: string;
  /** One line of context, e.g. the reviewer's comment or "Sam reviews by 25 Nov". */
  context: string;
  /** "submitted on time" etc.: shown in green after the context (on-time is decided by the submission date). */
  onTimeNote?: string;
  /** Mono meta on the right, e.g. "3d" waiting. */
  meta?: string;
  action?: 'revise' | 'open';
};

export type SkillArea = {
  name: string;
  focus?: boolean;
  /** 0–3 filled segments, from approved learning + manager-confirmed experience. null = not recorded (≠ zero). */
  strength: 0 | 1 | 2 | 3 | null;
  evidenceLabel: string; // "3 pieces", "1 · 1 in review", "none yet", "not recorded"
};

export type FeedItem =
  | { kind: 'learning'; id: string; title: string; code?: string; meta: string[]; why: string }
  | { kind: 'article'; id: string; title: string; meta: string[]; why: string; url: string }
  | { kind: 'question'; id: string; title: string; meta: string[]; why: string; url: string }
  | { kind: 'event'; id: string; title: string; meta: string[]; why: string }
  | {
      kind: 'person'; id: string; name: string; initials: string; tone: AvatarTone; jobTitle: string;
      confirmedBy: 'manager' | null; meta: string[]; why: string;
    };
