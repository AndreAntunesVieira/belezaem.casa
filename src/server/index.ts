import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import vendorMiddleware from '../api/vendor'

const server = express()

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.use(bodyParser())
  server.use(express.static('public'))

  vendorMiddleware(server)

  server.all('*', (req, res) => handle(req, res))
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
