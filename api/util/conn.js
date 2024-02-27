const Sequelize = require("sequelize")

const sequelize = new Sequelize("online_test", "root", "NATH@#$321$%", {
  port: 3306,
  host: "124.43.4.231",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
