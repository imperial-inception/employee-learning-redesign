import type { CSSProperties } from 'react';
import { cx } from './cx';
import { iconPaths, statusPaths, type IconName } from './icon-paths.generated';
import { STATUS, type ApiStatus } from '@/lib/status';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg'; // 12 / 14 / 16 / 20 px (.i.xs, .i.sm, .i, .i.lg)

type IconProps = {
  name: IconName;
  size?: IconSize;
  className?: string;
  style?: CSSProperties;
  /** Give a label only when the icon carries meaning on its own (no visible text next to it). */
  label?: string;
};

/** Line icon from the design's own set (same drawings as the mockups). For an icon the set lacks,
 *  use lucide-react with strokeWidth={1.75} and the same .i size classes. */
export function Icon({ name, size = 'md', className, style, label }: IconProps) {
  return (
    <svg
      className={cx('i', size !== 'md' && size, className)}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      {iconPaths[name]}
    </svg>
  );
}

type StatusIconProps = {
  status: ApiStatus;
  className?: string;
  style?: CSSProperties;
  /** Overrides the default label (e.g. "Locked: opens when Requirements 101 is approved").
   *  Pass "" when visible text right next to it already says the status (the glyph is then decorative). */
  label?: string;
};

/** Status glyph: shape + colour, never colour alone (DESIGN_SYSTEM.md §2). Always pair with visible text
 *  in lists; the aria-label covers screen readers when the glyph stands alone. */
export function StatusIcon({ status, className, style, label }: StatusIconProps) {
  const s = STATUS[status];
  return (
    <svg
      className={cx('st', s.glyph, className)}
      style={style}
      viewBox="0 0 24 24"
      focusable="false"
      {...(label === '' ? { 'aria-hidden': true } : { role: 'img', 'aria-label': label ?? s.label })}
    >
      {statusPaths[s.glyph]}
    </svg>
  );
}
