import React from 'react'
import App from 'next/app'
import { Store } from 'laco'

import GlobalStyles from '~/components/GlobalStyles'

// https://www.npmjs.com/package/laco-react

if (process.browser) { 
 // let map = L.map('mapid')
}

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <GlobalStyles />
                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp
