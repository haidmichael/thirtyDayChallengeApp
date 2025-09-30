import dotenv from 'dotenv'
dotenv.config() 

import express from 'express'
// import { userController } from '../controllers/userController.js'
import { allUsers, registerUser, loginUser } from '../controllers/userController.js' 
export const router = express.Router()

// ########## Home Route ###########

// ##### Debug route for getting all users ######
router.get('/getAllUsers', allUsers) 

// ########## Create User Route ###########
router.post('/register', registerUser)

router.post('/login', loginUser)

// ########## Health Route ##########
router.get('/health', async(req, res) => {
    return res.status(200).json({
        message: 'Okay', 
        status: '200'
    })
})

// module.export = router