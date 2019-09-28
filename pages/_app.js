import React from 'react';
import App from 'next/app';

import GlobalStyles from '~/components/GlobalStyles';
import store from '~/store.js';
// https://www.npmjs.com/package/laco-react

if (process.browser) {
  // let map = L.map('mapid')
  try {
    // var el = document.getElementById('__next');
    // use necessary prefixed versions
    // el.webkitRequestFullscreen();
    // el.mozRequestFullScreen();
    // el.msRequestFullscreen();
    // finally the standard version
    // el.requestFullscreen();
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
  React.useEffect(() => {}, []);

  return null;
};

export default MyApp;
