const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const port = process.env.PORT || 5000

app.prepare()
  .then(() => {
    const server = express()
    // SSR fruits
    server.get('/fruit-item/:id', (req, res) => {
      let params = req.params
      let query = req.query

      console.log('params', params)
      console.log('query', query)

      return app.render(req, res, '/fruit-item', params)

      // return renderComponent(req, './components/Layout')
    })

    server.get('/about-sample', (req, res) => {
      let params = req.params
      let query = req.query

      console.log('params', params)
      console.log('query', query)

      return app.render(req, res, '/about', Object.assign(params, query))
    })

    server.get('/contactos-sample', (req, res) => {
      let params = req.params
      let query = req.query

      console.log('params', params)
      console.log('query', query)

      return app.render(req, res, '/contactos', Object.assign(params, query))
    })

    server.get('/home', (req, res) => {
      let params = req.params
      let query = req.query

      console.log('params', params)
      console.log('query', query)

      // const mergedQuery = Object.assign({}, req.query, req.params);
      // return app.render(req, res, '/blog', mergedQuery);
      return app.render(req, res, '/', Object.assign(params, query))
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Server start on ${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
