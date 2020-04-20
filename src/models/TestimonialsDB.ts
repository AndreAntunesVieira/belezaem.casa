import DB from './DB'

export default class TestimonialsDB extends DB {
  static collection = 'testimonials'
  async all() {
    await this.connect()
    this.closeAfter()
    return this.collection.find().toArray()
  }
}
