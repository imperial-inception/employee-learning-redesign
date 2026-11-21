// ECharts theme from the design tokens. Register both once, then pick by the current theme:
//
//   import * as echarts from 'echarts';
//   import { echartsTheme } from '@/lib/echarts-theme';
//   echarts.registerTheme('ds-dark', echartsTheme('dark'));
//   echarts.registerTheme('ds-light', echartsTheme('light'));
//   const chart = echarts.init(el, mode === 'light' ? 'ds-light' : 'ds-dark');   // mode from useThemeMode()
//
// ECharts can't read CSS variables, so switching theme means dispose() + init() with the other theme name.
// Charts follow DESIGN_SYSTEM.md: status colours mean the same thing everywhere (approved = ok, in review = warn,
// returned = orange, rejected = danger), hairline axes, no chart junk, mono tabular numbers.
import { tokens, type ThemeMode } from './tokens.generated';

const SANS = 'Geist, "Segoe UI", system-ui, sans-serif';
const MONO = '"Geist Mono", ui-monospace, Consolas, monospace';

/** Series colours in order. Status charts should set colours explicitly with statusColor() instead. */
export function seriesColors(mode: ThemeMode) {
  const t = tokens[mode];
  return [t.brand, t['t-rel'], t['t-exp'], t.info, t.ok, t.warn];
}

/** The status → colour mapping, for stacked bars of approved / in review / returned / not started. */
export function statusColor(mode: ThemeMode) {
  const t = tokens[mode];
  return { approved: t.ok, submitted: t.warn, returned: t.orange, rejected: t.danger, in_progress: t.brand, not_started: t['surface-3'] };
}

export function echartsTheme(mode: ThemeMode) {
  const t = tokens[mode];
  const axis = {
    axisLine: { show: true, lineStyle: { color: t['line-2'] } },
    axisTick: { show: false },
    axisLabel: { color: t.muted, fontFamily: MONO, fontSize: 11 },
    splitLine: { show: true, lineStyle: { color: t.line } },
    nameTextStyle: { color: t.muted, fontSize: 12 },
  };
  return {
    color: seriesColors(mode),
    backgroundColor: 'transparent',
    textStyle: { fontFamily: SANS, color: t['text-2'], fontSize: 12 },
    title: { textStyle: { color: t.text, fontSize: 13.5, fontWeight: 600 }, subtextStyle: { color: t.muted, fontSize: 12 } },
    legend: { textStyle: { color: t.muted, fontSize: 12 }, itemWidth: 7, itemHeight: 7, icon: 'roundRect' },
    tooltip: {
      backgroundColor: t.surface,
      borderColor: t['line-2'],
      borderWidth: 1,
      textStyle: { color: t.text, fontSize: 12 },
      extraCssText: 'border-radius:8px;box-shadow:none;',
    },
    categoryAxis: { ...axis, splitLine: { show: false } },
    valueAxis: { ...axis, axisLine: { show: false } },
    timeAxis: axis,
    bar: { itemStyle: { borderRadius: [3, 3, 0, 0] }, barMaxWidth: 18 },
    line: { symbol: 'none', lineStyle: { width: 1.75 }, smooth: false },
    gauge: { axisLine: { lineStyle: { color: [[1, t['surface-3']]] } } },
  };
}
