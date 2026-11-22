// Sample data for the Home screen (/mui/home). Static, typed, placeholder names only.
// Home is about SKILLS: six skill areas with a strength meter, the gaps for the next level, and three ways to grow
// the biggest gap. One `HomeData` object per state: `active` (default) and `new` (?state=new: no level, no goal,
// nothing recorded). The focus pathway numbers come from the Pathways data so both pages agree.
// Replace the constants with the real calls.
import type { Kind } from '@/mui/components/labels';
import type { Level } from './levels';
import { nextActivity, PATHWAYS, progress } from './pathways';

export type HomeState = 'active' | 'new';

/** Strength of a skill area, 0–3 (one meter segment per point). `null` = nothing recorded yet, which is NOT 0. */
export type Strength = 0 | 1 | 2 | 3;

/** One skill area on "Your skills". Strength = approved learning + experience the manager confirmed. */
export type SkillArea = {
  id: string;
  name: string;
  strength: Strength | null;
  /** Approved pieces of evidence (learning or manager-confirmed experience). */
  approved: number;
  /** Pieces submitted and waiting for the manager. */
  inReview: number;
  /** What the next level expects; `null` while no level is chosen (no gap chips then). */
  expected: Strength | null;
  /** The skill the focus goal works on ("FOCUS" tag). */
  focus?: boolean;
};

export type SkillsSummary = {
  /** The level Jordan is working toward; `null` when no level is chosen. */
  targetLevel: Level | null;
  areas: SkillArea[];
  /** Shown instead of the footer when there is no level yet. */
  emptyHint?: string;
};

/** The focus goal and the pathway that serves it (compact card on the right). */
export type FocusGoal = {
  goal: string;
  due: string;
  daysLeft: number;
  pathway: { id: string; title: string; approved: number; inReview: number; total: number };
  next: { title: string; code?: string; url: string } | null;
};

/** Something on Home that needs Jordan (returned, due) or waits on the manager (in review). Status = icon + word. */
export type NeedsYouItem = {
  id: string;
  title: string;
  code: string;
  status: 'returned' | 'due' | 'submitted';
  context: string;
  action?: { label: string; href?: string };
};

/** One of the three ways to grow a skill: a course, a person, or practice / community. */
export type GrowOption = {
  id: string;
  way: 'learn' | 'person' | 'practice';
  title: string;
  code?: string;
  /** Learning type for a course (Formal / Relational / Experiential chip). */
  kind?: Kind;
  /** One meta line: "2 h · Academy", "Lead Systems Engineer", "Wed 3 Dec, 15:00". */
  meta: string;
  /** The one specific reason. */
  why: string;
  person?: { name: string; initials: string };
  action: { label: string; variant: 'outlined' | 'text'; href?: string };
};

/** A gap for the next level and its three ways to grow. */
export type GrowSkill = { areaId: string; name: string; options: GrowOption[] };

/** A recently approved piece of evidence and the skill it raised. */
export type RecentEvidence = { id: string; areaName: string; delta: number; title: string; code?: string; verb: 'approved' | 'confirmed'; date: string };

export type SetupStep = { id: string; title: string; why: string; done: boolean; action?: { label: string; href: string; primary?: boolean } };

export type IntranetPost = { id: string; kind: 'article' | 'question' | 'event'; date: string; title: string; href: string };

export type HomeData = {
  state: HomeState;
  role: string;
  /** Learning level now and the next one; null for a new user. */
  level: Level | null;
  nextLevel: Level | null;
  /** New user: the one line under "Welcome". */
  intro?: string;
  skills: SkillsSummary;
  focus: FocusGoal | null;
  setup: SetupStep[] | null;
  needsYou: NeedsYouItem[];
  /** Gaps to grow, biggest first; empty hides "Grow a skill". */
  grow: GrowSkill[];
  /** Up to 3, newest first; empty hides "Recently added". */
  recent: RecentEvidence[];
  intranet: { topics: string; posts: IntranetPost[] };
};

// ---------- helpers (pure; the API could send these instead) ----------

