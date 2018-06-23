

const connectionFactory = require('../infra/connectFactory')()
const LivrosDao = require('../dao/LivrosDao')

class ProdutosController{

    getAll (req, res)
    {
        const connection = connectionFactory()
        const livrosDao = new LivrosDao(connection)

        livrosDao.getAll((error, livros, fields) => {
            res.render('produtos/lista', { livros })
        })
        connection.end() 
    }
        
      
    save(req, res)
    {
        const livro = req.body
        console.log(livro)

        const connection = connectionFactory()
        const _dao = new LivrosDao(connection)

        _dao.save(livro, (error) => {
            if(error){
                res.render('./produtos/form', { mensagemErro: "Não foi possível cadastrar o produto"})
            }else{
                res.redirect('/produtos')
            }            
            console.log(error)
        }) 
        
        connection.end() 
    }


    show(req, res)
    {
        res.render('./produtos/form',{ mensagemErro: "", livros: { } })
    }
}



module.exports = new ProdutosController()
