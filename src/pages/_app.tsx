import React from 'react'
import './style.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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
        <link rel="apple-touch-icon" sizes="57x57" href="/public/favicon-57.webp" />
        <link rel="apple-touch-icon" sizes="60x60" href="/public/favicon-60.webp" />
        <link rel="apple-touch-icon" sizes="72x72" href="/public/favicon-72.webp" />
        <link rel="apple-touch-icon" sizes="114x114" href="/public/favicon-114.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="/public/favicon-120.webp" />
        <link rel="apple-touch-icon" sizes="144x144" href="/public/favicon-144.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="/public/favicon-152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon-180.webp" />
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
