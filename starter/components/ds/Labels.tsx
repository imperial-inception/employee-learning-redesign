import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';
import { StatusIcon } from './Icon';
import { STATUS, type ApiStatus, type PillTone } from '@/lib/status';

type SpanProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & { className?: string; children?: ReactNode };

/** Tinted label: status or meaning (ok = approved, rev = in review, ret = returned, bad = rejected,
 *  acc = brand/focus, info = neutral notice, neu = neutral). */
export function Pill({ tone, size, className, children, ...rest }: SpanProps & { tone?: PillTone; size?: 'sm' }) {
  return <span className={cx('pill', tone && `p-${tone}`, size, className)} {...rest}>{children}</span>;
}

/** Pill for an API status: glyph + label, colour from the status. */
export function StatusPill({ status, size, className, label }: { status: ApiStatus; size?: 'sm'; className?: string; label?: string }) {
  const s = STATUS[status];
  return (
    <Pill tone={s.tone} size={size} className={className}>
      <StatusIcon status={status} label="" style={{ width: 12, height: 12 }} />
      {label ?? s.label}
    </Pill>
  );
}

/** Neutral outline tag (type, duration, source). Put a <TypeDot> first for learning types. */
export function Tag({ className, children, ...rest }: SpanProps) {
  return <span className={cx('tag', className)} {...rest}>{children}</span>;
}

export type LearningKind = 'formal' | 'rel' | 'exp'; // Formal · Relational (with people) · Experiential (on the job)

/** The small coloured dot that marks a learning type inside a Tag. */
export function TypeDot({ kind, className, style }: { kind: LearningKind; className?: string; style?: CSSProperties }) {
  return <span className={cx('d', kind, className)} style={style} />;
}

/** Keyboard hint: <Kbd>Ctrl K</Kbd>. */
export function Kbd({ className, children, ...rest }: SpanProps) {
  return <span className={cx('kbd', className)} {...rest}>{children}</span>;
}
