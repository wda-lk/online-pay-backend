const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "124.43.9.57",
  user: "root",
  password: "@Mck_#321",
  database: "ultimate2",
  port: 3306
})

module.exports = pool.promise()
