// Type extensions the design theme adds to MUI (import nothing; TypeScript picks this up from tsconfig "include").
import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    ds: DsColors;
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    ds?: DsColors;
  }
  /** Raw design tokens for the few places that need them in `sx` (prefer palette keys elsewhere). */
  interface DsColors {
    panel: string; surface: string; surface2: string; surface3: string; hover: string; sel: string;
    line: string; line2: string; text2: string; faint: string; brand2: string; brandBg: string; brandLine: string;
    okBg: string; warnBg: string; orange: string; orangeBg: string; dangerBg: string; infoBg: string;
    tFormal: string; tRel: string; tExp: string; cyan: string; glow: string; overlay: string; heroWash: string;
  }
  interface TypographyVariants {
    mono: CSSProperties;
    label: CSSProperties;
    meta: CSSProperties;
  }
  interface TypographyVariantsOptions {
    mono?: CSSProperties;
    label?: CSSProperties;
    meta?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mono: true;
    label: true;
    meta: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    neutral: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
