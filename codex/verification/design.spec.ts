// Template: copy to tests/design/design.spec.ts.
// Run order per screen:
//   1) npx playwright test -c playwright.design.config.ts --project=mockup --grep "^01 " --update-snapshots   (reference)
//   2) npx playwright test -c playwright.design.config.ts --project=app --grep "^01 "                         (compare + axe)
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { screens } from './screens';

const themes = ['dark', 'light'] as const;

for (const s of screens) {
  for (const theme of themes) {
    test(`${s.id} ${s.name} [${theme}]`, async ({ page }, info) => {
      const isMockup = info.project.name === 'mockup';

      if (isMockup) {
        await page.goto(`${s.mockup}.html${theme === 'light' ? '?theme=light' : ''}`);
      } else {
        // next-themes reads localStorage("theme"); fixture mode is selected by the app's test-only switch.
        await page.addInitScript(([t, f]) => {
          localStorage.setItem('theme', t);
          if (f) localStorage.setItem('fixture', f);
        }, [theme, s.fixture ?? ''] as const);
        await page.goto(s.route);
      }
      await page.evaluate(() => document.fonts.ready);
      await page.waitForLoadState('networkidle');

      // Prefer fixture data that reproduces the mockup text over masking. If something must be masked,
      // add the same data-mask attribute to the element in BOTH the mockup HTML and the app.
      await expect(page).toHaveScreenshot(`${s.id}-${s.name}-${theme}.png`, {
        mask: [page.locator('[data-mask]')],
      });

      if (!isMockup) {
        const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        expect(axe.violations.map(v => `${v.id}: ${v.nodes.length} node(s)`)).toEqual([]);
      }
    });
  }
}

// Responsive smoke test: no horizontal scroll, nothing clipped, at common laptop and desktop sizes.
for (const s of screens) {
  for (const vp of [{ width: 1280, height: 800 }, { width: 1920, height: 1080 }]) {
    test(`${s.id} ${s.name} fits ${vp.width}x${vp.height}`, async ({ page }, info) => {
      test.skip(info.project.name !== 'app', 'app only');
      await page.setViewportSize(vp);
      await page.goto(s.route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
}
