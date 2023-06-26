

const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking data', 'root', '1234', {
    dialect: "mysql",
    host: "localhost"
})
module.exports = sequelize