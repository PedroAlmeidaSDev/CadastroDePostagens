//Conexão com o banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}