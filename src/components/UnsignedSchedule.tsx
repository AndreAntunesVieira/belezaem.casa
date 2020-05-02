import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import A from './common/A'
import Button from './Button'
import request from '../helpers/Request'
import Menu from './Menu'

export default function UnsignedSchedule({ onSignIn }) {
  const slugInput: any = useRef()
  const passwordInput: any = useRef()
  const [fetching, setFetching] = useState(false)
  const onSubmit = async e => {
    e.preventDefault()
    setFetching(true)
    const slug: string = slugInput.current.value
    const password: string = passwordInput.current.value
    await request('users', { method: 'post', data: { slug, password } })
      .then(user => {
        sessionStorage.setItem('token', user.headers.token)
        sessionStorage.setItem('user', JSON.stringify(user))
        onSignIn()
      })
      .catch(_e => {
        console.log(_e)
      })
      .then(() => setFetching(false))
  }
  return (
    <>
      Você precisa fazer login para continuar
      <Form onSubmit={onSubmit}>
        <div className="form-control">
          <input name="slug" placeholder="login" ref={slugInput} />
        </div>
        <div className="form-control">
          <input name="password" placeholder="senha" type="password" ref={passwordInput} />
        </div>
        <div className="form-control flex jc-end">
          <Button className="btn-success" disabled={fetching}>
            Entrar
          </Button>
        </div>
      </Form>
      <Menu>
        <A href="/">Voltar</A>
      </Menu>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 60px;
  padding: 16px;
  width: 300px;
`
