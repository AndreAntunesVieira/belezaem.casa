import { MongoClient } from 'mongodb'
import { getEnv } from '../helpers/Environment'
import { promisefy } from '../helpers/helpers/Promises'

export default class DB {
  protected client
  static collection = ''

  constructor() {
    this.client = new MongoClient(getEnv('MONGODB_URL'), { useNewUrlParser: true })
  }

  async connect() {
    return promisefy(this.client.connect.bind(this.client))
  }

  get collection() {
    const constructor: any = this.constructor
    return this.client.db('belezaemcasa').collection(constructor.collection)
  }

  closeAfter() {
    setTimeout(() => this.client.close(), 10)
  }
}
