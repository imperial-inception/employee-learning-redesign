// Order matters: globals (layer order + Tailwind) → ds-reset (undo host resets inside [data-ds]) → ds (the kit)
// → ds-additions. Screen CSS modules load after these, exactly like page styles after styles.css in the mockups.
import '@/styles/globals.css';
import '@/styles/ds-reset.css';
import '@/styles/ds.css';
import '@/styles/ds-additions.css';

import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { DsRoot } from '@/components/ds';
import { createAppTheme } from '@/mui/theme';
import { createDsTheme } from '@/mui/theme/linear';
import { useThemeHotkey, useThemeMode } from '@/lib/theme';

export default function App(props: AppProps) {
  const { Component, pageProps, router } = props;
  const mode = useThemeMode();
  // /mui/* = the re-skin of the real app: its own screens in plain MUI, polished by the brand theme (no kit CSS).
  // Everything else = the design kit, with its own black/indigo MUI theme.
  const reskin = router.pathname.startsWith('/mui');
  const muiTheme = useMemo(() => (reskin ? createAppTheme(mode) : createDsTheme(mode)), [mode, reskin]);
  useThemeHotkey();

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {reskin ? <Component {...pageProps} /> : <DsRoot><Component {...pageProps} /></DsRoot>}
      </ThemeProvider>
    </AppCacheProvider>
  );
}
