
const livrosDao = require('../dao/LivrosDao')




function livros(server){
    server.get('/produtos', (req, res) => {
        res.server('./produtos/form')
    })


    server.post('/produtos', (req,res) => {

        const livro = req.body
        console.log(livro)
        const connection = server.infra.getConnectionFactory
    
        const livrosDao = new livrosDao(connection)
    
        livrosDao.save(livro, () => {
            res.redirect('/produtos')
        })
    })

}

