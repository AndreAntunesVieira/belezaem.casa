import routes from '../routes'
import models from '../models'
import controllers from '../controllers'
import { Router } from 'express'

export default function vendorMiddleware(server) {
  const router = Router()
  routes.map(({ httpMethod, path, controller }) => {
    const [controllerClass, controllerMethod] = controller.split(/[.@]/)
    server[httpMethod](`/api/${path}`, async (req, res) => {
      const controllerInstance = new controllers[controllerClass]()
      controllerInstance.setRequest(req)
      controllerInstance.setReply(res)
      controllerInstance.setModels(models)
      await controllerInstance[controllerMethod]()
        .then(result => res.json(result))
        .catch(e => {
          console.log('error', e)
          return res.send(e)
        })
    })
  })
  return router
}
