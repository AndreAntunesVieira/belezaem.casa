import React, { useEffect } from 'react'
import Head from 'next/head'

declare global {
  interface Window {
    dataLayer: any
    WebFont: any
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
    }
    const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))
    const loadFonts = async (timeout, ...families) => {
      if (typeof window.WebFont === 'undefined') return delay(timeout).then(() => loadFonts(timeout, ...families))
      return new Promise(active => window.WebFont.load({ google: { families }, active }))
    }
    loadFonts(100, 'Overpass:700').then(() => window.document.querySelector('body').classList.add('LoadedFonts'))

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-4Z910N1CJ8')
  }, [])
  return (
    <>
      <Head>
        <title>Beleza em casa</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="author" content="Beleza em casa" />
        <meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link rel="stylesheet" type="text/css" href="/style2.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async defer />
        <meta property="og:url" content="https://belezaem.casa/" />
        <meta property="og:site_name" content="Beleza em casa" />
        <meta property="og:title" content="Bem-vindo(a) a Beleza em casa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/fotos/w65xrjq.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Beleza em casa" />
        <meta name="twitter:description" content="Bem-vindo(a) a Beleza em casa" />
        <meta name="twitter:image" content="/fotos/w65xrjq.png" />
        <meta name="twitter:image:alt" content="Beleza em casa" />
        <meta name="theme-color" content="#7E54C6" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4Z910N1CJ8" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
