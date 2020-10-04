import React, { useEffect, useState } from 'react'
import SignedSchedule from '../components/SignedSchedule'
import UnsignedSchedule from '../components/UnsignedSchedule'
import ContainerInternal from '../components/common/ContainerInternal'

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
    <ContainerInternal>
      {fetched && (
        <>
          {user && <SignedSchedule onSignOut={onSignOut} user={user}/>}
          {!user && <UnsignedSchedule onSignIn={onSignIn} />}
        </>
      )}
    </ContainerInternal>
  )
}
