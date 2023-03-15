import '../styles/globals.css';

import type { AppProps } from 'next/app';

import Page from '@/components/common/Page';
import ThemeProvider from '@/components/common/ThemeProvider';
import { SessionProvider } from '@/components/common/user/session/SessionContext';

export default function App(props: AppProps) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider>
          <Page {...props}></Page>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
