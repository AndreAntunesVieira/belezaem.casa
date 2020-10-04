import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SignedSchedule from '../components/SignedSchedule'
import UnsignedSchedule from '../components/UnsignedSchedule'

export default function Agenda() {
  const [user, setUser] = useState(null)
  const [fetched, setFetched] = useState(false)

  const onSignIn = () => {
    const sessionUser = sessionStorage.getItem('user')
    if (sessionUser) setUser(JSON.parse(sessionUser))
    setFetched(true)
  }

  const onSignOut = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
    setUser(null)
    setFetched(true)
  }

  useEffect(() => {
    onSignIn()
  }, [])

  return (
    <div className="container-internal">
      <h1>
        <img src="/logo/icon.png" alt="logo beleza em casa" /> Agenda
      </h1>
      <hr />
      {fetched && (
        <>
          {user && <SignedSchedule onSignOut={onSignOut} user={user}/>}
          {!user && <UnsignedSchedule onSignIn={onSignIn} />}
        </>
      )}
    </div>
  )
}
