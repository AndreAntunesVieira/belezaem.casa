import knex from 'knex'
import * as knexfile from '../../knexfile'

const environment = process.env.NODE_ENV || 'development'

export default class DB {
  static tableName = ''
  private _database

  get table(): any {
    const constructor: any = this.constructor
    return this.database(constructor.tableName)
  }

  get database() {
    if (this._database) return this._database
    this._database = knex(knexfile[environment])
    return this._database
  }

  disconnect = async content => {
    this.database.destroy()
    return content
  }
}
