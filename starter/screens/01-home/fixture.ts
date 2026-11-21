// Sample data that reproduces the reference PNG (design/screens/01-home.png). Used by /views/01-home and the
// visual test. In the app this object comes from the API (through one adapter function), never from here.
import type { HomeData } from './types';

export const jordanHome: HomeData = {
  now: '2026-11-21T14:30:00',
  user: { firstName: 'Jordan' },
  growth: { targetLevel: 'Individual contributor 2', areasWithEvidence: 3, areasTotal: 6 },
  needsYouCount: 1,
  focusGoal: {
    id: 'sysml-v2',
    title: 'Become confident using SysML v2 to describe system architecture',
    dueLabel: '31 Dec',
    daysLeft: 40,
    counts: { approved: 2, submitted: 1, returned: 1, notStarted: 1, total: 5 },
    nextStep: {
      position: 3,
      title: 'SysML v2 language overview',
      kind: 'formal',
      hours: 0.5,
      source: 'LMS',
      status: 'not_started',
      openUrl: 'https://lms.example.com/course/sysml-v2-overview',
    },
    then: ['Shadow an interface review board', 'Model-to-PLM requirements demo'],
  },
  inbox: {
    needsYou: [
      { id: 'r1', status: 'returned', title: 'Clear Status & Issue Communication', context: 'Sam: “Add one example from the CDR prep.”', action: 'revise' },
    ],
    waitingOnOthers: [
      { id: 'r2', status: 'submitted', title: 'Functional Architecture', code: 'FA-110', context: 'Sam reviews by 25 Nov', onTimeNote: 'submitted on time', meta: '3d' },
    ],
    requiredNote: 'Nothing required here. Company-wide training is in the LMS.',
  },
  skills: [
    { name: 'Requirements & traceability', strength: 3, evidenceLabel: '3 pieces' },
    { name: 'Architecture modelling', focus: true, strength: 1, evidenceLabel: '1 · 1 in review' },
    { name: 'Communication', strength: 2, evidenceLabel: '2 pieces' },
    { name: 'Integration & interfaces', strength: 0, evidenceLabel: 'none yet' },
    { name: 'V&V planning', strength: 0, evidenceLabel: 'none yet' },
    { name: 'Mentoring', strength: null, evidenceLabel: 'not recorded' },
  ],
  feed: {
    topics: ['SysML', 'MBSE', 'Interfaces'],
    counts: { learning: 3, community: 3, people: 2 },
    items: [
      { kind: 'learning', id: 'IM-201', title: 'Interface Management', code: 'IM-201', meta: ['Learning', 'Formal', '2 h', 'Academy'], why: 'closes your “Integration & interfaces” gap' },
      { kind: 'article', id: 'a1', title: 'SysML v2 migration lessons', meta: ['Community', 'article on the intranet', '12 Nov', 'by Wei Chen'], why: 'matches your focus goal: “SysML v2”', url: 'https://intranet.example.com/a1' },
      { kind: 'question', id: 'q1', title: '“How do you keep SysML interface blocks in sync with the ICD?”', meta: ['Community', 'question', '2 answers', 'asked 18 Nov'], why: 'matches your topics: SysML, Interfaces · answering counts as learning with people', url: 'https://intranet.example.com/q1' },
      { kind: 'person', id: 'priya', name: 'Priya Nair', initials: 'PN', tone: 2, jobTitle: 'Lead Systems Engineer', confirmedBy: 'manager', meta: ['interface control', '3 approved items'], why: 'strong where you have a gap: “Integration & interfaces”' },
      { kind: 'event', id: 'e1', title: 'Digital thread community call', meta: ['Community', 'event', 'Wed 3 Dec, 15:00', '45 min'], why: 'matches your topic: MBSE · counts as learning with people if you record it' },
    ],
  },
};
