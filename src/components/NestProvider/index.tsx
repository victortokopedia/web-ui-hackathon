import type { ReactNode } from 'react';
import { CssBaseline, ThemeProvider, Toaster } from '@nest-ui/core';
import '@tokopedia/nest-color/dist/css/nest-color-light.css';
import { Global } from '@emotion/react';
import FontFace from './FontFace';
import nestTokopedia from './theme';

const NestProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <FontFace />

      <Global
        styles={{
          body: { minWidth: 960 },
          '.nest-icon': { display: 'inline-block', verticalAlign: 'middle' },
        }}
      />
      <ThemeProvider theme={nestTokopedia('light')}>
        <CssBaseline />
        <Toaster.Provider>{children}</Toaster.Provider>
      </ThemeProvider>
    </>
  );
};

export default NestProvider;
