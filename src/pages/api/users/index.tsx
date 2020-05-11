import UserDB from '../../../models/UserDB'
import ServerResponses from '../../../helpers/ServerResponses'

export default async function signInUser(req, res) {
  if (req.method !== 'POST') return new ServerResponses(req, res).sendMethodNotAllowed()
  const data = JSON.parse(req.body)
  const user = await new UserDB().findBySlug(data.slug)
  if (user.password !== data.password) {
    res.status(404)
    return res.json({ message: 'Usuário e senha não conferem!' })
  }
  res.setHeader('token', user.token)
  return res.json(user)
}
