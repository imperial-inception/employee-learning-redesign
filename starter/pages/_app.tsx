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
import { createDsMuiTheme } from '@/lib/mui-theme';
import { useThemeHotkey, useThemeMode } from '@/lib/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const mode = useThemeMode();
  const muiTheme = useMemo(() => createDsMuiTheme(mode), [mode]);
  useThemeHotkey();

  return (
    <AppCacheProvider {...props}>
      {/* MUI is themed from the same tokens, so any MUI component (data grid, date picker, an old screen)
          sits comfortably next to the redesign. CssBaseline is on to mirror a typical MUI app. */}
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <DsRoot>
          <Component {...pageProps} />
        </DsRoot>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
