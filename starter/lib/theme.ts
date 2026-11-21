// Theme = the data-theme attribute on <html>: "dark" (the default) or "light".
// One attribute drives everything: the CSS tokens, the MUI theme (lib/mui-theme.ts) and ECharts (lib/echarts-theme.ts).
// The user's preference can also be "system" (follow the OS); it resolves to dark or light.
// If the app already has a theme switch, make it set this attribute instead of adding a second switch.
import { useEffect, useState } from 'react';
import type { ThemeMode } from './tokens.generated';

export type ThemePreference = ThemeMode | 'system';
export const THEME_STORAGE_KEY = 'theme'; // same key next-themes uses; the visual tests set it

/** Runs before first paint (inlined in pages/_document.tsx) so there is no flash of the wrong theme.
 *  ?theme=light in the URL wins (handy for reviews and screenshots), then the saved preference, then dark. */
export const themeInitScript = `(function(){var d=document.documentElement;try{var p=new URLSearchParams(location.search).get('theme')||localStorage.getItem('${THEME_STORAGE_KEY}')||'dark';if(p==='system'){p=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}d.setAttribute('data-theme',p==='light'?'light':'dark');}catch(e){d.setAttribute('data-theme','dark');}})();`;

export function getTheme(): ThemeMode {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export function getThemePreference(): ThemePreference {
  try {
    const p = localStorage.getItem(THEME_STORAGE_KEY);
    return p === 'light' || p === 'system' ? p : p === 'dark' ? 'dark' : getTheme();
  } catch {
    return getTheme();
  }
}

export function setTheme(pref: ThemePreference) {
  const mode: ThemeMode = pref === 'system'
    ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : pref;
  try { localStorage.setItem(THEME_STORAGE_KEY, pref); } catch { /* private mode: keep the attribute only */ }
  document.documentElement.setAttribute('data-theme', mode);
}

/** Current resolved theme, kept in sync with the attribute. Returns 'dark' during SSR and the first client render
 *  (so server and client markup match), then the real value. */
export function useThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>('dark');
  useEffect(() => {
    const read = () => setMode(getTheme());
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return mode;
}

/** The stored preference (dark / light / system), for a theme switch. 'dark' until mounted. */
export function useThemePreference(): ThemePreference {
  const mode = useThemeMode();
  const [pref, setPref] = useState<ThemePreference>('dark');
  useEffect(() => { setPref(getThemePreference()); }, [mode]);
  return pref;
}

/** Press T anywhere (outside inputs) to switch dark/light, like the HTML mockups. Reference-only convenience. */
export function useThemeHotkey() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (e.ctrlKey || e.metaKey || e.altKey || !t || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      if (e.key.toLowerCase() === 't') setTheme(getTheme() === 'light' ? 'dark' : 'light');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}
