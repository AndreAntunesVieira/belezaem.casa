import { MongoClient } from 'mongodb'

class DB {
  protected client
  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true })
  }
  static collection = ''
  async connect() {
    return new Promise((resolve, reject) =>
      this.client.connect(async err => {
        if (err) return reject(err)
        return resolve()
      })
    )
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
