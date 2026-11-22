// Sample data for the Pathways screen (/mui/pathways). Static, typed, placeholder names only.
// Shapes mirror what the page needs from the API: replace the constants with the real calls.
import type { ApiStatus } from '@/lib/status';
import type { Kind } from '@/mui/components/labels';

import { LEVELS, type Level } from './levels';
export { LEVELS, type Level };

/** Why the pathway is in "Mine": required for the role, chosen, or built by Jordan. */
export type PathwayKind = 'mandatory' | 'optional' | 'personal';
export const PATHWAY_KIND_LABEL: Record<PathwayKind, string> = { mandatory: 'Mandatory', optional: 'Optional', personal: 'Personal' };

export type Activity = {
  id: string;
  title: string;
  /** Catalog code, when the item has one (courses do; on-the-job and with-people activities often don't). */
  code?: string;
  kind: Kind;
  /** Framework level. The template maps levels to stages; an activity without one sits in "Other activities". */
  level?: Level;
  stageId?: string;
  status: ApiStatus;
  hours: number;
  /** One specific line on why this activity matters now (shown when it is the next step). */
  why: string;
  /** Title of the prerequisite that must be approved before this activity is ready. */
  waitingOn?: string;
  url: string;
};

export type Stage = { id: string; title: string };

export type Pathway = {
  id: string;
  title: string;
  kind: PathwayKind;
  /** Template revision; undefined for a personal pathway (no template). */
  revision?: number;
  /** The goal this pathway supports, if Jordan linked it to one (same goal name as on Home). */
  goal?: string;
  stages: Stage[];
  activities: Activity[];
};

const lms = (code: string) => `https://lms.example.com/learning/${code.toLowerCase()}`;

export const PATHWAYS: Pathway[] = [
  {
    id: 'se-levels',
    title: 'Systems engineering development across levels',
    kind: 'optional',
    revision: 1,
    goal: 'Model a subsystem in SysML v2',
    stages: [
      { id: 'foundations', title: 'Explore the foundations' },
      { id: 'architecture', title: 'Apply architecture skills' },
      { id: 'advanced', title: 'Develop advanced practice and collaboration' },
    ],
    activities: [
      { id: 'mb-101', title: 'Introduction to MBSE', code: 'MB-101', kind: 'formal', level: 'L1', stageId: 'foundations', status: 'approved', hours: 0.5, url: lms('MB-101'),
        why: 'The model-based basics every later step assumes.' },
      { id: 'sy-140', title: 'SysML Language & Architecture Overview', code: 'SY-140', kind: 'formal', level: 'L2', stageId: 'foundations', status: 'not_started', hours: 2, url: lms('SY-140'),
        why: 'Finishes “Explore the foundations” and gives you the SysML basics your goal needs.' },
      { id: 'fa-110', title: 'Functional Architecture', code: 'FA-110', kind: 'formal', level: 'L2', stageId: 'architecture', status: 'submitted', hours: 3, url: lms('FA-110'),
        why: 'Creates the functional architecture artifacts used for integration and traceability.' },
      { id: 'gov', title: 'Model & Configuration Governance at Team Scale', kind: 'exp', level: 'L4', stageId: 'architecture', status: 'not_started', hours: 2, url: lms('GOV-OJT'),
        why: 'Practise baselines, branching and review cadence on your team’s model.', waitingOn: 'Functional Architecture' },
      { id: 'ext', title: 'External Engagement & Publication', kind: 'rel', level: 'L5', stageId: 'advanced', status: 'not_started', hours: 2, url: lms('EXT-REL'),
        why: 'Share what your team learned with the wider discipline.', waitingOn: 'Model & Configuration Governance' },
    ],
  },
  {
    id: 'mbse-thread',
    title: 'MBSE foundations and digital-thread integration',
    kind: 'optional',
    revision: 1,
    stages: [
      { id: 'rflp', title: 'Explore MBSE and RFLP' },
      { id: 'trace', title: 'Connect requirements and traceability' },
    ],
    activities: [
      { id: 'rf-105', title: 'RFLP Modeling Basics', code: 'RF-105', kind: 'formal', level: 'L1', stageId: 'rflp', status: 'approved', hours: 3, url: lms('RF-105'),
        why: 'Walks one small system through its requirements, functional, logical and physical views.' },
      { id: 'im-201', title: 'Interface Management', code: 'IM-201', kind: 'formal', level: 'L2', stageId: 'rflp', status: 'not_started', hours: 2, url: lms('IM-201'),
        why: 'Gives every interface between subsystems a clear owner.' },
      { id: 'rt-220', title: 'Requirements Traceability in Models', code: 'RT-220', kind: 'formal', level: 'L2', stageId: 'trace', status: 'in_progress', hours: 2, url: lms('RT-220'),
        why: 'You are halfway through; it links requirements to the model elements you built in RFLP.' },
      { id: 'ts-215', title: 'Trade Study Methods', code: 'TS-215', kind: 'formal', level: 'L3', stageId: 'trace', status: 'not_started', hours: 2, url: lms('TS-215'),
        why: 'Compare design options with weighted criteria and keep the decision traceable.' },
    ],
  },
  {
    id: 'se-refresh',
    title: 'Systems engineering refresher',
    kind: 'personal',
    stages: [],
    activities: [
      { id: 'se-101', title: 'Systems Engineering Fundamentals', code: 'SE-101', kind: 'formal', status: 'approved', hours: 2, url: lms('SE-101'),
        why: 'Refreshes the core principles from a course you already know.' },
      { id: 'si-110', title: 'System Integration Overview', code: 'SI-110', kind: 'formal', status: 'submitted', hours: 1.5, url: lms('SI-110'),
        why: 'Plans integration order and test points for a subsystem.' },
      { id: 'vv-120', title: 'Cost-Effective V&V Overview', code: 'VV-120', kind: 'formal', status: 'not_started', hours: 1, url: lms('VV-120'),
        why: 'A one-hour primer that sets up V&V Planning Essentials, the last step here.' },
      { id: 'vv-230', title: 'V&V Planning Essentials', code: 'VV-230', kind: 'formal', status: 'not_started', hours: 3, url: lms('VV-230'),
        why: 'Plans verification and validation in a model-based engineering strategy.' },
    ],
  },
];

