import knex from 'knex'
import * as knexfile from '../../knexfile'

const environment = process.env.NODE_ENV || 'development'
let database

export default class DB {
  static tableName = ''

  get table(): any {
    const constructor: any = this.constructor
    return this.database(constructor.tableName)
  }

  get database() {
    if (database) return database
    database = knex(knexfile[environment])
    return database
  }

  disconnect = async content => {
    this.database.destroy()
    return content
  }
}
