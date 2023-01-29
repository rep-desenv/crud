//Todas as regras de negócio deverão estar nesse arquivo
//const { json } = require('body-parser')
const CarroService = require('../services/CarroService')

module.exports = {
    buscarTodos: async(req, res)=>{
        let json = {
            error: '',
            result:[]
        }

        let carros = await CarroService.buscarTodos()

        for (let i in carros){
            json.result.push({
                error: carros[i].error,
                codigo: carros[i].codigo,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            })            
        }

        res.json(json)
    },

    buscarUm: async(req, res) => {
        let json = {
            error:'',
            result:{}
        }

        let codigo = req.params.codigo  

        let carro = await CarroService.buscarUm(codigo)

        if(carro){
            json.result = carro
        }
        
        res.json(json)
    },

    inserir: async(req, res) => {
        let json = {
            error:'',
            result:{}
        }

        let modelo = req.body.modelo
        let placa = req.body.placa

        if(modelo && placa){
            let carroCodigo = CarroService.inserir(modelo, placa)
            
            json.result={
                codigo: carroCodigo,
                modelo,
                placa
            }
        }else{
            json.error = 'Campos não enviados.'
        }

        res.json(json)
    },

    inserirJson: async(req, res) => {
        let json = {
            error:'',
            result:{}
        }

        // let modelo = req.body.modelo
        // let placa = req.body.placa
        let carro = {}
        carro = req.body

        if(carro.modelo && carro.placa){
            let carroCodigo = CarroService.inserirJson(carro)
            
            json.result={
                codigo: carroCodigo,
                modelo,
                placa
            }
        }else{
            json.error = 'Campos não enviados.'
        }

        res.json(json)
    }
}