// ---------- published pathways (Explore drawer, Suggested) ----------

export const TOPICS = ['Systems engineering', 'MBSE', 'Integration', 'Requirements', 'V&V', 'Leadership'] as const;
export type Topic = (typeof TOPICS)[number];

export type PublishedPathway = {
  id: string;
  title: string;
  topic: Topic;
  activities: number;
  hours: number;
  colleagues: number;
  /** Set when the pathway is suggested for Jordan: the one specific reason. */
  why?: string;
  /** Already in "Mine". */
  added?: boolean;
};

export const PUBLISHED: PublishedPathway[] = [
  { id: 'pub-siv', title: 'Systems integration and verification', topic: 'Integration', activities: 4, hours: 9, colleagues: 87,
    why: 'Builds on your refresher: integration and V&V in one track.' },
  { id: 'pub-ifm', title: 'Interface management in practice', topic: 'Systems engineering', activities: 5, hours: 11, colleagues: 54,
    why: 'Your role profile lists interface ownership as a gap.' },
  { id: 'pub-se', title: 'Systems engineering development across levels', topic: 'Systems engineering', activities: 5, hours: 12, colleagues: 212, added: true },
  { id: 'pub-mbse', title: 'MBSE foundations and digital-thread integration', topic: 'MBSE', activities: 4, hours: 9, colleagues: 143, added: true },
  { id: 'pub-req', title: 'Requirements engineering essentials', topic: 'Requirements', activities: 6, hours: 14, colleagues: 120 },
  { id: 'pub-vvp', title: 'Verification planning for model-based programs', topic: 'V&V', activities: 4, hours: 10, colleagues: 46 },
  { id: 'pub-rev', title: 'Leading technical reviews', topic: 'Leadership', activities: 3, hours: 6, colleagues: 31 },
];
export const SUGGESTED = PUBLISHED.filter(p => p.why && !p.added).slice(0, 2);

// ---------- derived values (pure; the API could send these instead) ----------

const isStarted = (s: ApiStatus) => s !== 'not_started' && s !== 'locked';

export const hoursText = (h: number) => `about ${Math.round(h)} h`;
export const totalHours = (p: Pathway) => p.activities.reduce((n, a) => n + a.hours, 0);

/** Approved / in review / still to do, for the progress bar. Only approved activities count as done. */
export function progress(p: Pathway) {
  const approved = p.activities.filter(a => a.status === 'approved').length;
  const review = p.activities.filter(a => a.status === 'submitted').length;
  return { approved, review, toGo: p.activities.length - approved - review, total: p.activities.length };
}

export type StageState = { status: ApiStatus; label: string; approved: number; total: number };

/** A stage's state from its activities: "Not started" until one of them has started, "Done" when all are approved. */
export function stageState(acts: Activity[]): StageState {
  const started = acts.filter(a => isStarted(a.status)).length;
  const approved = acts.filter(a => a.status === 'approved').length;
  if (acts.length > 0 && approved === acts.length) return { status: 'approved', label: 'Done', approved, total: acts.length };
  if (started > 0) return { status: 'in_progress', label: `In progress · ${started} of ${acts.length} started`, approved, total: acts.length };
  return { status: 'not_started', label: 'Not started', approved, total: acts.length };
}

export type ActivityGroup = { id: string; number?: number; title: string; activities: Activity[] };

/** The stages in order, then "Other activities" for anything without a stage (no level in the framework). */
export function groupsOf(p: Pathway): ActivityGroup[] {
  const groups: ActivityGroup[] = p.stages.map((s, i) => ({ id: s.id, number: i + 1, title: s.title, activities: p.activities.filter(a => a.stageId === s.id) }));
  const other = p.activities.filter(a => !a.stageId || !p.stages.some(s => s.id === a.stageId));
  if (other.length > 0) groups.push({ id: 'other', title: 'Other activities', activities: other });
  return groups;
}

/** The next thing to do: continue what is in progress or returned, else the first activity that is ready to start. */
export function nextActivity(p: Pathway): { activity: Activity; group: ActivityGroup } | undefined {
  const ordered = groupsOf(p).flatMap(g => g.activities.map(a => ({ activity: a, group: g })));
  return ordered.find(x => x.activity.status === 'in_progress' || x.activity.status === 'returned')
    ?? ordered.find(x => x.activity.status === 'not_started' && !x.activity.waitingOn);
}
