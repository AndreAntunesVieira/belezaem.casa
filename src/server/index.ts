import fastify from 'fastify'
import next from 'next'
import bodyParser from 'fastify-formbody'

const server = fastify({ logger: { level: 'error' } })
server.register(bodyParser)

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


server.register((fastify, opts, next) => {
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', (req: any, reply: any) => {
          return handle(req.req, reply.res).then(() => {
            reply.sent = true
          })
        })
      }

      fastify.all('/api/*', async (req: any, res: any) => {
        const route = req.params['*']
        import(`../api/${route}`)
          .then(module => {
            const method = module.default
            res.json = content => res.send(JSON.stringify(content))
            method(req, res)
          })
          .catch(e => {
            console.log('catch', e)
            res.send(`api error: ${req.url}`)
          })
      })

      fastify.all('/*', (req: any, reply: any) => {
        return handle(req.req, reply.res).then(() => {
          reply.sent = true
        })
      })

      fastify.setNotFoundHandler((request: any, reply: any) => {
        return app.render404(request.req, reply.res).then(() => {
          reply.sent = true
        })
      })

      next()
    })
    .catch(err => next(err))
})

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
