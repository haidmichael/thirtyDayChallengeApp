require('dotenv').config()
const express = require('express')
const router = express.Router()

// ########## Home Route ###########
router.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

// ########## Health Route ##########
router.get('/health', async(req, res) => {
    return res.status(200).json({
        message: 'Okay', 
        status: '200'
    })
})

module.exports = router