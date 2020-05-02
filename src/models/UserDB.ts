import DB from './DB'
import { hideObjectProps } from '../helpers/Object'

export default class UserDB extends DB {
  static tableName = 'users'

  async findBySlug(slug) {
    return this.table.where({ slug }).first('id', 'slug', 'name', 'token', 'password').then(hideObjectProps('token', 'password'))
  }
}
