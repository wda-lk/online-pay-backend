const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "124.43.7.128",
  user: "root",
  password: "UDU@#321$%",
  database: "ultimate2",
  port: 3306
})

module.exports = pool.promise()
