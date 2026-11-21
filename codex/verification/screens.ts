// Template: copy to tests/design/screens.ts. `route` values are placeholders: Codex fills in the real
// routes (keeping the app's base path) during Phase 0 recon. `fixture` names the deterministic data set
// that reproduces the mockup's text so the app screenshot can be compared with the reference.
export type Screen = { id: string; name: string; mockup: string; route: string; fixture?: string };

export const screens: Screen[] = [
  // Employee
  { id: '01', name: 'home', mockup: '01-home', route: '/home', fixture: 'jordan' },
  { id: '02', name: 'command-palette', mockup: '02-command', route: '/home?palette=interface%20integ', fixture: 'jordan' },
  { id: '03', name: 'learning', mockup: '03-learning', route: '/learning?q=interface%20integration', fixture: 'jordan' },
  { id: '19', name: 'pathways', mockup: '19-pathways', route: '/learning/pathways', fixture: 'jordan' },
  { id: '08', name: 'colleagues', mockup: '08-colleagues', route: '/colleagues?q=SysML', fixture: 'jordan' },
  { id: '04', name: 'goals', mockup: '04-goals', route: '/goals', fixture: 'jordan' },
  { id: '18', name: 'goal-editor', mockup: '18-goal-editor', route: '/goals/focus/edit', fixture: 'jordan' },
  { id: '25', name: 'next-level', mockup: '25-growth', route: '/goals/next-level', fixture: 'jordan' },
  { id: '05', name: 'record-new', mockup: '05-record-new', route: '/learning/record?step=evidence', fixture: 'jordan' },
  { id: '06', name: 'my-learning', mockup: '06-my-learning', route: '/learning/mine', fixture: 'jordan' },
  { id: '07', name: 'profile', mockup: '07-profile', route: '/profile', fixture: 'jordan' },
  { id: '23', name: 'connected-agents', mockup: '23-agent-confirm', route: '/profile/agents', fixture: 'jordan' },
  { id: '21', name: 'welcome', mockup: '21-welcome', route: '/home', fixture: 'omar-new' },
  { id: '22', name: 'notifications', mockup: '22-notifications', route: '/home?panel=notifications', fixture: 'jordan' },
  // Manager
  { id: '31', name: 'manager-home', mockup: '31-manager-home', route: '/home', fixture: 'jordan-manager' },
  { id: '09', name: 'reviews', mockup: '09-reviews', route: '/team/reviews', fixture: 'jordan-manager' },
  { id: '33', name: 'reviews-bulk', mockup: '33-reviews-bulk', route: '/team/reviews?mode=select', fixture: 'jordan-manager-7' },
  { id: '32', name: 'team-record', mockup: '32-team-record', route: '/team/record?step=attendees', fixture: 'jordan-manager' },
  { id: '10', name: 'team', mockup: '10-team', route: '/team', fixture: 'jordan-manager' },
  { id: '20', name: 'person', mockup: '20-person', route: '/team/priya', fixture: 'jordan-manager' },
  { id: '26', name: 'one-on-one', mockup: '26-one-on-one', route: '/team/priya/one-on-one', fixture: 'jordan-manager' },
  { id: '30', name: 'insights', mockup: '30-team-insights', route: '/team/insights?period=quarter', fixture: 'jordan-manager' },
  { id: '11', name: 'reports', mockup: '11-reports', route: '/team/reports/evidence', fixture: 'jordan-manager' },
  // Admin console
  { id: '12', name: 'admin-health', mockup: '12-admin-health', route: '/admin', fixture: 'admin' },
  { id: '13', name: 'admin-catalog', mockup: '13-admin-catalog', route: '/admin/catalog', fixture: 'admin' },
  { id: '16', name: 'admin-sources', mockup: '16-admin-sources', route: '/admin/sources/academy', fixture: 'admin' },
  { id: '14', name: 'admin-templates', mockup: '14-admin-templates', route: '/admin/templates/mbse', fixture: 'admin' },
  { id: '15', name: 'admin-rules', mockup: '15-admin-rules', route: '/admin/rules/populations', fixture: 'admin' },
  { id: '17', name: 'admin-access', mockup: '17-admin-access', route: '/admin/access', fixture: 'admin' },
  { id: '24', name: 'admin-audit', mockup: '24-admin-audit', route: '/admin/audit', fixture: 'admin' },
  // Proposals 27–29 are out of scope until approved.
];
