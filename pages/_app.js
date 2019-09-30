import React from "react";
import App from "next/app";
import { useStore } from "laco-react";

import store from "~/store.js";
import GlobalStyles from "~/components/GlobalStyles";

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
    console.log("onFullscreenchange");
    store.set(state => ({
      isFullscreen: !!(
        document.fullscreenElement || document.webkitFullscreenElement
      )
    }));
  };

  React.useEffect(() => {
    let isFullscreenSupported = !!(
      document.body.requestFullscreen || document.body.webkitRequestFullScreen
    );

    let fullscreenRequestMethod;
    let fullscreenExitMethod;
    if ("requestFullscreen" in document.body) {
      fullscreenRequestMethod = "requestFullscreen";
      fullscreenExitMethod = "exitFullscreen";
    }
    if ("webkitRequestFullscreen" in document.body) {
      fullscreenRequestMethod = "webkitRequestFullScreen";
      fullscreenExitMethod = "webkitExitFullScreen";
    }

    if (isFullscreenSupported) {
      ["", "webkit"].forEach(prefix =>
        document.addEventListener(
          prefix + "fullscreenchange",
          onFullscreenchange,
          false
        )
      );
    }

    store.set(state => ({
      isFullscreenSupported,
      fullscreenRequestMethod,
      fullscreenExitMethod
    }));
  }, []);

  return null;
};

export default MyApp;
