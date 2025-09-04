import dotenv from 'dotenv'
import express from 'express'
export const router = express.Router()
dotenv.config() 

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
