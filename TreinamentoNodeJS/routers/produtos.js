
const LivrosDao = require('../dao/LivrosDao')
const ProdutosController = require('../controller/ProdutosController')


function produtos(server){  
  server.get('/produtos', ProdutosController.getAll)
  server.post('/produtos', ProdutosController.save)
  server.get('/produtos/form', ProdutosController.show)
}


module.exports = produtos

/*

function produtos(server) {
  server.get('/produtos', (req, res) => {
    const connection = server.infra.connectFactory()
    const livrosDao = new LivrosDao(connection)
    livrosDao.getAll((error, livros, fields) => {
      res.render('produtos/lista', { livros })
    })
    connection.end()
  })



  server.get('/produtos/form', (req, res) => {
    res.render('./produtos/form')
  })


  server.post('/produtos', (req, res) => {
    const livro = req.body
    console.log(livro)
    const connection = server.infra.connectFactory()
    const _dao = new LivrosDao(connection)
    _dao.save(livro, (error) => {
      res.redirect('/produtos')
      console.log(error)
    })
  })
}

*/

