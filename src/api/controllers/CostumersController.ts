import BaseController from '../vendor/BaseController'

export default class CostumersController extends BaseController {
  CostumerDB: any
  UserDB: any

  async index(){
    console.log('here')
    const costumers = await this.CostumerDB.all();
    return { costumers }
  }
}
