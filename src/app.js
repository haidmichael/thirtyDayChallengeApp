// Entry point for the api
require('dotenv').config()
const express = require('express')
const router = require('./routes/thirtyDayRoutes')

const app = express() 
const PORT = process.env.PORT || 3000

// ########## all routes ##########
app.use('/', router)

// ########## Server Start ##########
app.listen(PORT, () =>{
    console.log(`I'm listening down here on port: ${PORT}`)
})