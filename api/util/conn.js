const Sequelize = require("sequelize")

const sequelize = new Sequelize("ultimate2", "root", "IBBA@#321$%", {
  port: 3306,
  host: "124.43.5.82",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
