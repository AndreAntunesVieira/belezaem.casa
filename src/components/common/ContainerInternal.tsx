import React from 'react'
import Head from 'next/head'

const ContainerInternal = ({ children }) => (
  <div className="container-internal">
    <Head>
      <link rel="stylesheet" href="/internal.css" />
    </Head>
    <h1>
      <img src="/logo/icon.png" alt="logo beleza em casa" /> Agenda
    </h1>
    <hr />
    {children}
  </div>
)

export default ContainerInternal
