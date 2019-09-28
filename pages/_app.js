import React from 'react';
import App from 'next/app';

import GlobalStyles from '~/components/GlobalStyles';
import store from '~/store.js';
// https://www.npmjs.com/package/laco-react

if (process.browser) {
  // let map = L.map('mapid')
  try {
  } catch (ex) {}
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
    ['', 'webkit', 'moz', 'ms'].forEach(prefix =>
      document.addEventListener(
        prefix + 'fullscreenchange',
        onFullscreenchange,
        false
      )
    );
  }, []);

  return null;
};

export default MyApp;
