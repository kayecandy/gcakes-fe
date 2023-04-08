import '../styles/globals.css';

import type { AppProps } from 'next/app';

import Page from '@/components/common/Page';
import ThemeProvider from '@/components/common/ThemeProvider';
import { SessionProvider } from '@/components/common/user/session/SessionContext';
import Head from 'next/head';

export default function App(props: AppProps) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider>
        <ThemeProvider>
          <Page {...props}></Page>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
