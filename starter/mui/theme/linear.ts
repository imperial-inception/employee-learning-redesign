// The re-skin: one MUI 5 theme that gives every existing MUI screen the redesign's look ("Linear-grade": dark-first,
// hairline borders, one indigo accent, Geist type, quiet tinted status colours, dense aligned rows).
//
//   import { createDsTheme, dsThemeOptions } from './mui/theme';
//   <ThemeProvider theme={createDsTheme(mode)}>          // mode = useThemeMode() ('dark' | 'light')
//
// If the app already builds its theme from a company design-system theme, MERGE instead of replacing:
//   createTheme(deepmerge(companyThemeOptions, dsThemeOptions(mode)))      (deepmerge from '@mui/utils')
// Values come from lib/tokens.generated.ts, which is generated from the mockup stylesheet: one source of truth.
import { alpha, createTheme, type Theme, type ThemeOptions } from '@mui/material/styles';
import type {} from './augment';
// NOTE: this is the design kit's black/indigo theme. The brand-preserving re-skin is ./index.ts.
import { tokens, type ThemeMode } from '@/lib/tokens.generated';

export const FONT_SANS = 'Geist, "Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif';
export const FONT_MONO = '"Geist Mono", ui-monospace, "Cascadia Mono", Consolas, monospace';

type Tone = 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary' | 'neutral';

