require('dotenv').config()
const {Sequelize} = require('@sequelize/core')
const {PostgressDialect} = require('@sequelize/postgress')

const connection = new Sequelize({
    dialect: PostgressDialect,
    database: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
   
})

// const {Sequelize} = require('@sequelize/core')
// const {SqliteDialect} = require( '@sequelize/sqlite3')

// const connection = new Sequelize({
//     dialect: SqliteDialect,
//     storage: 'database/askme.db'
// })

module.exports = connection