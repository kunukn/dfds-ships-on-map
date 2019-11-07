// https://nextjs.org/docs/#custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="dfds ships on map" />
          <meta name="keywords" content="dfds ships map" />
          <meta name="theme-color" content="#002B45" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon.ico"
          />
          <link rel="apple-touch-icon" href="/pwa/logo192.png" />
          <link rel="manifest" href="/pwa/site.webmanifest" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-149675936-1"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
          try {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-149675936-1');
          } catch(ex){console.warn(ex+'')}
          `,
            }}
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@dfds-frontend/fonts@0.0.4/main/font.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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
          `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
