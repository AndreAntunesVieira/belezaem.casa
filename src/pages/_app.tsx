import React, { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
    }
    const loadFonts = async (timeout, ...families) => {
      // @ts-ignore
      if (typeof WebFont === 'undefined') return delay(timeout).then(() => loadFonts(timeout, ...families))
      // @ts-ignore
      return new Promise(active => WebFont.load({ google: { families }, active }))
    }
    loadFonts(100, 'Gotham:300,400,700,900', 'Montserrat:300,400,700,900')
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beleza em casa</title>
        <meta name="author" content="Beleza em casa" />
        <meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.webp" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.webp" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.webp" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.webp" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.webp" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async defer />
        <meta property="og:url" content="https://belezaem.casa/" />
        <meta property="og:site_name" content="Beleza em casa" />
        <meta property="og:title" content="Bem-vindo(a) a Beleza em casa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/fotos/w65xrjq.webp" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Beleza em casa" />
        <meta name="twitter:description" content="Bem-vindo(a) a Beleza em casa" />
        <meta name="twitter:image" content="/fotos/w65xrjq.webp" />
        <meta name="twitter:image:alt" content="Beleza em casa" />
        <meta name="theme-color" content="#7E54C6" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
