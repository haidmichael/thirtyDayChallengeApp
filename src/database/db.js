import dotenv from 'dotenv'
// dotenv.config() 
// import { Pool } from 'pg'
import pkq from 'pg' 
const { Pool } = pkq
dotenv.config() 

export const pool = new Pool({
  // user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
  database: process.env.DB_NAME
})

pool.on('connect', () => {
  console.log('Connection pool establised with Database')
})
// console.log('DB is running')
// export default pool