// https://nextjs.org/docs/#custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta name="description" content="DFDS news" />
                    <meta name="keywords" content="DFDS news" />
                    <meta name="robots" content="noindex, nofollow" />
                    <link rel="stylesheet" href="https://unpkg.com/@dfds-frontend/fonts@0.0.4/main/font.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
