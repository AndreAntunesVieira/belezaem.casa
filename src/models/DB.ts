import { MongoClient } from 'mongodb'
import * as url from 'url'
import { getEnv } from '../helpers/Environment'

let cachedDb = null
let client = null

export default class DB {
  protected client
  static collection = ''

  async connect() {
    if (client) return client
    const uri = getEnv('MONGODB')
    client = await MongoClient.connect(uri, { useNewUrlParser: true })
    return client
  }

  get db() {
    if (cachedDb) return cachedDb
    const uri = getEnv('MONGODB')
    const db = client.db(url.parse(uri).pathname.substr(1))
    cachedDb = db
    return db
  }

  get collection(): any {
    const constructor: any = this.constructor
    return this.db.collection(constructor.collection)
  }
}
