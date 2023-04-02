const mysql = require("mysql2")

const pool = mysql.createPool({
  port: 3306,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
})

module.exports = pool.promise()
