const Sequelize = require('sequelize');

const sequelize = new Sequelize("cat2020-old", "cat2020","cat2020!23" , {
    port: 3306,
    host: "localhost",
    dialect: 'mysql',
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

module.exports = sequelize;
