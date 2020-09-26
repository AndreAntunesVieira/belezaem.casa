import ModelBase from '../vendor/ModelBase'

export default class CostumerDB extends ModelBase {
  static tableName = 'costumers'

  async all() {
    return this.table
      .select({
        id: 'id',
        birthDate: 'birth_date',
        createdAt: 'created_at',
        name: 'name',
        phone: 'phone',
      })
      .then(this.disconnect)
  }
}
