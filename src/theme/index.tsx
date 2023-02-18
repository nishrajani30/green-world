// material
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

export const PRIMARY_COLOR = '#00BFA6';

// ----------------------------------------------------------------------

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: {
        mode: 'dark',
        primary: {
          main: '#00BFA6',
          light: '#5EBFB5FF',
          dark: '#026153FF',
        },
      },
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
