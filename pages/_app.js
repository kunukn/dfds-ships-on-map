import App from 'next/app';

import getShipsFromApi from '~/api-layer/getShipsFromApi';
import store from '~/store.js';
import GlobalStyles from '~/components/GlobalStyles';
import LeafletStyles from '~/components/LeafletStyles';
import getQueryParams from '~/utils/getQueryParams';

if (process.browser) {
  try {
    (async () => {
      // Don't use the store here, doesn't update in the render.
      // use that in useEffect.
    })();
  } catch (ex) {
    console.error(ex.toString());
  }
}

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <LeafletStyles />
        <GlobalEffect />
        <Component {...pageProps} />
      </>
    );
  }
}

const GlobalEffect = () => {
  let onFullscreenchange = e => {
    store.set(state => ({
      isFullscreen: !!document.fullscreenElement,
    }));
  };

  React.useEffect(() => {
    let params = getQueryParams();
    if (params.settings) {
      store.set(state => ({
        isSettingsOpen: true,
      }));
    }
    if (params.leftsidebar) {
      store.set(state => ({
        isLeftSidebarOpen: true,
      }));
    }

    let isFullscreenSupported = !!document.fullscreenEnabled;

    if (isFullscreenSupported && 'requestFullscreen' in document.body) {
      document.addEventListener('fullscreenchange', onFullscreenchange, false);
    }

    store.set(state => ({
      isFullscreenSupported,
    }));
  }, []);

  return null;
};

export default MyApp;
