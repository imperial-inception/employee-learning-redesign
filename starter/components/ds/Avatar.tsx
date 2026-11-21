import type { CSSProperties } from 'react';
import { cx } from './cx';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'; // 20 / 24 / 26 / 34 px
export type AvatarTone = 1 | 2 | 3 | 4 | 5 | 6;

/** Stable colour per person: the same id always gets the same gradient (no meaning, just recognition). */
export function avatarTone(personId: string): AvatarTone {
  let h = 0;
  for (let i = 0; i < personId.length; i++) h = (h * 31 + personId.charCodeAt(i)) >>> 0;
  return ((h % 6) + 1) as AvatarTone;
}

/** Initials avatar. Photos are out of scope for the redesign (privacy); initials + tone identify people. */
export function Avatar({ initials, size = 'md', tone = 1, className, style }: {
  initials: string; size?: AvatarSize; tone?: AvatarTone; className?: string; style?: CSSProperties;
}) {
  return (
    <div className={cx('avatar', size !== 'md' && size, tone !== 1 && `a${tone}`, className)} style={style} aria-hidden="true">
      {initials}
    </div>
  );
}
