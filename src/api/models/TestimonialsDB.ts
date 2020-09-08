import ModelBase from '../vendor/ModelBase'

export default class TestimonialsDB extends ModelBase {
  static tableName = 'testimonials'

  async all() {
    return this.table.select().then(this.disconnect)
  }
}
