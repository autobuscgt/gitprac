const {Sequelize} = require('sequelize')
module.exports = new Sequelize('gitprac','postgres','0000',{
    dialect:'postgres'
})