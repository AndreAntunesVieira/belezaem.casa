import { MongoClient } from 'mongodb'
import { getEnv } from '../../helpers/Environment'
const promisefy = (method, ...args) => {
  return new Promise((resolve, reject) => {
    args.push(err => (err ? reject(err) : resolve()))
    method(...args)
  })
}

class DB {
  protected client
  constructor() {
    this.client = new MongoClient(getEnv('MONGODB_URL'), { useNewUrlParser: true })
  }
  static collection = ''
  async connect() {
    return promisefy(this.client.connect)
  }
  get collection() {
    const constructor: any = this.constructor
    return this.client.db('belezaemcasa').collection(constructor.collection)
  }
  closeAfter() {
    setTimeout(() => this.client.close(), 10)
  }
}

class Testimonials extends DB {
  static collection = 'testimonials'
  async all() {
    await this.connect()
    this.closeAfter()
    return this.collection.find().toArray()
  }
}

export default async function getAllTestimonials(_req, res) {
  const testimonials = await new Testimonials().all()
  res.json(testimonials)
}
