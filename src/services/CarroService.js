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
    },

    buscarUm: (codigo)=>{
        return new Promise((aceito, rejeitar)=>{
            db.query('select * from carros where codigo=?',[codigo],(error, results)=>{
                if(error){ 
                    rejeitar(error)
                    return
                }

                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (modelo, placa)=>{
        return new Promise((aceito, rejeitar)=>{
            db.query('insert into carros (modelo, placa) values (?,?)',[modelo,placa],(error, results)=>{
                if(error){
                    rejeitar(error)
                    return
                }

                let json = {
                    affectedRows: results.affectedRows,
                    warningCount: results.warningCount,
                    message: results.message,
                    reg:results.insertId,
                    modelo,
                    placa
                }

                aceito(json)
            })
        })
    },

    inserirJson: (carro)=>{
        return new Promise((aceito, rejeitar)=>{
            db.query('insert into carros (modelo, placa) values (?,?)',[carro.modelo, carro.placa],(error, results)=>{
                if(error){
                    rejeitar(error)
                    return
                }

                let json = {
                    affectedRows: results.affectedRows,
                    warningCount: results.warningCount,
                    message: results.message,
                    reg: results.insertId,
                    carro
                }

                aceito(json)
            })
        })
    },

    deletar: (codigo)=>{
        return new Promise((aceito, rejeitar)=>{
            db.query('delete from carros where codigo=?',[codigo],(error, results)=>{
                if(error){ 
                    rejeitar(error)
                    return
                }

                let json = {
                    affectedRows: results.affectedRows,
                    warningCount: results.warningCount,
                    message: results.message,
                    reg: codigo
                }

                aceito(json)
            })
        })
    },

    atualizar: (codigo, carro)=>{
        return new Promise((aceito, rejeitar)=>{           
            db.query('update carros set modelo=?, placa=? where codigo=?',[carro.modelo,carro.placa,codigo],(error, results, fields)=>{
                if(error){
                    rejeitar(error)
                    return
                }

                let json = {
                    affectedRows: results.affectedRows,
                    warningCount: results.warningCount,
                    message: results.message,
                    reg: {
                            codigo: codigo,
                            modelo: carro.modelo,
                            placa: carro.placa
                        }
                }

                aceito(json)
            })
        })
    }

}