import '../styles/globals.css';

import type { AppProps } from 'next/app';

import Page from '@/components/page/Page';
import ThemeProvider from '@/components/page/ThemeProvider';

export default function App(props: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Page {...props}></Page>
      </ThemeProvider>
    </>
  );
}
