// Visual + accessibility tests for the reference views (same harness as codex/verification, wired for this starter).
//   npm run build
//   npm run test:design:baseline     renders the HTML mockups → tests/design/__baselines__ (per machine)
//   npm run test:design              renders /views/* and compares against those baselines (+ axe)
// Browser: set PW_CHANNEL=msedge (or chrome) to use an installed browser when Playwright downloads are blocked.
import { defineConfig } from '@playwright/test';
import path from 'node:path';

const mockupBase = 'file:///' + path.resolve(__dirname, '..', 'design', 'html').replace(/\\/g, '/') + '/';
const APP_URL = process.env.APP_URL || 'http://127.0.0.1:3100';

export default defineConfig({
  testDir: './tests/design',
  snapshotPathTemplate: '{testDir}/__baselines__/{arg}{ext}',
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results/design-report' }]],
  expect: {
    // Same pass mark as codex/GOAL.md: at most 3% of pixels may differ (the starter's views measure 0–0.6%).
    toHaveScreenshot: { maxDiffPixelRatio: 0.03, animations: 'disabled', caret: 'hide', scale: 'css' },
  },
  use: {
    viewport: { width: 1600, height: 1060 },
    deviceScaleFactor: 1,
    channel: process.env.PW_CHANNEL || undefined,
    reducedMotion: 'reduce',
  },
  projects: [
    { name: 'mockup', use: { baseURL: mockupBase } },
    { name: 'app', use: { baseURL: APP_URL } },
  ],
  webServer: process.env.APP_URL ? undefined : {
    command: 'npm run start',
    url: APP_URL,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
