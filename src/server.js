require('dotenv').config()
const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(cors())
//app.use(bodyParser.urlencoded({extend: false}))
app.use(express.json())
app.use('/api', routes)

app.listen(process.env.PORT,()=>console.log(`Rodando na porta ${process.env.PORT}`))