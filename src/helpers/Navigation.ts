import Router from 'next/router'
import { Response } from 'express'

export const redirectTo = async (url, res?: Response) => {
  if (res) {
    return res.redirect(302, `http://localhost:3000${url}`)
  }
  return Router.push(url)
}
