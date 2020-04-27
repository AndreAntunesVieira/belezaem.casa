import DB from './DB'

export default class TestimonialsDB extends DB {
  static tableName = 'testimonials'

  async all() {
    return this.table.select()
  }
}
