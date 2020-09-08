import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import A from './common/A'
import Button from './Button'
import Menu from './Menu'
import request from '../helpers/Request'

export default function UnsignedSchedule({ onSignIn }) {
  const slugInput: any = useRef()
  const passwordInput: any = useRef()
  const [message, setMessage] = useState({ text: '', color: 'Green' })
  const [fetching, setFetching] = useState(false)
  const onSubmit = async e => {
    e.preventDefault()
    setFetching(true)
    setMessage({ text: 'Carregando, aguarde...', color: 'Blue' })
    const slug: string = slugInput.current.value.toLowerCase()
    const password: string = passwordInput.current.value
    await request('users/sign-in', { method: 'post', data: { slug, password } })
      .then(user => {
        sessionStorage.setItem('token', user.headers.token)
        sessionStorage.setItem('user', JSON.stringify(user))
        setMessage({ text: 'Login Realizado com sucesso', color: 'Green' })
        setTimeout(() => onSignIn(), 300)
      })
      .catch(e => {
        const text: string = e.message
        setMessage({ text, color: 'Red' })
        console.log(e)
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
          <small className={`Color${message.color}`}>{message.text}</small>
          <Button className="btn-success" disabled={fetching}>
            Entrar
          </Button>
        </div>
      </Form>
      <Menu>
        <A className="MainMenuItem" href="/">Voltar</A>
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
