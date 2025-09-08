import dotenv from 'dotenv'
dotenv.config() 

import express from 'express'
import pool from '../database/db.js'
export const router = express.Router()

// ########## Home Route ###########
router.get('/users', async (req, res) => {
    // res.json({ message: 'Hello World' })
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json(result.rows)
        // console.log(res.json(result.rows))
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

// ########## Health Route ##########
router.get('/health', async(req, res) => {
    return res.status(200).json({
        message: 'Okay', 
        status: '200'
    })
})
// module.export = router