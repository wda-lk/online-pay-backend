const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "124.43.65.168",
    user:"root",
    password:"Kuru$#@321%@#$",
    database:"ultimate2",
    port: 3306
   

});

module.exports = pool.promise();
