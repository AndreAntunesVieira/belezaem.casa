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
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h4 {
    margin-top: 0;
    margin-bottom: 8px;
  }
  h1 {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #999;
    width: 100%;
    padding-bottom: 8px;
    > img {
      height: 68px;
      margin-right: 16px;
    }
  }
  h3 {
    margin: 0 0 16px 0;
    padding-left: 8px;
  }
`
