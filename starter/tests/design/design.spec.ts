// One test per view and theme. The mockup project writes the baseline from design/html/<view>.html; the app project
// renders /views/<view> and must match it (≤ 3% differing pixels) and pass axe (WCAG 2.1 AA rules).
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { views } from '../../screens/registry';

const themes = ['dark', 'light'] as const;
const only = process.env.VIEWS ? process.env.VIEWS.split(',') : null; // VIEWS=01-home,10-team npm run test:design

for (const v of views.filter(x => !only || only.includes(x.mockup))) {
  for (const theme of themes) {
    test(`${v.id} ${v.name} [${theme}]`, async ({ page }, info) => {
      const isMockup = info.project.name === 'mockup';
      if (isMockup) {
        await page.goto(`${v.mockup}.html${theme === 'light' ? '?theme=light' : ''}`);
      } else {
        await page.addInitScript(t => { try { localStorage.setItem('theme', t); } catch { /* ignore */ } }, theme);
        await page.goto(`/views/${v.mockup}`);
      }
      await page.waitForLoadState('load');
      await page.evaluate(() => document.fonts.ready);

      await expect(page).toHaveScreenshot(`${v.mockup}-${theme}.png`, { mask: [page.locator('[data-mask]')] });

      if (!isMockup) {
        const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        // Soft: the visual result is still reported when axe finds something. Fix every violation before "done".
        expect.soft(axe.violations.map(x => `${x.id}: ${x.nodes.length} node(s)`)).toEqual([]);
      }
    });
  }
}
