import ModelBase from '../vendor/ModelBase'
import { hideObjectProps } from '../../helpers/Object'

export default class UserDB extends ModelBase {
  static tableName = 'users'

  async findBySlug(slug) {
    return this.table
      .where({ slug })
      .first('id', 'slug', 'name', 'token', 'password')
      .then(hideObjectProps('token', 'password'))
      .then(this.disconnect)
  }
}
