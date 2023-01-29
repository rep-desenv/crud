const express = require('express')
const router = express.Router()

const CarroControllers = require('./controllers/CarroController')

router.get('/carros', CarroControllers.buscarTodos)
router.get('/carro/:codigo', CarroControllers.buscarUm)
router.post('/carro',CarroControllers.inserir)
router.post('/carroJson',CarroControllers.inserirJson)

module.exports = router