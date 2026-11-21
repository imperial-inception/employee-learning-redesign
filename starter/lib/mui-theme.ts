// MUI 5 theme built from the design tokens, so MUI components (and anything built on MUI) look like the redesign:
// same colours, Geist type, hairline borders, 8px controls, 12px panels, no elevation shadows in dark mode.
// Use it for what the design kit doesn't rebuild (data grids, date pickers, autocompletes) and for old screens
// during the migration. New screens use the design components in components/ds.
import { createTheme, type Theme } from '@mui/material/styles';
import { tokens, type ThemeMode } from './tokens.generated';

const SANS = 'Geist, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif';
const MONO = '"Geist Mono", ui-monospace, Consolas, monospace';

export function createDsMuiTheme(mode: ThemeMode): Theme {
  const t = tokens[mode];
  const overlayShadow = 'var(--overlay)'; // CSS can use the token directly where MUI does no colour maths

  return createTheme({
    palette: {
      mode,
      primary: { main: t.brand, contrastText: '#fff' },
      secondary: { main: t['text-2'] },
      success: { main: t.ok },
      warning: { main: t.warn },
      error: { main: t.danger },
      info: { main: t.info },
      background: { default: t.bg, paper: t.surface },
      text: { primary: t.text, secondary: t.muted, disabled: t.faint },
      divider: t.line,
      action: { hover: t.hover, selected: t.sel },
    },
    typography: {
      fontFamily: SANS,
      fontSize: 13.5,
      htmlFontSize: 16,
      button: { textTransform: 'none', fontWeight: 500, fontSize: 13 },
      h1: { fontSize: 26, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h2: { fontSize: 13.5, fontWeight: 600 },
      body1: { fontSize: 13.5, lineHeight: 1.45 },
      body2: { fontSize: 12.5, lineHeight: 1.45 },
      caption: { fontSize: 12, color: t.muted },
      overline: { fontFamily: MONO, fontSize: 11, letterSpacing: '.07em', color: t.faint },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiButtonBase: { defaultProps: { disableRipple: true } },
      MuiButton: {
        defaultProps: { disableElevation: true, variant: 'outlined', color: 'inherit' },
        styleOverrides: {
          root: { height: 32, padding: '0 12px', borderRadius: 8, fontWeight: 500, fontSize: 13, minWidth: 0 },
          outlined: { borderColor: t['line-2'], background: t['surface-2'], color: t.text, '&:hover': { borderColor: t['line-2'], background: t.hover } },
          contained: { background: t['btn-primary-bg'], color: t['btn-primary-fg'], fontWeight: 600, '&:hover': { background: t['btn-primary-bg'] } },
          text: { color: t['text-2'] },
          sizeSmall: { height: 28, padding: '0 10px', fontSize: 12.5, borderRadius: 7 },
          sizeLarge: { height: 38, padding: '0 16px', fontSize: 13.5 },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none', border: `1px solid ${t.line}` },
          rounded: { borderRadius: 12 },
          elevation: mode === 'dark' ? { boxShadow: 'none' } : { boxShadow: '0 1px 2px rgba(9,9,11,.04), 0 2px 6px -2px rgba(9,9,11,.04)' },
        },
      },
      MuiDialog: { styleOverrides: { paper: { borderRadius: 14, border: 0, boxShadow: overlayShadow } } },
      MuiBackdrop: { styleOverrides: { root: { background: mode === 'dark' ? 'rgba(5,5,8,.55)' : 'rgba(9,9,11,.25)' } } },
      MuiPopover: { styleOverrides: { paper: { borderRadius: 10, border: 0, boxShadow: overlayShadow } } },
      MuiMenu: { styleOverrides: { list: { padding: 6 } } },
      MuiMenuItem: { styleOverrides: { root: { minHeight: 34, borderRadius: 8, fontSize: 13, fontWeight: 500, color: t['text-2'], '&.Mui-selected': { background: t.sel, color: t.text } } } },
      MuiTooltip: { styleOverrides: { tooltip: { background: t['surface-3'], color: t.text, border: `1px solid ${t['line-2']}`, fontSize: 12, borderRadius: 7 } } },
      MuiTableCell: {
        styleOverrides: {
          root: { height: 48, padding: '0 14px', borderBottom: `1px solid ${t.line}`, fontSize: 13 },
          head: { height: 36, fontSize: 12, fontWeight: 500, color: t.muted },
        },
      },
      MuiChip: { styleOverrides: { root: { height: 22, borderRadius: 6, fontSize: 12, fontWeight: 500 }, outlined: { borderColor: t['line-2'], color: t['text-2'] } } },
      MuiTabs: { styleOverrides: { root: { minHeight: 34, borderBottom: `1px solid ${t.line}` }, indicator: { height: 1.5, background: t.text } } },
      MuiTab: { styleOverrides: { root: { minHeight: 34, padding: '0 10px', minWidth: 0, fontSize: 13, fontWeight: 500, color: t.muted, '&.Mui-selected': { color: t.text } } } },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 8, background: t.surface, fontSize: 13.5, '& fieldset': { borderColor: t['line-2'] }, '&.Mui-focused fieldset': { borderColor: t.brand, borderWidth: 1 } },
          input: { height: 36, padding: '0 11px', boxSizing: 'border-box' },
        },
      },
      MuiCheckbox: { defaultProps: { size: 'small' } },
      MuiSwitch: { defaultProps: { size: 'small' } },
      MuiDivider: { styleOverrides: { root: { borderColor: t.line } } },
      MuiLinearProgress: { styleOverrides: { root: { height: 6, borderRadius: 3, background: t['surface-3'] }, bar: { borderRadius: 3 } } },
    },
  });
}
