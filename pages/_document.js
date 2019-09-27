// https://nextjs.org/docs/#custom-document
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="manifest" href="/static/pwa/manifest.json" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@dfds-frontend/fonts@0.0.4/main/font.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          />
        </Head>
        <body>
          <Main />
          <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          try {
          
            
          } catch(ex){console.warn(ex+'')}
          `
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