/** Greeting by local hour (set after mount, so server and client markup match). */
export const greetingFor = (hour: number) => (hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
export const isGap = (a: SkillArea) => a.expected !== null && (a.strength ?? 0) < a.expected;
export const hasEvidence = (a: SkillArea) => a.approved > 0;
export const needsAction = (items: NeedsYouItem[]) => items.filter(i => i.status !== 'submitted');
export const waitingOnManager = (items: NeedsYouItem[]) => items.filter(i => i.status === 'submitted');

// ---------- shared pieces ----------

const AREA_NAMES = [
  ['req', 'Requirements & traceability'],
  ['arch', 'Architecture modelling'],
  ['comm', 'Communication'],
  ['integ', 'Integration & interfaces'],
  ['vv', 'V&V planning'],
  ['mentor', 'Mentoring'],
] as const;

const INTRANET = {
  topics: 'MBSE',
  posts: [
    { id: 'ip-1', kind: 'article', date: 'Nov 11', title: 'Challenges in Practising Hardware Certification', href: 'https://intranet.example.com/articles/hardware-certification' },
    { id: 'ip-2', kind: 'question', date: 'Nov 4', title: 'MBSE and agentic AI', href: 'https://intranet.example.com/questions/mbse-and-agentic-ai' },
    { id: 'ip-3', kind: 'event', date: 'Dec 3', title: 'SysML v2 Lunch and Learn', href: 'https://intranet.example.com/events/sysml-v2-lunch-and-learn' },
    { id: 'ip-4', kind: 'article', date: 'Nov 10', title: 'Systems Symposium Presentation', href: 'https://intranet.example.com/articles/systems-symposium' },
    { id: 'ip-5', kind: 'article', date: 'Oct 22', title: 'Lessons Learned from a Model-Based Design Review', href: 'https://intranet.example.com/articles/model-based-design-review' },
  ] satisfies IntranetPost[],
};

// ---------- active user ----------

const focusPathway = PATHWAYS.find(p => p.id === 'se-levels') ?? PATHWAYS[0];
const pr = progress(focusPathway);
const next = nextActivity(focusPathway)?.activity;

const ACTIVE: HomeData = {
  state: 'active',
  role: 'Systems Engineer',
  level: 'L2',
  nextLevel: 'L3',
  skills: {
    targetLevel: 'L3',
    areas: [
      { id: 'req', name: 'Requirements & traceability', strength: 3, approved: 3, inReview: 0, expected: 2 },
      { id: 'arch', name: 'Architecture modelling', strength: 1, approved: 1, inReview: 1, expected: 1, focus: true },
      { id: 'comm', name: 'Communication', strength: 2, approved: 2, inReview: 0, expected: 2 },
      { id: 'integ', name: 'Integration & interfaces', strength: 0, approved: 0, inReview: 0, expected: 1 },
      { id: 'vv', name: 'V&V planning', strength: 0, approved: 0, inReview: 0, expected: 1 },
      { id: 'mentor', name: 'Mentoring', strength: null, approved: 0, inReview: 0, expected: 1 },
    ],
  },
  focus: {
    goal: focusPathway.goal ?? 'Model a subsystem in SysML v2',
    due: '31 Dec',
    daysLeft: 39, // from 22 Nov
    pathway: { id: focusPathway.id, title: focusPathway.title, approved: pr.approved, inReview: pr.review, total: pr.total },
    next: next ? { title: next.title, code: next.code, url: next.url } : null,
  },
  setup: null,
  needsYou: [
    { id: 'co-120', title: 'Clear Status & Issue Communication', code: 'CO-120', status: 'returned', context: 'Sam: add one example from the CDR prep.', action: { label: 'Revise' } },
    { id: 'ps-100', title: 'Product Safety & Integrity Awareness', code: 'PS-100', status: 'due', context: 'Required by 15 Jan · 1 h', action: { label: 'Start', href: 'https://lms.example.com/learning/ps-100' } },
    { id: 'fa-110', title: 'Functional Architecture', code: 'FA-110', status: 'submitted', context: 'Sam reviews by 25 Nov · submitted on time' },
  ],
  grow: [
    {
      areaId: 'integ', name: 'Integration & interfaces',
      options: [
        { id: 'g-im', way: 'learn', title: 'Interface Management', code: 'IM-201', kind: 'formal', meta: '2 h · Academy', why: 'Covers ICDs and interface change control.',
          action: { label: 'Add to plan', variant: 'outlined' } },
        { id: 'g-priya', way: 'person', title: 'Priya Nair', meta: 'Lead Systems Engineer', person: { name: 'Priya Nair', initials: 'PN' },
          why: 'Manager-confirmed in interface control · shares her learning.', action: { label: 'Ask Priya', variant: 'outlined' } },
        { id: 'g-iwg', way: 'practice', title: 'Interface working group call', meta: 'Wed 3 Dec, 15:00 · online', why: 'Hear how interface changes are agreed across teams.',
          action: { label: 'Add to calendar', variant: 'text' } },
      ],
    },
    {
      areaId: 'vv', name: 'V&V planning',
      options: [
        { id: 'g-vv', way: 'learn', title: 'V&V Planning Essentials', code: 'VV-230', kind: 'formal', meta: '4 h · LMS', why: 'L3 asks you to draft a verification plan.',
          action: { label: 'Add to plan', variant: 'outlined' } },
        { id: 'g-marcus', way: 'person', title: 'Marcus Chen', meta: 'Verification Lead', person: { name: 'Marcus Chen', initials: 'MC' },
          why: 'Manager-confirmed in verification planning · reviews test plans.', action: { label: 'Ask Marcus', variant: 'outlined' } },
        { id: 'g-cr', way: 'practice', title: 'Draft the verification plan for CR-482', meta: 'On the job · with Sam', why: 'Real evidence for L3; Sam reviews it with you.',
          action: { label: 'Add to plan', variant: 'text' } },
      ],
    },
    {
      areaId: 'mentor', name: 'Mentoring',
      options: [
        { id: 'g-mn', way: 'learn', title: 'Mentoring Essentials', code: 'MN-200', kind: 'formal', meta: '1.5 h · Academy', why: 'How to run short, useful mentoring sessions.',
          action: { label: 'Add to plan', variant: 'outlined' } },
        { id: 'g-sam', way: 'person', title: 'Sam Patel', meta: 'Your manager', person: { name: 'Sam Patel', initials: 'SP' },
          why: 'Can confirm mentoring you already do, so it counts.', action: { label: 'Ask Sam', variant: 'outlined' } },
        { id: 'g-buddy', way: 'practice', title: 'Buddy a new starter', meta: 'Team onboarding · from 6 Jan', why: 'Counts as mentoring evidence once Sam confirms it.',
          action: { label: 'Volunteer', variant: 'text' } },
      ],
    },
  ],
  recent: [
    { id: 'r-mb', areaName: 'Architecture modelling', delta: 1, title: 'Introduction to MBSE', code: 'MB-101', verb: 'approved', date: '12 Nov' },
    { id: 'r-standup', areaName: 'Communication', delta: 1, title: 'Led the weekly integration stand-up', verb: 'confirmed', date: '2 Oct' },
    { id: 'r-rq', areaName: 'Requirements & traceability', delta: 1, title: 'Requirements Writing & Review', code: 'RQ-210', verb: 'approved', date: '14 Sep' },
  ],
  intranet: INTRANET,
};

// ---------- new user ----------

const NEW: HomeData = {
  state: 'new',
  role: 'Systems Engineer',
  level: null,
  nextLevel: null,
  intro: 'Set up in about 3 minutes, then this page shows what to do next.',
  skills: {
    targetLevel: null,
    areas: AREA_NAMES.map(([id, name]) => ({ id, name, strength: null, approved: 0, inReview: 0, expected: null })),
    emptyHint: 'Choose your level to see which skills matter for you.',
  },
  focus: null,
  setup: [
    { id: 'profile', title: 'Sign in and check your profile', why: 'Your role and team came from the directory.', done: true },
    { id: 'level', title: 'Choose your learning level', why: 'Your skills and suggestions then match your level.', done: false, action: { label: 'Choose level', href: '/mui', primary: true } },
    { id: 'goal', title: 'Set a goal', why: 'Home then puts the next step toward it first.', done: false, action: { label: 'Create a goal', href: '/mui' } },
  ],
  needsYou: [],
  grow: [],
  recent: [],
  intranet: INTRANET,
};

export const HOME: Record<HomeState, HomeData> = { active: ACTIVE, new: NEW };
