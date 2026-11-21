// Template: copy to the app repo root as playwright.design.config.ts and adjust APP_URL / routes.
// Two projects share ONE baseline folder:
//   mockup -> renders design/html/<screen>.html and (with --update-snapshots) writes the reference images
//   app    -> renders the real route with fixture data and compares against those same images
// Baselines are produced on the same machine/browser as the app run, so font rendering matches.
import { defineConfig } from '@playwright/test';
import path from 'node:path';

const mockupBase = 'file:///' + path.resolve(__dirname, 'design/html').replace(/\\/g, '/') + '/';

export default defineConfig({
  testDir: './tests/design',
  // no {projectName} in the template => mockup and app share the same baseline files
  snapshotPathTemplate: '{testDir}/__baselines__/{arg}{ext}',
  fullyParallel: false,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results/design-report' }]],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.03, animations: 'disabled', caret: 'hide', scale: 'css' },
  },
  use: {
    viewport: { width: 1600, height: 1060 },
    deviceScaleFactor: 1,
    // If Playwright browser downloads are blocked on this machine, set PW_CHANNEL=msedge to use installed Edge.
    channel: process.env.PW_CHANNEL || undefined,
    reducedMotion: 'reduce',
  },
  projects: [
    { name: 'mockup', use: { baseURL: mockupBase } },
    { name: 'app', use: { baseURL: process.env.APP_URL || 'http://127.0.0.1:3000' } },
  ],
});
