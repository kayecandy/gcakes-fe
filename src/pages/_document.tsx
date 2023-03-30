import getConfig from 'next/config';
import { Html, Head, Main, NextScript } from 'next/document'

const { publicRuntimeConfig } = getConfig();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="//web.webformscr.com/apps/fc3/build/loader.js" async sp-form-id={publicRuntimeConfig.SENDPULSE_SUBSCRIPTION_FORM_ID}></script>
      </body>
    </Html>
  );
}
