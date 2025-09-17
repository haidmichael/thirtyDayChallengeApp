// Entry point for the api
import dotenv from 'dotenv'
// dotenv.config() 
import express from 'express'
import { router } from './routes/thirtyDayRoutes.js'
import { pool } from './database/db.js'

dotenv.config()

const app = express() 
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// ########## all routes ##########
app.use('/', router)

// ########## Testing PG Connection ##########
app.get('/', async (req, res) => {
    const result = await pool.query('SELECT current_database()')
    res.send(`The DB name is: ${result.rows[0].current_database}`)
})

// ########## Server Start ##########
app.listen(PORT, () =>{
    console.log(`I'm listening down here on port: ${PORT}`)
})