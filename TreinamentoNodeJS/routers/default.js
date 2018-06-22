function rotas(server) {
  server.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  // JSON -> JavaScript Object Notation
  server.get('/', (req, res) => {
    res.render('index')
  })

  server.get('/contato', (req, res) => {
    res.render('contato')
  })
}

module.exports = rotas