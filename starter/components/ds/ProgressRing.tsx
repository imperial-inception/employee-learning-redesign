import type { ReactNode } from 'react';

export type RingSegment = { value: number; color: string }; // color = a token, e.g. 'var(--ok)'

/** Segmented progress ring (focus goal). Segments are drawn in order from 12 o'clock on a neutral track.
 *  Values are counts from the API (approved, in review, returned…); the ring only draws them. */
export function ProgressRing({ segments, total, size = 92, stroke = 7, children, className }: {
  segments: RingSegment[]; total: number; size?: number; stroke?: number; children?: ReactNode; className?: string;
}) {
  const r = (size - stroke * 2) / 2 + stroke / 2 - 1.5; // 37 at the default size, like the reference
  const c = 2 * Math.PI * r;
  const unit = total > 0 ? c / total : 0;
  const gap = stroke + 3; // round caps add stroke/2 at each end; leave ~3px visible between segments
  let start = 0;
  return (
    <div className={className}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} style={{ stroke: 'var(--surface-3)' }} />
        {segments.map((sg, i) => {
          const from = start;
          start += sg.value;
          if (!sg.value) return null;
          const dash = Math.max(sg.value * unit - gap, 0.01);
          return (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} strokeLinecap="round"
              style={{ stroke: sg.color }} strokeDasharray={`${dash.toFixed(1)} ${Math.ceil(c)}`}
              strokeDashoffset={(-(from * unit + (from ? gap / 2 : 0))).toFixed(1)} />
          );
        })}
      </svg>
      {children}
    </div>
  );
}