export function dsThemeOptions(mode: ThemeMode): ThemeOptions {
  const t = tokens[mode];
  const dark = mode === 'dark';
  const ds = {
    panel: t.panel, surface: t.surface, surface2: t['surface-2'], surface3: t['surface-3'], hover: t.hover, sel: t.sel,
    line: t.line, line2: t['line-2'], text2: t['text-2'], faint: t.faint, brand2: t['brand-2'], brandBg: t['brand-bg'],
    brandLine: t['brand-line'], okBg: t['ok-bg'], warnBg: t['warn-bg'], orange: t.orange, orangeBg: t['orange-bg'],
    dangerBg: t['danger-bg'], infoBg: t['info-bg'], tFormal: t['t-formal'], tRel: t['t-rel'], tExp: t['t-exp'],
    cyan: t.cyan, glow: t.glow, overlay: t.overlay, heroWash: t['hero-wash'],
  };
  // tinted "soft" colours for chips, alerts and status: [text, background]
  const soft: Record<Tone, [string, string]> = {
    success: [t.ok, t['ok-bg']],
    warning: [t.warn, t['warn-bg']],
    error: [t.danger, t['danger-bg']],
    info: [t.info, t['info-bg']],
    primary: [dark ? t['brand-2'] : t.brand, t['brand-bg']],
    secondary: [t.orange, t['orange-bg']],
    neutral: [t['text-2'], t['surface-3']],
  };
  const panelShadow = dark ? 'none' : '0 1px 2px rgba(9,9,11,.04), 0 2px 6px -2px rgba(9,9,11,.04)';
  const focusRing = { outline: `2px solid ${t.brand}`, outlineOffset: 2 };

  return {
    palette: {
      mode,
      primary: { main: t.brand, light: t['brand-2'], dark: t.brand, contrastText: '#fff' },
      secondary: { main: t.orange, contrastText: '#fff' },
      success: { main: t.ok, contrastText: dark ? '#05130B' : '#fff' },
      warning: { main: t.warn, contrastText: '#000' },
      error: { main: t.danger, contrastText: '#fff' },
      info: { main: t.info, contrastText: '#fff' },
      neutral: { main: t['text-2'], light: t.muted, dark: t.text, contrastText: t.bg },
      background: { default: t.bg, paper: t.surface },
      text: { primary: t.text, secondary: t.muted, disabled: t.faint },
      divider: t.line,
      action: {
        hover: t.hover, selected: t.sel, focus: t.sel, active: t.muted,
        disabled: t.faint, disabledBackground: t['surface-3'], hoverOpacity: dark ? 0.045 : 0.035, selectedOpacity: 0.075,
      },
      ds,
    },
    shape: { borderRadius: 8 },
    spacing: 4, // a 4px grid: sx={{ p: 4 }} = 16px
    typography: {
      fontFamily: FONT_SANS,
      fontSize: 13.5,
      htmlFontSize: 16,
      fontWeightMedium: 500,
      h1: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.15 },
      h2: { fontSize: 26, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h3: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h4: { fontSize: 26, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15 }, // page titles ("Your learning")
      h5: { fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 },
      h6: { fontSize: 13.5, fontWeight: 600, letterSpacing: '-0.005em', lineHeight: 1.35 }, // panel titles
      subtitle1: { fontSize: 14, color: t.muted, lineHeight: 1.45 },
      subtitle2: { fontSize: 13, fontWeight: 550, lineHeight: 1.4 },
      body1: { fontSize: 13.5, lineHeight: 1.45 },
      body2: { fontSize: 12.5, lineHeight: 1.45 },
      caption: { fontSize: 12, lineHeight: 1.4, color: t.muted },
      overline: { fontFamily: FONT_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '.07em', lineHeight: 1.4, color: t.faint, textTransform: 'uppercase' },
      button: { fontSize: 13, fontWeight: 500, textTransform: 'none', letterSpacing: 0, lineHeight: 1 },
      mono: { fontFamily: FONT_MONO, fontSize: 12, fontWeight: 500, fontVariantNumeric: 'tabular-nums' },
      label: { fontSize: 12.5, fontWeight: 550, color: t['text-2'] },
      meta: { fontSize: 12, color: t.muted, lineHeight: 1.4 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [
            { fontFamily: 'Geist', src: 'url("/fonts/Geist-Variable.woff2") format("woff2")', fontWeight: '100 900', fontStyle: 'normal', fontDisplay: 'swap' },
            { fontFamily: 'Geist Mono', src: 'url("/fonts/GeistMono-Variable.woff2") format("woff2")', fontWeight: '100 900', fontStyle: 'normal', fontDisplay: 'swap' },
          ] as unknown as string,
          body: { WebkitFontSmoothing: 'antialiased', fontFeatureSettings: '"ss01","cv11"', colorScheme: mode },
          '::selection': { background: alpha(t.brand, 0.32) },
          '*': { scrollbarWidth: 'thin', scrollbarColor: `${t['line-2']} transparent` },
          'code, kbd, samp': { fontFamily: FONT_MONO },
        },
      },
      MuiTypography: {
        defaultProps: { variantMapping: { mono: 'span', label: 'span', meta: 'span', h4: 'h1', h6: 'h2' } },
      },
      MuiLink: {
        defaultProps: { underline: 'hover' },
        styleOverrides: { root: { color: dark ? t['brand-2'] : t.brand, fontWeight: 500 } },
      },

      // ---------------- frame: top bar, side menu, breadcrumbs ----------------
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'inherit' },
        styleOverrides: {
          root: {
            background: alpha(t.bg, 0.82), backdropFilter: 'saturate(1.4) blur(10px)', color: t.text,
            borderBottom: `1px solid ${t.line}`, backgroundImage: 'none',
          },
        },
      },
      MuiToolbar: { styleOverrides: { root: { minHeight: 52, '@media (min-width:600px)': { minHeight: 52, paddingLeft: 16, paddingRight: 16 } } } },
      MuiDrawer: {
        styleOverrides: {
          paper: { background: t.panel, borderColor: t.line, backgroundImage: 'none' },
          paperAnchorRight: { background: t.surface, borderLeft: `1px solid ${t['line-2']}`, boxShadow: dark ? '-24px 0 80px rgba(0,0,0,.45)' : '-24px 0 60px rgba(9,9,11,.10)' },
        },
      },
      MuiList: { styleOverrides: { root: { padding: 0 } } },
      MuiListSubheader: {
        styleOverrides: { root: { background: 'transparent', fontSize: 11.5, fontWeight: 500, lineHeight: '20px', color: t.faint, padding: '14px 10px 4px' } },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            minHeight: 31, padding: '0 9px', borderRadius: 7, color: t['text-2'], fontWeight: 500, gap: 10,
            '&:hover': { background: t.hover, color: t.text },
            '&.Mui-selected': { background: t.sel, color: t.text, '& .MuiListItemIcon-root': { color: t.text } },
            '&.Mui-selected:hover': { background: t.sel },
            '&.Mui-focusVisible': { background: t.sel },
          },
        },
      },
      MuiListItemIcon: { styleOverrides: { root: { minWidth: 0, color: t.muted, '& svg': { fontSize: 16 } } } },
      MuiListItemText: {
        styleOverrides: { primary: { fontSize: 13.5, fontWeight: 'inherit' }, secondary: { fontSize: 12, color: t.muted } },
      },
      MuiBreadcrumbs: {
        styleOverrides: { root: { fontSize: 12.5, color: t.muted }, separator: { color: t.faint, marginLeft: 6, marginRight: 6 }, li: { '& a': { color: t.muted } } },
      },

      // ---------------- surfaces ----------------
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: { backgroundImage: 'none', backgroundColor: t.surface },
          outlined: { borderColor: t.line },
          rounded: { borderRadius: 12 },
          elevation0: { border: `1px solid ${t.line}`, boxShadow: panelShadow },
        },
      },
      MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: 12, borderColor: t.line, boxShadow: panelShadow } } },
      MuiCardHeader: {
        defaultProps: { titleTypographyProps: { variant: 'h6' }, subheaderTypographyProps: { variant: 'meta' } },
        styleOverrides: { root: { minHeight: 46, padding: '0 16px', borderBottom: `1px solid ${t.line}` }, action: { margin: 0, alignSelf: 'center' } },
      },
      MuiCardContent: { styleOverrides: { root: { padding: 16, '&:last-child': { paddingBottom: 16 } } } },
      MuiCardActions: { styleOverrides: { root: { padding: '10px 16px', borderTop: `1px solid ${t.line}`, gap: 8 } } },
      MuiDivider: { styleOverrides: { root: { borderColor: t.line } } },
      MuiAccordion: {
        defaultProps: { disableGutters: true, elevation: 0 },
        styleOverrides: { root: { border: `1px solid ${t.line}`, borderRadius: 12, '&:before': { display: 'none' }, '&.Mui-expanded': { margin: 0 } } },
      },
      MuiAccordionSummary: { styleOverrides: { root: { minHeight: 46, padding: '0 16px' }, content: { margin: 0 } } },

      // ---------------- actions ----------------
      MuiButtonBase: { defaultProps: { disableRipple: true } },
      MuiButton: {
        defaultProps: { disableElevation: true, variant: 'outlined', color: 'neutral' },
        styleOverrides: {
          root: ({ ownerState }) => ({
            height: 32, padding: '0 12px', borderRadius: 8, fontWeight: 500, fontSize: 13, minWidth: 0, gap: 7, whiteSpace: 'nowrap',
            '&.Mui-focusVisible': focusRing,
            '& .MuiButton-startIcon, & .MuiButton-endIcon': { margin: 0, '& > *:nth-of-type(1)': { fontSize: 15 } },
            ...(ownerState.size === 'small' && { height: 28, padding: '0 10px', fontSize: 12.5, borderRadius: 7 }),
            ...(ownerState.size === 'large' && { height: 38, padding: '0 16px', fontSize: 13.5 }),
            // outlined = the quiet secondary button (most buttons)
            ...(ownerState.variant === 'outlined' && {
              background: t['surface-2'], border: `1px solid ${t['line-2']}`, color: ownerState.color === 'error' ? t.danger : t.text,
              '&:hover': { background: t['surface-3'], borderColor: t['line-2'] },
            }),
            // contained primary = THE primary action (one per screen): inverted, like the reference
            ...(ownerState.variant === 'contained' && (ownerState.color === 'primary' || ownerState.color === 'neutral') && {
              background: t['btn-primary-bg'], color: t['btn-primary-fg'], fontWeight: 600,
              '&:hover': { background: t['btn-primary-bg'], opacity: 0.92 },
            }),
            ...(ownerState.variant === 'contained' && ownerState.color === 'success' && { fontWeight: 600 }),
            ...(ownerState.variant === 'text' && { color: ownerState.color === 'error' ? t.danger : t['text-2'], '&:hover': { background: t.hover, color: t.text } }),
            '&.Mui-disabled': { opacity: 0.5, color: ownerState.variant === 'contained' ? t['btn-primary-fg'] : t.muted },
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 7, color: t.muted, padding: 6, '&:hover': { background: t.hover, color: t.text },
            '&.Mui-focusVisible': focusRing, '& svg': { fontSize: 18 },
          },
          sizeSmall: { padding: 4, '& svg': { fontSize: 16 } },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: { root: { padding: 2, gap: 2, borderRadius: 9, background: t['surface-2'], border: `1px solid ${t.line}` }, grouped: { border: 0, borderRadius: '7px !important', margin: 0 } },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            height: 26, padding: '0 11px', border: 0, gap: 6, color: t.muted, fontSize: 12.5, fontWeight: 500, textTransform: 'none',
            '&:hover': { background: t.hover, color: t.text },
            '&.Mui-selected, &.Mui-selected:hover': { background: t['surface-3'], color: t.text, boxShadow: `0 0 0 1px ${t['line-2']}` },
          },
        },
      },
      MuiFab: { styleOverrides: { root: { boxShadow: t.overlay } } },

      // ---------------- labels ----------------
      MuiChip: {
        defaultProps: { size: 'small' },
        styleOverrides: {
          root: ({ ownerState }) => {
            const tone = (ownerState.color && ownerState.color !== 'default' ? ownerState.color : null) as Tone | null;
            return {
              height: 22, borderRadius: 6, fontSize: 12, fontWeight: 500, gap: 0,
              ...(ownerState.size === 'small' && { height: 20, fontSize: 11.5 }),
              ...(ownerState.variant === 'outlined' && { borderColor: t['line-2'], color: tone ? soft[tone][0] : t['text-2'], background: 'transparent' }),
              ...(ownerState.variant !== 'outlined' && { background: tone ? soft[tone][1] : t['surface-3'], color: tone ? soft[tone][0] : t['text-2'], fontWeight: 550 }),
              '& .MuiChip-icon': { color: 'inherit', fontSize: 13, marginLeft: 6, marginRight: -2 },
              '& .MuiChip-avatar': { width: 16, height: 16, marginLeft: 4, fontSize: 9 },
              ...(ownerState.clickable && { '&:hover': { background: tone ? alpha(soft[tone][0], 0.18) : t.sel } }),
            };
          },
          label: { paddingLeft: 7, paddingRight: 7 },
          labelSmall: { paddingLeft: 6, paddingRight: 6 },
          deleteIcon: { fontSize: 14, color: t.muted, '&:hover': { color: t.text } },
        },
      },
      MuiBadge: { styleOverrides: { badge: { fontFamily: FONT_MONO, fontSize: 10.5, fontWeight: 600, height: 16, minWidth: 16, padding: '0 4px' }, dot: { height: 6, minWidth: 6 } } },
      MuiAvatar: {
        styleOverrides: {
          root: { width: 26, height: 26, fontSize: 10.5, fontWeight: 600, color: '#fff', background: 'linear-gradient(135deg,#5562E8,#8E6CF0)' },
          rounded: { borderRadius: 8 },
        },
      },
      MuiAvatarGroup: { styleOverrides: { avatar: { borderColor: t.surface, width: 22, height: 22, fontSize: 9 } } },
      MuiTooltip: {
        defaultProps: { arrow: false, enterDelay: 300 },
        styleOverrides: { tooltip: { background: t['surface-3'], color: t.text, border: `1px solid ${t['line-2']}`, fontSize: 12, fontWeight: 500, borderRadius: 7, padding: '5px 8px', boxShadow: t.overlay } },
      },

      // ---------------- feedback ----------------
      MuiAlert: {
        defaultProps: { variant: 'standard' },
        styleOverrides: {
          root: ({ ownerState }) => {
            const map = { success: 'success', warning: 'warning', error: 'error', info: 'primary' } as const;
            const [fg, bg] = soft[map[ownerState.severity ?? 'info']];
            return {
              alignItems: 'center', borderRadius: 10, padding: '6px 14px', fontSize: 13, color: t.text,
              border: `1px solid ${t.line}`,
              background: `linear-gradient(90deg, ${bg}, transparent 60%), ${t.surface}`,
              '& .MuiAlert-icon': { color: fg, padding: 0, marginRight: 10, fontSize: 18, opacity: 1 },
              '& .MuiAlert-message': { padding: '4px 0' },
              '& .MuiAlert-action': { paddingTop: 0, marginRight: -4 },
              ...(ownerState.variant === 'filled' && { background: t.surface, border: `1px solid ${t['line-2']}`, boxShadow: t.overlay }),
            };
          },
        },
      },
      MuiAlertTitle: { styleOverrides: { root: { fontSize: 13.5, fontWeight: 600, marginBottom: 2, marginTop: 0 } } },
      MuiLinearProgress: {
        styleOverrides: {
          root: { height: 6, borderRadius: 3, background: t['surface-3'] },
          bar: { borderRadius: 3 },
        },
      },
      MuiCircularProgress: { defaultProps: { thickness: 4.5 } },
      MuiSkeleton: { defaultProps: { animation: 'wave' }, styleOverrides: { root: { background: t['surface-3'], borderRadius: 6 } } },
      MuiSnackbarContent: { styleOverrides: { root: { background: t['surface-3'], color: t.text, border: `1px solid ${t['line-2']}`, boxShadow: t.overlay, borderRadius: 10, fontSize: 13 } } },

      // ---------------- navigation ----------------
      MuiTabs: {
        styleOverrides: {
          root: { minHeight: 34, borderBottom: `1px solid ${t.line}` },
          indicator: { height: 1.5, background: t.text },
          flexContainer: { gap: 4 },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: 34, minWidth: 0, padding: '0 10px', fontSize: 13, fontWeight: 500, color: t.muted, gap: 7, textTransform: 'none',
            '&:hover': { color: t.text }, '&.Mui-selected': { color: t.text }, '&.Mui-focusVisible': { background: t.hover },
          },
          iconWrapper: { margin: 0 },
        },
      },
      MuiPagination: { defaultProps: { shape: 'rounded', size: 'small' } },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            minWidth: 28, height: 28, borderRadius: 7, fontFamily: FONT_MONO, fontSize: 12, color: t.muted,
            '&:hover': { background: t.hover, color: t.text },
            '&.Mui-selected, &.Mui-selected:hover': { background: t.sel, color: t.text, boxShadow: `inset 0 0 0 1px ${t['line-2']}` },
          },
        },
      },
      MuiStepIcon: { styleOverrides: { root: { color: t['surface-3'], '&.Mui-active': { color: t.brand }, '&.Mui-completed': { color: t.ok } }, text: { fontFamily: FONT_MONO, fontSize: 11 } } },
      MuiStepLabel: { styleOverrides: { label: { fontSize: 13, '&.Mui-active': { fontWeight: 600 }, '&.Mui-completed': { fontWeight: 500 } } } },
      MuiStepConnector: { styleOverrides: { line: { borderColor: t['line-2'] } } },

      // ---------------- inputs ----------------
      MuiInputBase: {
        styleOverrides: {
          root: { fontSize: 13.5 },
          input: { '&::placeholder': { color: t.faint, opacity: 1 } },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8, background: t.surface, transition: 'box-shadow .12s, border-color .12s',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: t['line-2'] },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: t['line-2'] },
            '&.Mui-focused': { boxShadow: `0 0 0 3px ${alpha(t.brand, 0.18)}` },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: t.brand, borderWidth: 1 },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: t.danger },
          },
          input: { padding: '9px 11px', height: 18 },
          inputSizeSmall: { padding: '7px 10px' },
          multiline: { padding: '11px 13px', lineHeight: 1.55 },
          adornedStart: { paddingLeft: 11 },
        },
      },
      MuiInputAdornment: { styleOverrides: { root: { color: t.muted, '& svg': { fontSize: 16 } } } },
      MuiInputLabel: { styleOverrides: { root: { fontSize: 13, color: t.muted, '&.Mui-focused': { color: t.text } } } },
      MuiFormLabel: { styleOverrides: { root: { fontSize: 12.5, fontWeight: 550, color: t['text-2'] } } },
      MuiFormHelperText: { styleOverrides: { root: { fontSize: 12, marginLeft: 0, marginTop: 6, color: t.muted } } },
      MuiFormControlLabel: { styleOverrides: { label: { fontSize: 13, color: t['text-2'] } } },
      MuiSelect: { defaultProps: { MenuProps: { PaperProps: { elevation: 0 } } }, styleOverrides: { icon: { color: t.muted, fontSize: 18 } } },
      MuiAutocomplete: {
        styleOverrides: {
          paper: { border: `1px solid ${t['line-2']}`, boxShadow: t.overlay, borderRadius: 10, marginTop: 4 },
          listbox: { padding: 6 },
          option: { minHeight: 32, borderRadius: 7, fontSize: 13, '&.Mui-focused': { background: t.hover } },
          tag: { margin: 2 },
        },
      },
      MuiCheckbox: {
        defaultProps: { size: 'small', disableRipple: true },
        styleOverrides: { root: { padding: 4, color: t['line-2'], '&.Mui-checked': { color: t.brand }, '& svg': { fontSize: 18 } } },
      },
      MuiRadio: {
        defaultProps: { size: 'small', disableRipple: true },
        styleOverrides: { root: { padding: 4, color: t['line-2'], '&.Mui-checked': { color: t.brand }, '& svg': { fontSize: 18 } } },
      },
      MuiSwitch: {
        defaultProps: { disableRipple: true },
        styleOverrides: {
          root: { width: 28, height: 16, padding: 0, margin: '0 8px 0 0', overflow: 'visible' },
          switchBase: {
            padding: 2, '&.Mui-checked': { transform: 'translateX(12px)', color: '#fff' },
            '&.Mui-checked + .MuiSwitch-track': { background: t.brand, opacity: 1, borderColor: t.brand },
          },
          thumb: { width: 12, height: 12, boxShadow: 'none', background: 'currentColor' },
          track: { borderRadius: 999, background: t['surface-3'], border: `1px solid ${t['line-2']}`, opacity: 1, boxSizing: 'border-box' },
        },
      },
      MuiSlider: { styleOverrides: { thumb: { width: 14, height: 14, boxShadow: 'none' }, rail: { background: t['surface-3'], opacity: 1 } } },

      // ---------------- overlays ----------------
      MuiPopover: { styleOverrides: { paper: { border: `1px solid ${t['line-2']}`, boxShadow: t.overlay, borderRadius: 10 } } },
      MuiMenu: { styleOverrides: { paper: { border: `1px solid ${t['line-2']}`, boxShadow: t.overlay, borderRadius: 10, minWidth: 180 }, list: { padding: 6 } } },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            minHeight: 32, borderRadius: 7, fontSize: 13, fontWeight: 500, color: t['text-2'], gap: 10, padding: '0 10px',
            '&:hover': { background: t.hover, color: t.text },
            '&.Mui-selected, &.Mui-selected:hover': { background: t.sel, color: t.text },
            '& .MuiListItemIcon-root': { minWidth: 0 },
          },
        },
      },
      MuiBackdrop: { styleOverrides: { root: { background: dark ? 'rgba(5,5,8,.55)' : 'rgba(9,9,11,.22)', backdropFilter: 'blur(2px)' }, invisible: { background: 'transparent', backdropFilter: 'none' } } },
      MuiDialog: {
        styleOverrides: { paper: { borderRadius: 14, border: 0, boxShadow: t.overlay, backgroundImage: 'none' } },
      },
      MuiDialogTitle: { styleOverrides: { root: { fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', padding: '18px 20px 8px' } } },
      MuiDialogContent: { styleOverrides: { root: { padding: '8px 20px 16px' }, dividers: { borderColor: t.line } } },
      MuiDialogActions: { styleOverrides: { root: { padding: '12px 20px', gap: 8, borderTop: `1px solid ${t.line}`, '& > :not(:first-of-type)': { marginLeft: 0 } } } },

      // ---------------- data ----------------
      MuiTableContainer: { styleOverrides: { root: { borderRadius: 12 } } },
      MuiTableCell: {
        styleOverrides: {
          root: { height: 48, padding: '0 14px', borderBottom: `1px solid ${t.line}`, fontSize: 13 },
          head: { height: 36, fontSize: 12, fontWeight: 500, color: t.muted, background: 'transparent' },
          sizeSmall: { height: 40 },
        },
      },
      MuiTableRow: { styleOverrides: { root: { '&:last-child td': { borderBottom: 0 }, '&.MuiTableRow-hover:hover': { background: t.hover }, '&.Mui-selected, &.Mui-selected:hover': { background: alpha(t.brand, 0.06) } } } },
      MuiTablePagination: { styleOverrides: { root: { borderTop: `1px solid ${t.line}`, fontSize: 12.5, color: t.muted }, selectLabel: { fontSize: 12.5 }, displayedRows: { fontFamily: FONT_MONO, fontSize: 12 } } },
    },
  };
}

export function createDsTheme(mode: ThemeMode): Theme {
  return createTheme(dsThemeOptions(mode));
}

/** The signature treatment: gradient hairline edge + soft indigo glow. At most ONE element per screen
 *  (the focus goal, the advisor answer, the decision panel). Use: <Card sx={glowSx}>. */
export const glowSx = (theme: Theme) => ({
  border: '1px solid transparent',
  background: `linear-gradient(160deg, ${theme.palette.ds.heroWash}, transparent 45%) padding-box,
    linear-gradient(${theme.palette.ds.surface}, ${theme.palette.ds.surface}) padding-box,
    linear-gradient(135deg, ${theme.palette.ds.brandLine}, ${theme.palette.ds.line} 35%, ${theme.palette.ds.line} 65%, ${alpha(theme.palette.ds.cyan, 0.35)}) border-box`,
  boxShadow: theme.palette.ds.glow,
});
