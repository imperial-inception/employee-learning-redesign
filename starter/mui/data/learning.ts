// Sample data for the Learning screen (/mui/learning). Static, typed, placeholder names only.
// Shapes mirror what the page needs from the API: replace the constants with the real calls.
import type { ApiStatus } from '@/lib/status';
import type { Kind } from '@/mui/components/labels';

import { LEVELS, type Level } from './levels';
export { LEVELS, type Level };

/** How the learning is delivered. This is the FORMAT, never the type (the type is Formal / Relational / Experiential). */
export type LearningFormat = 'Online' | 'In person' | 'Virtual classroom' | 'On the job';
export type Provider = 'LMS' | 'Library' | 'Academy' | 'Intranet';
/** Why the item is in a list: required or optional for the role, or simply in the catalog. */
export type Requirement = 'mandatory' | 'optional' | 'catalog';

export type LearningItem = {
  id: string;
  title: string;
  code?: string;
  kind: Kind;
  level: Level;
  requirement: Requirement;
  provider: Provider;
  format: LearningFormat;
  /** Duration in hours; undefined when the catalog has none ("—" in the drawer, left out of the row). */
  hours?: number;
  status: ApiStatus;
  /** Already in one of Jordan's pathways ("In your plan"). */
  inPlan?: boolean;
  /** Date added to the catalog (ISO), for "Newest". */
  added: string;
  /** The item's own summary from the catalog. Only some items have one; never a generic filler sentence. */
  description?: string;
  /** The ONE short, specific reason this item fits Jordan (gap, goal, pathway step, manager, deadline). */
  why: string;
  url: string;
};

/** What the page knows about Jordan. `learningLevel` is chosen in Profile; null shows the one-line level hint. */
export const PROFILE: { level: Level; learningLevel: Level | null; goal: string } = {
  level: 'L1', learningLevel: 'L2', goal: 'Own a subsystem architecture by Q3',
};

const url = (code: string) => `https://lms.example.com/learning/${code.toLowerCase()}`;

