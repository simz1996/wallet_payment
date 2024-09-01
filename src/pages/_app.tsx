// src/pages/_app.tsx
import { AppType } from 'next/app';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <trpc.Provider>
      <Component {...pageProps} />
    </trpc.Provider>
  );
};

export default MyApp;
