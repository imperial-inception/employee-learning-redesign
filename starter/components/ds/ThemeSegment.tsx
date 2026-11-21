import type { KeyboardEvent, ReactNode } from 'react';
import { Icon } from './Icon';
import { setTheme, useThemePreference, type ThemePreference } from '@/lib/theme';

const OPTIONS: Array<{ value: ThemePreference; label: string; icon?: ReactNode }> = [
  { value: 'dark', label: 'Dark', icon: <Icon name="moon" size="xs" /> },
  { value: 'light', label: 'Light', icon: <Icon name="sun2" size="xs" /> },
  { value: 'system', label: 'System' },
];

/** Dark / Light / System switch (profile menu, 02b). Writes data-theme; tokens, MUI and charts all follow it. */
export function ThemeSegment({ className, id }: { className?: string; id?: string }) {
  const pref = useThemePreference();
  const onKey = (v: ThemePreference) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTheme(v); }
  };
  return (
    <span className={['seg', className].filter(Boolean).join(' ')} id={id} role="radiogroup" aria-label="Theme">
      {OPTIONS.map(o => (
        <span key={o.value} data-t={o.value} className={pref === o.value ? 'on' : undefined} role="radio"
          aria-checked={pref === o.value} tabIndex={0} onClick={() => setTheme(o.value)} onKeyDown={onKey(o.value)}>
          {o.icon}{o.label}
        </span>
      ))}
    </span>
  );
}