const ALL: LearningItem[] = [
  // ---------- role · L1 ----------
  { id: 'sef', title: 'Systems Engineering Fundamentals', code: 'SE-101', kind: 'formal', level: 'L1', requirement: 'mandatory', provider: 'Academy', format: 'Online', hours: 1, status: 'approved', added: '2025-02-10',
    why: 'Completed 3 Oct; counts toward your Systems integration pathway.', url: url('SE-101') },
  { id: 'docs', title: 'Document Navigation Basics', code: 'DN-100', kind: 'formal', level: 'L1', requirement: 'mandatory', provider: 'LMS', format: 'Online', hours: 2, status: 'approved', added: '2024-11-04',
    why: 'Required before you release drawings; completed 18 Sep.', url: url('DN-100') },
  { id: 'safety', title: 'Product Safety & Integrity Awareness', code: 'PS-100', kind: 'formal', level: 'L1', requirement: 'mandatory', provider: 'LMS', format: 'Online', hours: 1, status: 'not_started', added: '2026-09-01',
    description: 'The yearly refresher on reporting safety and product integrity concerns.',
    why: 'Required for Systems Engineers by 15 Jan.', url: url('PS-100') },
  { id: 'mbse', title: 'Introduction to MBSE', code: 'MB-101', kind: 'formal', level: 'L1', requirement: 'optional', provider: 'LMS', format: 'Online', hours: 0.5, status: 'in_progress', added: '2026-06-18',
    why: 'You are halfway through; about 15 minutes left.', url: url('MB-101') },
  { id: 'status', title: 'Clear Status & Issue Communication', code: 'CO-120', kind: 'rel', level: 'L1', requirement: 'optional', provider: 'LMS', format: 'In person', hours: 2, status: 'not_started', added: '2025-08-22',
    description: 'Communicate work status, blockers and technical issues clearly and early, in the team’s usual forum and cadence.',
    why: 'Sam Patel named status updates as your focus area on 12 Nov.', url: url('CO-120') },
  { id: 'sow', title: 'Scope & Statement of Work Interpretation', code: 'SW-110', kind: 'exp', level: 'L1', requirement: 'optional', provider: 'LMS', format: 'On the job', hours: 4, status: 'not_started', added: '2025-05-12',
    description: 'Read and follow the team’s statement of work and scope; use standards and templates to deliver correct-first-time artifacts.',
    why: 'Practise on your first scoped work package this month.', url: url('SW-110') },
  { id: 'shadow', title: 'Shadow a Peer Design Review', code: 'PR-105', kind: 'rel', level: 'L1', requirement: 'optional', provider: 'Intranet', format: 'In person', hours: 2, status: 'not_started', added: '2026-03-02',
    description: 'Join a senior engineer’s design review as an observer and note the questions reviewers ask.',
    why: 'Your team’s next design review is on 4 Dec, before you present in January.', url: url('PR-105') },
  // ---------- role · L2 ----------
  { id: 'rq', title: 'Requirements Writing & Review', code: 'RQ-210', kind: 'formal', level: 'L2', requirement: 'mandatory', provider: 'LMS', format: 'Online', hours: 3, status: 'approved', added: '2025-01-15',
    why: 'Required at L2; completed 14 Sep.', url: url('RQ-210') },
  { id: 'im', title: 'Interface Management', code: 'IM-201', kind: 'formal', level: 'L2', requirement: 'mandatory', provider: 'Academy', format: 'Virtual classroom', hours: 6, status: 'not_started', inPlan: true, added: '2026-04-07',
    description: 'Define, control and coordinate interfaces across stakeholders so interface decisions stay traceable and change-controlled.',
    why: 'Closes your Interface management gap for L2 (you are at 1 of the 2 needed).', url: url('IM-201') },
  { id: 'fa', title: 'Functional Architecture', code: 'FA-110', kind: 'formal', level: 'L2', requirement: 'optional', provider: 'LMS', format: 'Online', hours: 3, status: 'in_progress', inPlan: true, added: '2026-08-19',
    why: 'Teaches the architecture views your Q3 goal asks you to own.', url: url('FA-110') },
  { id: 'tools', title: 'Multi-Tool Practitioner for Issue Resolution', code: 'IR-210', kind: 'exp', level: 'L2', requirement: 'optional', provider: 'LMS', format: 'On the job', hours: 8, status: 'not_started', added: '2025-10-30',
    description: 'Use several integration and V&V tools in enough depth to support cross-functional issue resolution.',
    why: 'Practise on change request CR-482, which touches three of these tools.', url: url('IR-210') },
  { id: 'trade', title: 'Trade Study Methods', code: 'TS-215', kind: 'formal', level: 'L2', requirement: 'optional', provider: 'Academy', format: 'In person', hours: 8, status: 'not_started', added: '2026-10-05',
    why: 'Your team starts the actuator trade study in January.', url: url('TS-215') },
  // ---------- role · L3 ----------
  { id: 'vv', title: 'V&V Planning Essentials', code: 'VV-230', kind: 'formal', level: 'L3', requirement: 'optional', provider: 'LMS', format: 'Online', hours: 4, status: 'not_started', added: '2025-12-01',
    why: 'L3 asks you to draft a verification plan; most take this a year ahead.', url: url('VV-230') },
  { id: 'spokes', title: 'Technical Spokesperson for Integrated Reviews', code: 'TR-310', kind: 'rel', level: 'L3', requirement: 'optional', provider: 'Intranet', format: 'In person', hours: 6, status: 'not_started', added: '2024-09-16',
    description: 'Act as the technical voice in integrated reviews and guide program leads through critical decisions.',
    why: 'A preview of L3 expectations; talk it through with Sam Patel first.', url: url('TR-310') },
  { id: 'sicase', title: 'System Integration Case Studies', code: 'SI-120', kind: 'formal', level: 'L3', requirement: 'optional', provider: 'Academy', format: 'Online', hours: 3, status: 'not_started', added: '2026-07-21',
    why: 'Real integration failures and their fixes, before you own an architecture.', url: url('SI-120') },
  // ---------- catalog only (Browse all) ----------
  { id: 'config', title: 'Determining Product Configuration & Effectivity', code: 'CM-140', kind: 'formal', level: 'L2', requirement: 'catalog', provider: 'LMS', format: 'Online', hours: 1, status: 'not_started', added: '2026-05-14',
    why: 'Your subsystem moves to configuration control in February.', url: url('CM-140') },
  { id: 'detail', title: 'Creating Relationally Designed Detail Parts', code: 'CD-210', kind: 'formal', level: 'L2', requirement: 'catalog', provider: 'Library', format: 'Online', hours: 1.5, status: 'not_started', added: '2023-11-08',
    why: 'Pairs with CAD Surfacing; 6 engineers on your team took both this year.', url: 'https://library.example.com/courses/cd-210' },
  { id: 'surf', title: 'CAD Surfacing Fundamentals', code: 'CD-130', kind: 'formal', level: 'L1', requirement: 'catalog', provider: 'LMS', format: 'Online', hours: 3, status: 'not_started', added: '2024-02-19',
    why: 'Helps you read CAD surfaces with confidence in interface checks.', url: url('CD-130') },
  { id: 'assy', title: 'Position Parts with Assembly Constraints', code: 'CD-220', kind: 'formal', level: 'L2', requirement: 'catalog', provider: 'Library', format: 'Online', hours: 0.5, status: 'not_started', added: '2024-02-26',
    why: 'A 30-minute follow-on to CAD Surfacing for interface fit checks.', url: 'https://library.example.com/courses/cd-220' },
  { id: 'mgrs', title: 'Systems Engineering for Managers, Module 6', code: 'SE-306', kind: 'formal', level: 'L3', requirement: 'catalog', provider: 'Academy', format: 'Online', hours: 1, status: 'not_started', added: '2025-03-03',
    why: 'How leads plan and monitor technical work; context for L3.', url: url('SE-306') },
  { id: 'cmv', title: 'Configuration Verification Pillars', code: 'CM-150', kind: 'formal', level: 'L2', requirement: 'catalog', provider: 'Intranet', format: 'Online', status: 'not_started', added: '2026-05-20',
    why: 'Follows CM-140: how a configuration is verified before baseline.', url: 'https://intranet.example.com/cm/verification' },
  { id: 'nc', title: 'CAD for NC Manufacturing', code: 'CD-340', kind: 'formal', level: 'L3', requirement: 'catalog', provider: 'LMS', format: 'In person', hours: 40, status: 'not_started', added: '2022-06-13',
    why: 'Only if you move toward manufacturing interfaces; ask Sam Patel first.', url: url('CD-340') },
  { id: 'sio', title: 'System Integration Overview', code: 'SI-110', kind: 'formal', level: 'L1', requirement: 'catalog', provider: 'Academy', format: 'Online', hours: 2, status: 'approved', added: '2025-09-09',
    why: 'Completed 3 Oct; the first step of the Systems integration pathway.', url: url('SI-110') },
  { id: 'ics', title: 'Interface Control Specifications', code: 'IC-220', kind: 'formal', level: 'L2', requirement: 'catalog', provider: 'Academy', format: 'Online', hours: 3, status: 'not_started', added: '2026-10-28',
    description: 'Write interface control specifications at system and component level with clear ownership and impacts.',
    why: 'Your goal’s subsystem needs its first interface specs by March.', url: url('IC-220') },
];

