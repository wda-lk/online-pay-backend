const Sequelize = require("sequelize")

const sequelize = new Sequelize("online", "root", "UDU@#321$%", {
  port: 3306,
  host: "124.43.7.128",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
