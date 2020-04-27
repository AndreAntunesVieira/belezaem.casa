import knex from 'knex'
import * as knexfile from '../../knexfile'

const environment = process.env.NODE_ENV || 'development'

const database = knex(knexfile[environment])

export default class DB {
  static tableName = ''

  get table(): any {
    const constructor: any = this.constructor
    return database(constructor.tableName)
  }
}