const BY_ID = Object.fromEntries(ALL.map(i => [i.id, i])) as Record<string, LearningItem>;
const pick = (ids: string[]) => ids.map(id => BY_ID[id]);

/** "For your role": all role learning (L1–L3 in the sample), grouped by level on the page. */
export const ROLE_ITEMS: LearningItem[] = ALL.filter(i => i.requirement !== 'catalog');
/** "Browse all", page 1 (12 per page) of the whole catalog. */
export const BROWSE_PAGE: LearningItem[] = pick(['config', 'im', 'detail', 'surf', 'docs', 'assy', 'tools', 'mgrs', 'cmv', 'nc', 'sio', 'ics']);
export const BROWSE_TOTAL = 536;
export const PER_PAGE = 12;

// ---------- Recommended ----------

export type RecGroup = { id: string; label: string; sub?: string; items: LearningItem[] };

export const RECOMMENDED: RecGroup[] = [
  { id: 'goal', label: 'For your goal', sub: PROFILE.goal, items: pick(['fa', 'ics', 'sicase']) },
  { id: 'level', label: `To reach ${PROFILE.learningLevel ?? 'your next level'}`, sub: 'Gaps between your profile and the next level', items: pick(['tools', 'trade']) },
  { id: 'required', label: 'Required for your role', sub: 'Systems Engineer', items: pick(['safety', 'im']) },
];

/** Example questions: a short chip label, and the full question it puts in the ask bar. */
export const EXAMPLE_QUESTIONS: Array<{ label: string; q: string }> = [
  { label: 'A pathway for interface integration', q: 'Recommend a published pathway for systems engineering and interface integration' },
  { label: 'What next to reach L2?', q: 'What should I learn next to reach L2?' },
  { label: 'Trainings completed this year', q: 'How many trainings have I completed this year?' },
];

/** A paragraph of the AI answer: text with citations to the matched items (1-based). */
export type AnswerPart = string | { cite: number };

/** After asking (static sample answer). `matches` are cited as [1] [2] [3] in the paragraphs. */
export const ANSWER: { paragraphs: AnswerPart[][]; pathway: string; matches: LearningItem[] } = {
  pathway: 'Systems integration and verification',
  paragraphs: [
    ['The published pathway “Systems integration and verification” fits best. It starts with System Integration Overview ', { cite: 1 }, ', which you completed in October, so you can go straight to the interface work.'],
    ['Interface Management ', { cite: 2 }, ' closes your L2 gap and is already in your plan; Interface Control Specifications ', { cite: 3 }, ' then shows how to write the specs your subsystem needs. Agree the order with Sam Patel.'],
  ],
  matches: pick(['sio', 'im', 'ics']),
};

export const FOLLOW_UPS: Array<{ q: string; a: string }> = [
  { q: 'Compare these recommendations', a: 'System Integration Overview is the broad introduction (done). Interface Management is the core skill and required at L2. Interface Control Specifications is the hands-on follow-on: take it after Interface Management.' },
  { q: 'How could I apply this learning?', a: 'Use change request CR-482: list its interfaces, name an owner for each and agree the change path with Sam Patel. That is also good evidence for your L2 review.' },
  { q: 'Which one is quickest?', a: 'Interface Control Specifications, at 3 hours online. Interface Management is a 6-hour virtual classroom, scheduled monthly.' },
];
