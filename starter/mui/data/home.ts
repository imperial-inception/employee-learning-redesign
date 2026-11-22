// Sample data for the Home screen (/mui/home). Static, typed, placeholder names only.
// Shapes mirror what the page needs from the API: replace the constants with the real calls.
import type { IconName } from '@/components/ds/icon-paths.generated';

/** One of the three numbers at the top of Home. `value` is "—" when there is nothing to count yet. */
export type HomeStat = {
  id: 'required' | 'goals' | 'review';
  label: string;
  value: string;
  sub: string;
  icon: IconName | 'check-circle';
};

/** A suggested activity in "Your next steps". `reason` is the ONE specific line that says why it is shown. */
export type NextStep = {
  id: string;
  title: string;
  icon: IconName; // users = with people · brief = on the job · cap = course
  requirement: 'Required' | 'Optional';
  provider: string;
  reason: string;
  href: string;
};

/** A row in "Keep your progress moving". Not every row has a shortcut. */
export type ProgressNudge = {
  id: string;
  title: string;
  text: string;
  icon: IconName;
  action?: { label: string; href: string };
};

/** A community post from the intranet that matches the person's topics. */
export type IntranetUpdate = {
  id: string;
  kind: 'article' | 'question' | 'event';
  date: string;
  title: string;
  match: string;
  href: string;
};

export const homeStats: HomeStat[] = [
  { id: 'required', label: 'Required learning', value: '—', sub: 'Not set yet', icon: 'check-circle' },
  { id: 'goals', label: 'Development goals', value: '1', sub: 'Choose your next ambition', icon: 'flag' },
  { id: 'review', label: 'Awaiting review', value: '0', sub: 'With your manager', icon: 'record' },
];

export const levelPrompt = 'Choose your current level to see the learning that is right for you.';

export const focus = {
  title: 'What would you like to grow next?',
  text: 'Start with a goal. Connect it with learning and turn your ambition into small, practical steps.',
};

export const learningProgress = {
  text: 'Your required learning and progress will show here. You can explore optional learning at any time.',
};

// Picked for an L2 systems engineer (practitioner level): no expert-only or consulting items.
export const nextSteps: NextStep[] = [
  {
    id: 'ns-1', title: 'MBSE Modelling Clinic with a Senior Engineer', icon: 'users', requirement: 'Optional', provider: 'LMS',
    reason: 'Fits your goal: Model a subsystem in SysML v2', href: '/mui/learning',
  },
  {
    id: 'ns-2', title: 'Multi-Tool Practitioner Usage for Moderate Issue Resolution', icon: 'brief', requirement: 'Optional', provider: 'LMS',
    reason: 'Practice for your role: Systems Engineer', href: '/mui/learning',
  },
  {
    id: 'ns-3', title: 'External MBSE Training', icon: 'cap', requirement: 'Optional', provider: 'LMS',
    reason: 'Matches your selected topic: MBSE', href: '/mui/learning',
  },
];

export const progressNudges: ProgressNudge[] = [
  { id: 'record', title: 'Record what you have learned', text: 'Share your takeaways and how you will apply them.', icon: 'record' },
  {
    id: 'strengths', title: 'Make your strengths visible', text: 'Add your experience, tools and qualifications.', icon: 'user',
    action: { label: 'Profile', href: '/mui' },
  },
];

export const intranetUpdates: IntranetUpdate[] = [
  { id: 'iu-1', kind: 'article', date: 'Nov 11, 2026', title: 'Challenges in Practising Hardware Certification', match: 'Matches your selected topics: MBSE.', href: 'https://intranet.example.com/articles/hardware-certification' },
  { id: 'iu-2', kind: 'article', date: 'Nov 10, 2026', title: 'Systems Symposium Presentation', match: 'Matches your selected topics: MBSE.', href: 'https://intranet.example.com/articles/systems-symposium' },
  { id: 'iu-3', kind: 'question', date: 'Nov 4, 2026', title: 'MBSE and agentic AI', match: 'Matches your selected topics: MBSE.', href: 'https://intranet.example.com/questions/mbse-and-agentic-ai' },
  { id: 'iu-4', kind: 'event', date: 'Oct 30, 2026', title: 'SysML v2 Lunch and Learn', match: 'Matches your selected topics: MBSE.', href: 'https://intranet.example.com/events/sysml-v2-lunch-and-learn' },
  { id: 'iu-5', kind: 'article', date: 'Oct 22, 2026', title: 'Lessons Learned from a Model-Based Design Review', match: 'Matches your selected topics: MBSE.', href: 'https://intranet.example.com/articles/model-based-design-review' },
];
