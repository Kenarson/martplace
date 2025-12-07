import mysql from 'mysql2/promise'

const pool = process.env.DATABASE_URL
  ? mysql.createPool(process.env.DATABASE_URL)
  : mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'martplace',
      port: 3306
    })

export default pool
