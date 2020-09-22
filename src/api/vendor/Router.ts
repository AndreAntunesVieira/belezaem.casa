export default class Router {
  private routes = []

  addRoute(httpMethod){
    return (path, controller, options = {}) => this.routes.push({ httpMethod, path, controller, ...options })
  }

  public get = this.addRoute('get')
  public post = this.addRoute('post')
  public put = this.addRoute('put')
  public options = this.addRoute('options')
  public patch = this.addRoute('patch')
  public delete = this.addRoute('delete')

  map(callback) {
    return this.routes.map(callback)
  }
}
