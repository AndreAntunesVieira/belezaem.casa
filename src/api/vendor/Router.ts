export default class Router {
  private routes = []

  add(httpMethod, options) {
    this.routes.push({ httpMethod, ...options })
  }
  get(path, controller) {
    this.add('get', { path, controller })
  }
  post(path, controller) {
    this.add('post', { path, controller })
  }
  put(path, controller) {
    this.add('put', { path, controller })
  }
  delete(path, controller) {
    this.add('delete', { path, controller })
  }
  options(path, controller) {
    this.add('options', { path, controller })
  }
  patch(path, controller) {
    this.add('patch', { path, controller })
  }
  map(callback) {
    return this.routes.map(callback)
  }
}
