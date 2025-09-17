import { getAllUser, createUser } from '../database/user.js'

export const allUsers = async (req, res) => {
    try {
        console.log('hello controller')
	    // const users = await user.getAllUsers()
        const users = await getAllUser() 
        res.status(200).json(users)
    } catch (error) {
        console.error('Error Fetching users: ', error)
        res.status(500).json({ message: 'Server error...'})
    }
}

export const registerUser = async (req, res, next) => {
    const { email, password,  first_name, last_name } = req.body
    console.log('Are we in register..?')
    try {
        if (password.length < 8) {
            return 
        }
        const user = await createUser ({email, password, first_name, last_name})
        console.log('are you here....?')
        res.sent({
            message: 'Thank you for signing up!',
            user: user 
        })        
    } catch (error) {
        next( error )
    }
}

// export default allUsers