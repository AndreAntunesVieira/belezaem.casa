import BaseController from '../vendor/BaseController'

export default class TestimonialsController extends BaseController {
  TestimonialsDB: any

  index() {
    return this.TestimonialsDB.all()
  }
}
