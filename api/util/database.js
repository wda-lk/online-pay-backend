const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user:"cat2020",
    password:"cat2020!23",
    database:"cat2020-old",
    port: 3306
   

});

module.exports = pool.promise();
