// Where each navigation target goes. In this starter every target opens a static reference view (/views/<mockup>).
// In the real app, replace the values with the app's routes (see docs/SCREENS.md for the intended URLs);
// the shell and the screens only ever read routes from here.
export const routes = {
  // employee
  today: '/views/01-home',
  find: '/views/03-learning',
  plan: '/views/04-goals',
  colleagues: '/views/08-colleagues',
  me: '/views/07-profile',
  // manager ("My team"). Reviewing is the "Waiting for you" tab inside Team, not a separate destination.
  team: '/views/10-team',
  teamWaiting: '/views/09-reviews',
  insights: '/views/30-team-insights',
  reports: '/views/11-reports',
  // admin console
  admin: '/views/12-admin-health',
  health: '/views/12-admin-health',
  catalog: '/views/13-admin-catalog',
  templates: '/views/14-admin-templates',
  rules: '/views/15-admin-rules',
  sources: '/views/16-admin-sources',
  access: '/views/17-admin-access',
  audit: '/views/24-admin-audit',
  back: '/views/01-home',
  // global
  help: '/',
  bell: '/views/22-notifications',
  cmdk: '/views/02-command',
} as const;

export type NavId = keyof typeof routes;

/** Mockup file name (e.g. "07f-profile-job-expectations") → route in this starter. */
export const viewHref = (mockup: string) => `/views/${mockup}`;
