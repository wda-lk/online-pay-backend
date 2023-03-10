const Sequelize = require('sequelize');

const sequelize = new Sequelize("online_test", "root","Kuru$#@321%@#$" , {
    port: 3306,
    host: "124.43.65.168",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;
