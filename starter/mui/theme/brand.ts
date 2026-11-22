// The app's OWN brand colours (not a rebrand). Defaults approximate today's app from the screenshots:
// a bright blue top bar, navy surfaces, light-blue accents. In the real app, copy the exact values from the
// company design-system theme into `brand` (or pass them to createAppTheme) — the polish works with any blue.
import type { ThemeMode } from '@/lib/tokens.generated';

export type BrandPalette = {
  /** The brand blue: top bar, primary buttons, selected states, links on light. */
  primary: string;
  /** Darker end of the top-bar gradient. */
  primaryDark: string;
  /** Accent text on dark backgrounds (links, text buttons, "Why"), readable on navy. */
  accent: string;
  background: string;   // page
  paper: string;        // cards
  inset: string;        // inputs, nested boxes
  raised: string;       // hover fills, chips, tracks
  drawer: string;       // left menu
  border: string;       // hairlines
  borderStrong: string; // input and button outlines
  text: string;
  textSecondary: string;
  textDisabled: string;
  success: string;
  warning: string;
  orange: string;       // "returned"
  error: string;
  info: string;
  fontFamily: string;
  headingFontFamily: string;
};

const FONT = '"Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif';
const HEADING = '"Segoe UI Variable Display", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif';

export const brandDefaults: Record<ThemeMode, BrandPalette> = {
  dark: {
    primary: '#2F6FE0', primaryDark: '#1B4BB4', accent: '#8DB5FF',
    background: '#0C1A33', paper: '#12244A', inset: '#0F2042', raised: '#1A3160', drawer: '#0E1E3E',
    border: 'rgba(141,181,255,.14)', borderStrong: 'rgba(141,181,255,.26)',
    text: '#EEF3FF', textSecondary: '#A8B8D8', textDisabled: '#7083A8',
    success: '#3CCB8B', warning: '#F2B544', orange: '#FF8B4D', error: '#FF6B7A', info: '#5CC4FF',
    fontFamily: FONT, headingFontFamily: HEADING,
  },
  light: {
    primary: '#1F5FD6', primaryDark: '#1747A6', accent: '#1F5FD6',
    background: '#F2F5FB', paper: '#FFFFFF', inset: '#F7F9FD', raised: '#E9EFF9', drawer: '#FFFFFF',
    border: 'rgba(16,40,90,.10)', borderStrong: 'rgba(16,40,90,.18)',
    text: '#0F1B33', textSecondary: '#4D5C77', textDisabled: '#8A97AE',
    success: '#13945A', warning: '#B97A06', orange: '#D9621F', error: '#D6304A', info: '#0B7BC0',
    fontFamily: FONT, headingFontFamily: HEADING,
  },
};
