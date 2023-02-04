const mySql = require('mysql2')
const config  = require('../config/config')


const con = mySql.createConnection({
    host: config.dataBase._host,
    user: config.dataBase._user,
    password: config.dataBase._pass,
    database: config.dataBase._name
})

// const con = mySql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// })

// const con = mySql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'lancevak',
//     database: 'dbapicarros'
// })

con.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado no banco de dados: ${process.env.DB_NAME}`)
})

module.exports = con