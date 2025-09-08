// Entry point for the api
import dotenv from 'dotenv'
dotenv.config() 
import express from 'express'
import { router } from './routes/thirtyDayRoutes.js'

const app = express() 
const PORT = process.env.PORT || 3000

// ########## all routes ##########
app.use('/', router)

// ########## Server Start ##########
app.listen(PORT, () =>{
    console.log(`I'm listening down here on port: ${PORT}`)
})