// The re-skin of the real app: a POLISH of the current look, not a rebrand. Same brand blue, same navy surfaces,
// same comfortable density and layout; cleaner components: consistent radii and heights, hairline borders instead
// of heavy gradients, clearer type hierarchy, readable secondary text, tinted status chips, calm alerts, a light
// mode that feels finished.
//
//   <ThemeProvider theme={createAppTheme(mode)}>                       mode from lib/theme useThemeMode()
//   createAppTheme(mode, { primary: '#…', background: '#…' })          plug in the company's exact brand values
//   createTheme(deepmerge(companyThemeOptions, appThemeOptions(mode)))  keep the company theme, add the polish
import { alpha, createTheme, type Theme, type ThemeOptions } from '@mui/material/styles';
import type {} from './augment';
import type { ThemeMode } from '@/lib/tokens.generated';
import { brandDefaults, type BrandPalette } from './brand';

export { brandDefaults, type BrandPalette } from './brand';

type Tone = 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary' | 'neutral';

export function appThemeOptions(mode: ThemeMode, brand?: Partial<BrandPalette>): ThemeOptions {
  const b: BrandPalette = { ...brandDefaults[mode], ...brand };
  const dark = mode === 'dark';
  const soft = (c: string) => alpha(c, dark ? 0.16 : 0.1);
  const tones: Record<Tone, [string, string]> = {
    success: [b.success, soft(b.success)],
    warning: [b.warning, soft(b.warning)],
    error: [b.error, soft(b.error)],
    info: [b.info, soft(b.info)],
    primary: [b.accent, alpha(b.primary, dark ? 0.22 : 0.1)],
    secondary: [b.orange, soft(b.orange)],
    neutral: [b.textSecondary, b.raised],
  };
  const cardShadow = dark ? '0 1px 0 rgba(255,255,255,.03) inset, 0 8px 24px -12px rgba(0,0,0,.45)' : '0 1px 2px rgba(16,40,90,.05), 0 4px 14px -6px rgba(16,40,90,.08)';
  const overlay = dark ? `0 24px 60px rgba(0,0,0,.5), 0 0 0 1px ${b.borderStrong}` : `0 20px 50px rgba(16,40,90,.16), 0 0 0 1px ${b.borderStrong}`;
  const focusRing = { outline: `2px solid ${b.accent}`, outlineOffset: 2 };

  return {
    palette: {
      mode,
      primary: { main: b.primary, dark: b.primaryDark, light: b.accent, contrastText: '#fff' },
      secondary: { main: b.orange, contrastText: '#fff' },
      success: { main: b.success, contrastText: '#fff' },
      warning: { main: b.warning, contrastText: '#111' },
      error: { main: b.error, contrastText: '#fff' },
      info: { main: b.info, contrastText: '#fff' },
      neutral: { main: b.textSecondary, light: b.textDisabled, dark: b.text, contrastText: b.background },
      background: { default: b.background, paper: b.paper },
      text: { primary: b.text, secondary: b.textSecondary, disabled: b.textDisabled },
      divider: b.border,
      action: { hover: alpha(b.accent, dark ? 0.07 : 0.05), selected: alpha(b.primary, dark ? 0.2 : 0.09), focus: alpha(b.primary, 0.2), active: b.textSecondary, disabled: b.textDisabled, disabledBackground: b.raised },
      // ds.* keys keep the shared components (labels, icons) working with this theme too
      ds: {
        panel: b.drawer, surface: b.paper, surface2: b.inset, surface3: b.raised, hover: alpha(b.accent, dark ? 0.07 : 0.05), sel: alpha(b.primary, dark ? 0.2 : 0.09),
        line: b.border, line2: b.borderStrong, text2: dark ? '#D3DDF2' : '#2B3953', faint: b.textDisabled, brand2: b.accent, brandBg: alpha(b.primary, dark ? 0.22 : 0.1),
        brandLine: alpha(b.accent, 0.45), okBg: soft(b.success), warnBg: soft(b.warning), orange: b.orange, orangeBg: soft(b.orange), dangerBg: soft(b.error), infoBg: soft(b.info),
        tFormal: b.accent, tRel: b.success, tExp: b.orange, cyan: b.info, glow: dark ? `0 0 0 1px ${alpha(b.accent, 0.18)}, 0 18px 50px -20px ${alpha(b.primary, 0.6)}` : `0 0 0 1px ${alpha(b.primary, 0.12)}, 0 16px 40px -22px ${alpha(b.primary, 0.45)}`,
        overlay, heroWash: alpha(b.primary, dark ? 0.16 : 0.06),
      },
    },
    shape: { borderRadius: 10 },
    spacing: 4,
    typography: {
      fontFamily: b.fontFamily,
      fontSize: 14,
      h1: { fontFamily: b.headingFontFamily, fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
      h2: { fontFamily: b.headingFontFamily, fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h3: { fontFamily: b.headingFontFamily, fontSize: 21, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25 },
      h4: { fontFamily: b.headingFontFamily, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }, // page titles ("Your learning")
      h5: { fontFamily: b.headingFontFamily, fontSize: 18, fontWeight: 650, letterSpacing: '-0.01em', lineHeight: 1.3 },
      h6: { fontFamily: b.headingFontFamily, fontSize: 15, fontWeight: 650, lineHeight: 1.35 },                          // card titles
      subtitle1: { fontSize: 14.5, color: b.textSecondary, lineHeight: 1.5 },
      subtitle2: { fontSize: 13.5, fontWeight: 600 },
      body1: { fontSize: 14, lineHeight: 1.5 },
      body2: { fontSize: 13, lineHeight: 1.5 },
      caption: { fontSize: 12.5, lineHeight: 1.45, color: b.textSecondary },
      overline: { fontSize: 11.5, fontWeight: 700, letterSpacing: '.09em', lineHeight: 1.4, color: b.accent, textTransform: 'uppercase' },
      button: { fontSize: 13.5, fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
      mono: { fontFamily: '"Cascadia Mono", Consolas, ui-monospace, monospace', fontSize: 12.5, fontVariantNumeric: 'tabular-nums' },
      label: { fontSize: 13, fontWeight: 600, color: b.text },
      meta: { fontSize: 12.5, color: b.textSecondary, lineHeight: 1.45 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { WebkitFontSmoothing: 'antialiased', colorScheme: mode, backgroundColor: b.background },
          '::selection': { background: alpha(b.primary, 0.35) },
          '*': { scrollbarWidth: 'thin', scrollbarColor: `${b.borderStrong} transparent` },
        },
      },
      MuiTypography: { defaultProps: { variantMapping: { mono: 'span', label: 'span', meta: 'span', h4: 'h1', h6: 'h2' } } },
      MuiLink: { defaultProps: { underline: 'hover' }, styleOverrides: { root: { color: b.accent, fontWeight: 600 } } },

      // ---------- frame ----------
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'primary' },
        styleOverrides: {
          root: {
            background: `linear-gradient(90deg, ${b.primaryDark} 0%, ${b.primary} 70%, ${alpha(b.primary, 0.92)} 100%)`,
            color: '#fff', borderBottom: `1px solid ${alpha('#ffffff', 0.12)}`, backgroundImage: undefined,
          },
        },
      },
      MuiToolbar: { styleOverrides: { root: { minHeight: 56, '@media (min-width:600px)': { minHeight: 56, paddingLeft: 12, paddingRight: 16 } } } },
      MuiDrawer: {
        styleOverrides: {
          // temporary drawers (details panels) open above the fixed top bar
          root: ({ ownerState, theme }) => (ownerState.variant === 'temporary' ? { zIndex: theme.zIndex.modal } : {}),
          paper: { background: b.drawer, borderColor: b.border, backgroundImage: 'none' },
          paperAnchorRight: { background: b.paper, borderLeft: `1px solid ${b.borderStrong}`, boxShadow: overlay },
        },
      },
      MuiList: { styleOverrides: { root: { padding: 0 } } },
      MuiListSubheader: {
        styleOverrides: { root: { background: 'transparent', fontSize: 12, fontWeight: 700, letterSpacing: '.02em', lineHeight: '20px', color: b.textSecondary, padding: '16px 12px 6px' } },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            minHeight: 38, padding: '0 12px', borderRadius: 8, color: dark ? '#D3DDF2' : '#2B3953', gap: 12, fontWeight: 500,
            '&:hover': { background: alpha(b.accent, dark ? 0.08 : 0.06), color: b.text },
            '&.Mui-selected': {
              background: alpha(b.primary, dark ? 0.28 : 0.1), color: dark ? '#fff' : b.primary, fontWeight: 600,
              boxShadow: `inset 3px 0 0 ${b.accent}`,
              '& .MuiListItemIcon-root': { color: dark ? '#fff' : b.primary },
            },
            '&.Mui-selected:hover': { background: alpha(b.primary, dark ? 0.32 : 0.13) },
            '&.Mui-focusVisible': focusRing,
          },
        },
      },
      MuiListItemIcon: { styleOverrides: { root: { minWidth: 0, color: b.textSecondary, '& svg': { fontSize: 18 } } } },
      MuiListItemText: { styleOverrides: { primary: { fontSize: 14, fontWeight: 'inherit' }, secondary: { fontSize: 12.5, color: b.textSecondary } } },
      MuiBreadcrumbs: { styleOverrides: { root: { fontSize: 13, color: b.textSecondary }, separator: { color: b.textDisabled, marginLeft: 6, marginRight: 6 }, li: { '& a': { color: b.textSecondary } } } },

      // ---------- surfaces ----------
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: { backgroundImage: 'none', backgroundColor: b.paper },
          outlined: { borderColor: b.border },
          rounded: { borderRadius: 12 },
          elevation0: { border: `1px solid ${b.border}`, boxShadow: cardShadow },
        },
      },
      MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: 12, borderColor: b.border, boxShadow: cardShadow } } },
      MuiCardHeader: {
        defaultProps: { titleTypographyProps: { variant: 'h6' }, subheaderTypographyProps: { variant: 'meta' } },
        styleOverrides: { root: { padding: '16px 20px 12px' }, action: { margin: 0, alignSelf: 'center' } },
      },
      MuiCardContent: { styleOverrides: { root: { padding: '16px 20px', '&:last-child': { paddingBottom: 20 } } } },
      MuiCardActions: { styleOverrides: { root: { padding: '12px 20px', borderTop: `1px solid ${b.border}`, gap: 8 } } },
      MuiDivider: { styleOverrides: { root: { borderColor: b.border } } },
      MuiAccordion: {
        defaultProps: { disableGutters: true, elevation: 0 },
        styleOverrides: { root: { border: `1px solid ${b.border}`, borderRadius: 12, '&:before': { display: 'none' }, '&.Mui-expanded': { margin: 0 } } },
      },

      // ---------- actions ----------
      MuiButtonBase: { defaultProps: { disableRipple: true } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: ({ ownerState }) => ({
            height: 36, padding: '0 14px', borderRadius: 8, minWidth: 0, whiteSpace: 'nowrap', gap: 2,
            '&.Mui-focusVisible': focusRing,
            '& .MuiButton-startIcon, & .MuiButton-endIcon': { margin: 0, '& > *:nth-of-type(1)': { fontSize: 16 } },
            ...(ownerState.size === 'small' && { height: 30, padding: '0 11px', fontSize: 13 }),
            ...(ownerState.size === 'large' && { height: 42, padding: '0 18px', fontSize: 14.5 }),
            ...(ownerState.variant === 'contained' && {
              background: ownerState.color === 'error' ? b.error : ownerState.color === 'success' ? b.success : b.primary, color: '#fff',
              boxShadow: `0 1px 0 ${alpha('#ffffff', 0.18)} inset, 0 6px 16px -8px ${alpha(b.primary, 0.8)}`,
              '&:hover': { background: ownerState.color === 'error' ? b.error : ownerState.color === 'success' ? b.success : b.primaryDark, boxShadow: 'none' },
            }),
            ...(ownerState.variant === 'outlined' && {
              borderColor: b.borderStrong, color: ownerState.color === 'error' ? b.error : b.text, background: dark ? alpha('#ffffff', 0.02) : '#fff',
              '&:hover': { borderColor: alpha(b.accent, 0.55), background: alpha(b.accent, dark ? 0.08 : 0.05) },
            }),
            ...(ownerState.variant === 'text' && {
              color: ownerState.color === 'error' ? b.error : b.accent, padding: '0 8px',
              '&:hover': { background: alpha(b.accent, dark ? 0.1 : 0.06) },
            }),
            '&.Mui-disabled': ownerState.variant === 'contained'
              ? { background: alpha(b.primary, dark ? 0.35 : 0.3), color: alpha('#ffffff', 0.75), boxShadow: 'none' } // still reads as the primary action
              : { opacity: 0.5 },
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { borderRadius: 8, color: b.textSecondary, padding: 7, '&:hover': { background: alpha(b.accent, dark ? 0.1 : 0.07), color: b.text }, '&.Mui-focusVisible': focusRing, '& svg': { fontSize: 19 } },
          sizeSmall: { padding: 5, '& svg': { fontSize: 17 } },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: { root: { padding: 3, gap: 3, borderRadius: 10, background: b.inset, border: `1px solid ${b.border}` }, grouped: { border: 0, borderRadius: '7px !important', margin: 0 } },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            height: 30, padding: '0 12px', border: 0, gap: 6, color: b.textSecondary, fontSize: 13, fontWeight: 600, textTransform: 'none',
            '&:hover': { background: alpha(b.accent, 0.08), color: b.text },
            '&.Mui-selected, &.Mui-selected:hover': { background: b.paper, color: b.text, boxShadow: `0 0 0 1px ${b.borderStrong}, 0 2px 6px -2px rgba(0,0,0,.25)` },
          },
        },
      },

      // ---------- labels ----------
      MuiChip: {
        defaultProps: { size: 'small' },
        styleOverrides: {
          root: ({ ownerState }) => {
            const tone = (ownerState.color && ownerState.color !== 'default' ? ownerState.color : null) as Tone | null;
            return {
              height: 24, borderRadius: 6, fontSize: 12.5, fontWeight: 600,
              ...(ownerState.size === 'small' && { height: 22, fontSize: 12 }),
              ...(ownerState.variant === 'outlined' && { borderColor: b.borderStrong, color: tone ? tones[tone][0] : b.textSecondary, background: 'transparent', fontWeight: 500 }),
              ...(ownerState.variant !== 'outlined' && { background: tone ? tones[tone][1] : b.raised, color: tone ? tones[tone][0] : b.textSecondary }),
              '& .MuiChip-icon': { color: 'inherit', fontSize: 14, marginLeft: 6, marginRight: -2 },
              ...(ownerState.clickable && { '&:hover': { background: tone ? alpha(tones[tone][0], 0.2) : alpha(b.accent, 0.12) } }),
            };
          },
          label: { paddingLeft: 8, paddingRight: 8 },
          labelSmall: { paddingLeft: 7, paddingRight: 7 },
        },
      },
      MuiBadge: {
        styleOverrides: {
          badge: { fontSize: 10.5, fontWeight: 700, height: 17, minWidth: 17, padding: '0 4px' },
          dot: { height: 8, minWidth: 8, width: 8, padding: 0, borderRadius: 4, boxShadow: `0 0 0 2px ${b.primary}` },
        },
      },
      MuiAvatar: { styleOverrides: { root: { width: 32, height: 32, fontSize: 12.5, fontWeight: 700, color: '#fff', background: `linear-gradient(135deg, ${b.primary}, ${b.accent})` }, rounded: { borderRadius: 10 } } },
      MuiTooltip: { defaultProps: { enterDelay: 300 }, styleOverrides: { tooltip: { background: dark ? '#1E355F' : '#0F1B33', color: '#fff', fontSize: 12.5, fontWeight: 500, borderRadius: 7, padding: '6px 9px' } } },

      // ---------- feedback ----------
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => {
            const map = { success: 'success', warning: 'warning', error: 'error', info: 'primary' } as const;
            const [fg, bg] = tones[map[ownerState.severity ?? 'info']];
            return {
              alignItems: 'center', borderRadius: 10, padding: '6px 14px', fontSize: 13.5, color: b.text,
              border: `1px solid ${alpha(fg, 0.28)}`, boxShadow: `inset 3px 0 0 ${fg}`,
              background: `linear-gradient(90deg, ${bg}, ${alpha(bg, 0)} 75%), ${b.paper}`,
              '& .MuiAlert-icon': { color: fg, padding: 0, marginRight: 12, fontSize: 19, opacity: 1 },
              '& .MuiAlert-message': { padding: '6px 0' },
              '& .MuiAlert-action': { paddingTop: 0, marginRight: -4 },
            };
          },
        },
      },
      MuiAlertTitle: { styleOverrides: { root: { fontSize: 14, fontWeight: 650, marginBottom: 2, marginTop: 0 } } },
      MuiLinearProgress: { styleOverrides: { root: { height: 8, borderRadius: 4, background: b.raised }, bar: { borderRadius: 4 } } },
      MuiSkeleton: { defaultProps: { animation: 'wave' }, styleOverrides: { root: { background: b.raised, borderRadius: 6 } } },
      MuiSnackbarContent: { styleOverrides: { root: { background: dark ? '#1E355F' : '#0F1B33', color: '#fff', boxShadow: overlay, borderRadius: 10, fontSize: 13.5 } } },

      // ---------- navigation ----------
      MuiTabs: {
        styleOverrides: { root: { minHeight: 44, borderBottom: `1px solid ${b.border}` }, indicator: { height: 3, borderRadius: '3px 3px 0 0', background: b.accent }, flexContainer: { gap: 6 } },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: 44, minWidth: 0, padding: '0 14px', fontSize: 14, fontWeight: 600, color: b.textSecondary, textTransform: 'none', gap: 8,
            '&:hover': { color: b.text }, '&.Mui-selected': { color: dark ? '#fff' : b.primary }, '&.Mui-focusVisible': { background: alpha(b.accent, 0.08) },
          },
          iconWrapper: { margin: 0 },
        },
      },
      MuiPagination: { defaultProps: { shape: 'rounded' } },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            minWidth: 32, height: 32, borderRadius: 8, fontSize: 13, fontWeight: 600, color: b.textSecondary,
            '&.MuiPaginationItem-ellipsis': { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
            '&:hover': { background: alpha(b.accent, 0.08), color: b.text },
            '&.Mui-selected, &.Mui-selected:hover': { background: b.primary, color: '#fff' },
          },
        },
      },
      MuiStepIcon: { styleOverrides: { root: { color: b.raised, '&.Mui-active': { color: b.primary }, '&.Mui-completed': { color: b.success } } } },
      MuiStepConnector: { styleOverrides: { line: { borderColor: b.borderStrong } } },

      // ---------- inputs ----------
      MuiInputBase: { styleOverrides: { root: { fontSize: 14 }, input: { '&::placeholder': { color: b.textDisabled, opacity: 1 } } } },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 9, background: b.inset, transition: 'box-shadow .15s, border-color .15s',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: b.borderStrong },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: alpha(b.accent, 0.5) },
            '&.Mui-focused': { boxShadow: `0 0 0 3px ${alpha(b.primary, 0.25)}` },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: b.accent, borderWidth: 1 },
          },
          input: { padding: '10px 12px', height: 20 },
          inputSizeSmall: { padding: '7px 11px' },
          adornedStart: { paddingLeft: 12 },
        },
      },
      MuiInputAdornment: { styleOverrides: { root: { color: b.textSecondary, '& svg': { fontSize: 18 } } } },
      MuiInputLabel: { styleOverrides: { root: { fontSize: 13.5, color: b.textSecondary, '&.Mui-focused': { color: b.accent } } } },
      MuiFormLabel: { styleOverrides: { root: { fontSize: 13, fontWeight: 600, color: b.text } } },
      MuiFormHelperText: { styleOverrides: { root: { fontSize: 12.5, marginLeft: 0, marginTop: 6, color: b.textSecondary } } },
      MuiFormControlLabel: { styleOverrides: { label: { fontSize: 14, color: b.text } } },
      MuiSelect: { styleOverrides: { icon: { color: b.textSecondary } } },
      MuiCheckbox: { defaultProps: { disableRipple: true }, styleOverrides: { root: { color: b.borderStrong, '&.Mui-checked': { color: b.primary } } } },
      MuiRadio: { defaultProps: { disableRipple: true }, styleOverrides: { root: { color: b.borderStrong, '&.Mui-checked': { color: b.primary } } } },
      MuiSwitch: {
        defaultProps: { disableRipple: true },
        styleOverrides: {
          root: { width: 36, height: 20, padding: 0, margin: '0 10px 0 0', overflow: 'visible' },
          switchBase: { padding: 2, '&.Mui-checked': { transform: 'translateX(16px)', color: '#fff' }, '&.Mui-checked + .MuiSwitch-track': { background: b.primary, opacity: 1, borderColor: b.primary } },
          thumb: { width: 16, height: 16, boxShadow: '0 1px 2px rgba(0,0,0,.3)' },
          track: { borderRadius: 999, background: b.raised, border: `1px solid ${b.borderStrong}`, opacity: 1, boxSizing: 'border-box' },
        },
      },

      // ---------- overlays ----------
      MuiPopover: { styleOverrides: { paper: { boxShadow: overlay, borderRadius: 10 } } },
      MuiMenu: { styleOverrides: { paper: { boxShadow: overlay, borderRadius: 10, minWidth: 190 }, list: { padding: 6 } } },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            minHeight: 36, borderRadius: 7, fontSize: 14, gap: 10, padding: '0 10px', color: b.text,
            '&:hover': { background: alpha(b.accent, 0.08) }, '&.Mui-selected, &.Mui-selected:hover': { background: alpha(b.primary, 0.2) },
          },
        },
      },
      MuiBackdrop: { styleOverrides: { root: { background: dark ? 'rgba(4,10,24,.6)' : 'rgba(15,27,51,.28)', backdropFilter: 'blur(2px)' }, invisible: { background: 'transparent', backdropFilter: 'none' } } },
      MuiDialog: { styleOverrides: { paper: { borderRadius: 14, boxShadow: overlay } } },
      MuiDialogTitle: { styleOverrides: { root: { fontSize: 17, fontWeight: 650, padding: '20px 24px 8px' } } },
      MuiDialogContent: { styleOverrides: { root: { padding: '8px 24px 16px' } } },
      MuiDialogActions: { styleOverrides: { root: { padding: '14px 24px', gap: 8, borderTop: `1px solid ${b.border}`, '& > :not(:first-of-type)': { marginLeft: 0 } } } },

      // ---------- data ----------
      MuiTableCell: {
        styleOverrides: {
          root: { padding: '12px 16px', borderBottom: `1px solid ${b.border}`, fontSize: 13.5 },
          head: { fontSize: 12.5, fontWeight: 700, color: b.textSecondary, background: b.inset },
        },
      },
      MuiTableRow: { styleOverrides: { root: { '&:last-child td': { borderBottom: 0 }, '&.MuiTableRow-hover:hover': { background: alpha(b.accent, 0.05) } } } },
    },
  };
}

export function createAppTheme(mode: ThemeMode, brand?: Partial<BrandPalette>): Theme {
  return createTheme(appThemeOptions(mode, brand));
}

/** A gentle highlight for the ONE most important card on a page (today's "Your focus" card already uses a blue
 *  glow; this keeps the idea, cleaner). Use: <Card sx={heroSx}>. */
export const heroSx = (theme: Theme) => ({
  borderColor: alpha(theme.palette.primary.light, 0.4),
  background: `linear-gradient(135deg, ${theme.palette.ds.heroWash}, transparent 55%), ${theme.palette.background.paper}`,
  boxShadow: theme.palette.ds.glow,
});
