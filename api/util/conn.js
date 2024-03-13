const Sequelize = require("sequelize")

const sequelize = new Sequelize("ultimate2", "root", "NATH@#$321$%", {
  port: 3306,
  host: "124.43.4.231",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
