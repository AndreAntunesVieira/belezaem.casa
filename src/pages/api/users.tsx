import UserDB from '../../models/UserDB'

export default async function signInUser(req, res) {
  if (req.method !== 'POST') {
    res.status(405)
    return res.send()
  }
  const data = JSON.parse(req.body)
  const user = await new UserDB().findBySlug(data.slug)
  console.log(user, user.password, data.password, data.password === user.password)
  if (user.password !== data.password) {
    res.status(404)
    return res.json({ message: 'Usuário e senha não conferem!' })
  }
  res.setHeader('token', user.token)
  return res.json(user)
}
