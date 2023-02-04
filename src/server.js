// require('dotenv').config() //Aqui é para adicionar direto do arquivo .env
const config  = require('../config/config') //Aqui faço uma interface para possibilitar a mudança do nome de varirável c/ pouco custo (config.js)
const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(cors())
//app.use(bodyParser.urlencoded({extend: false}))
app.use(express.json())
app.use(config._prefixoApiURL, routes)

app.listen(config._port,()=>console.log(`Rodando na porta ${config._port}`))