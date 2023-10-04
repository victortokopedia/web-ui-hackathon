import type { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@nest-ui/core';
import '@tokopedia/nest-color/dist/css/nest-color-light.css';
import '@nest-ui/icon/dist/css/nest-icon.css';
import FontFace from './FontFace';
import nestTokopedia from './theme';

const NestProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <FontFace />
      <ThemeProvider theme={nestTokopedia('light')}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default NestProvider;
