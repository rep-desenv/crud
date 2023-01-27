const mySql = require('mysql2')

const con = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

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