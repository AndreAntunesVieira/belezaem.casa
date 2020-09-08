export interface IBaseController {
  setReply(reply: any): any
  setRequest(request: any): any
  setModels(models: any): any
  [name: string]: any
}

export default class BaseController implements IBaseController {
  protected request = null
  protected reply = null
  public setReply(reply) {
    this.reply = reply
  }
  public setRequest(request) {
    this.request = request
  }
  public setModels(models) {
    Object.entries(models).forEach(([name, Model]: [string, any]) => {
      Object.defineProperty(this, name, { enumerable: false, get: () => new Model() })
    })
  }
  public get body() {
    return this.request.body
  }
  public get query() {
    return this.request.query
  }
  public get bodyParams() {
    return this.request.body
  }
  public get queryParams() {
    return this.request.query
  }
  public get routeParams() {
    return this.request.params
  }
  public get params() {
    return {
      ...this.request.params,
      ...this.request.query,
      ...this.request.body,
    }
  }
  public status(status) {
    return this.reply.code(status)
  }
  public code(status) {
    return this.reply.code(status)
  }
  public setHeader(name, value) {
    return this.reply.set(name, value)
  }
}
