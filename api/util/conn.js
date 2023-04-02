const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  port: 3306,
  host: process.env.host,
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
