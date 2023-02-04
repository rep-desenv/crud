const dotenv = require('dotenv')

dotenv.config({ path: process.env.NODE_ENV === 'desenv' ? '.env.exemplo':'.env' })

module.exports = {    
    _port: process.env.SERVER_PORT,
    dataBase: {
        _host: process.env.DB_HOST,
        _user: process.env.DB_USER,
        _pass: process.env.DB_PASS,
        _name: process.env.DB_NAME,
        _port: process.env.PORT,
        _databaseURL: process.env.DATABASE_URI
    },    
    _prefixoApiURL: process.env.PREFIXO_API_URI
}