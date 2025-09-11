import dotenv from 'dotenv'
dotenv.config() 
import { Pool } from 'pg'

export const pool = new Pool({
  user: 'USER',
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: process.env.DB_PORT, 
  database: process.env.DB_NAME
})
console.log('DB is running')
// export default pool