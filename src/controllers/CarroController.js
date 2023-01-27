//Todas as regras de negócio deverão estar nesse arquivo
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
    }
}