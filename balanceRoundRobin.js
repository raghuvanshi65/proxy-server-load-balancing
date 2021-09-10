const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer()
const express = require('express')
const balancer = express()
const PORT = process.env.PORT || 8000

let address = [
  {
    host: '127.0.0.1',
    port: 8001,
  },
  {
    host: 'localhost',
    port: 8002,
  },
  {
    host: 'localhost',
    port: 8003,
  },
]

balancer.use('*', (req, res) => {
  let server = { target: address.shift() }
  console.log(`Proxy Balancing request to: ${server.target.port}`)

  proxy.web(req, res, { target: server.target })
  address.push(server.target)
})

balancer.listen(PORT, () => {
  console.log(`balancer is running on ${PORT}`)
})
