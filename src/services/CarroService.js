//Todas as regras de banco de dados deverão estar nesse arquivo
const db = require('../db')

module.exports = {

    buscarTodos: ()=>{
        return new Promise((aceito, rejeitar)=>{
            db.query('select * from carros',(error, results)=>{
                if(error){ 
                    rejeitar(error)
                    return
                }
                aceito(results);
            })
        })
    }

}