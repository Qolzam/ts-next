/* eslint-disable no-console */
const cookieParser = require('cookie-parser');
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./src/locales/i18n').default

const devProxy = {
  '/api': {
    target: 'http://127.0.0.1:31112/function',
    pathRewrite: {'^/api': '/' },
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
})

const handle = app.getRequestHandler()

let server

const serverRunner = (async () => {
  await app.prepare()
  const server = express()
  server.use(cookieParser());

  // Set up the proxy.
  if (dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }

  // Install localization
  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on port ${port} [${env}]`)
  })

})

serverRunner().then().catch((error) => {
  console.log('An error occurred, unable to start the server')
  console.log(error)
})
