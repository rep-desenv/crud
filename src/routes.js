const express = require('express')
const router = express.Router()

const CarroControllers = require('./controllers/CarroController')

router.get('/carros', CarroControllers.buscarTodos)

module.exports = router