console.log('O programa está sendo executado!')

// const dotEnv = require('dotenv').config({ path: process.env.NODE_ENV === 'prod' ? '.env.test' : '.env' })

const config = require('./config/config')


console.log(config.dataBase._host)
console.log (config.dataBase._name)


//console.log(dotEnv)