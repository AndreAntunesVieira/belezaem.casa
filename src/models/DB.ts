import knex from 'knex'

export default class DB {
  static tableName = ''

  get table(): any {
    const constructor: any = this.constructor
    return knex(constructor.tableName)
  }
}
