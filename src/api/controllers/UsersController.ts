import BaseController from '../vendor/BaseController'

export default class UsersController extends BaseController {
  UserDB: any

  async signIn() {
    const data = this.body
    const user = await this.UserDB.findBySlug(data.slug)
    if (user.password !== data.password) {
      this.status(404)
      return { message: 'Usuário e senha não conferem!' }
    }
    this.setHeader('token', user.token)
    return user
  }
}
