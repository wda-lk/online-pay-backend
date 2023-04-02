const Sequelize = require("sequelize")

const sequelize = new Sequelize("narammalaps", "root", "3ta@kela#una@", {
  port: 3307,
  host: "124.43.11.162",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = sequelize
