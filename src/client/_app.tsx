import { StrictMode } from 'react';
import { Helmet } from '@tokopedia/skipper/head';
import type { AppComponentType } from '@tokopedia/skipper/app';
import NestProvider from '@/components/NestProvider';

/**
 * @function App
 */
const App: AppComponentType = props => {
  const { children } = props;
  return (
    <StrictMode>
      <Helmet>
        <html lang="id" />
        <title>Tokopedia WebUI</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <NestProvider>{children}</NestProvider>
    </StrictMode>
  );
};

export default App;
