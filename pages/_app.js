import React from 'react';
import App from 'next/app';
import { useStore } from 'laco-react';

import mapRef from '~/mapRef.js';
import store from '~/store.js';
import GlobalStyles from '~/components/GlobalStyles';

if (process.browser) {
  try {
  } catch (ex) {
    console.error(ex.toString());
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <GlobalEffect />
        <Component {...pageProps} />
      </>
    );
  }
}

const GlobalEffect = () => {
  let onFullscreenchange = e => {
    store.set(state => ({ isFullscreen: !!document.fullscreenElement }));
  };

  React.useEffect(() => {
    if (document.body.requestFullscreen) {
      ['', 'webkit', 'moz', 'ms'].forEach(prefix =>
        document.addEventListener(
          prefix + 'fullscreenchange',
          onFullscreenchange,
          false
        )
      );
    }
    store.set(state => ({
      isFullscreenSupported: !!document.body.requestFullscreen,
    }));
  }, []);

  return null;
};

export default MyApp;
