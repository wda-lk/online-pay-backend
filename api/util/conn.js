const Sequelize = require("sequelize")

const sequelize = new Sequelize("ultimate2", "root", "@Mck_#321", {
	port: 3306,
	host: "124.43.9.57",
	dialect: "mysql",
	define: {
		timestamps: false
	}
})

module.exports = sequelize
