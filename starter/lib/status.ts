// The status system (DESIGN_SYSTEM.md §2). Map ONLY from the API's status enum: never compute status in the browser.
// If the API uses different strings, translate them here once (one place), not in components.
import type { StatusGlyph } from '@/components/ds/icon-paths.generated';

export type ApiStatus =
  | 'not_started'
  | 'in_progress'
  | 'submitted'
  | 'approved'
  | 'returned'
  | 'rejected'
  | 'locked';

export type PillTone = 'ok' | 'rev' | 'ret' | 'bad' | 'acc' | 'info' | 'neu';

export const STATUS: Record<ApiStatus, { glyph: StatusGlyph; label: string; tone: PillTone }> = {
  not_started: { glyph: 'st-not', label: 'Not started', tone: 'neu' },
  in_progress: { glyph: 'st-prog', label: 'In progress', tone: 'acc' },
  submitted: { glyph: 'st-rev', label: 'In review', tone: 'rev' },
  approved: { glyph: 'st-ok', label: 'Approved', tone: 'ok' },
  returned: { glyph: 'st-ret', label: 'Returned', tone: 'ret' },
  rejected: { glyph: 'st-bad', label: 'Rejected', tone: 'bad' },
  locked: { glyph: 'st-lock', label: 'Locked', tone: 'neu' },
};

/** Mockup glyph class → API status (used by the mockup converter; handy when reading the HTML mockups). */
export const GLYPH_TO_STATUS: Record<StatusGlyph, ApiStatus> = {
  'st-not': 'not_started',
  'st-prog': 'in_progress',
  'st-rev': 'submitted',
  'st-ok': 'approved',
  'st-ret': 'returned',
  'st-bad': 'rejected',
  'st-lock': 'locked',
};
