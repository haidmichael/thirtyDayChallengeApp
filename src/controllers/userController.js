import { getAllUser, createUser, getUser } from '../database/user.js'

export const allUsers = async (req, res) => {
    try {
        // console.log('hello controller')
        const users = await getAllUser() 
        res.status(200).json(users)
    } catch (error) {
        console.error('Error Fetching users: ', error)
        res.status(500).json({ message: 'Server error...'})
    }
}

export const registerUser = async (req, res, next) => {
    const { email, password,  first_name, last_name } = req.body
    // console.log('Are we in register..?')
    try {
        if (password.length < 8) {
            return 
        }
        const user = await createUser({email, password, first_name, last_name})
        // console.log('are you here....?')
        res.send({
            message: 'Thank you for signing up!',
            user: user 
        })        
    } catch (error) {
        next( error )
    }
}

export const loginUser = async (req, res, next) => {
    // const { email, password } = req.body
    const {email} = req.body
    console.log('In login User')
    try {

        // if (!email || !password) {
        if (!email) {
            return res.status(400).json({ message: 'Email and password are required' })
        }

        // const user = await getUser({ email, password })
        const user = await getUser({ email }) 

        if(!user){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        
        return res.status(200).json({ message: 'Thanks for signing back in', user: user })
        
    } catch (error) {
        console.error(error) 
        next({ name: 'error', message: 'Unable to log in user...!'})
    }
}

// export default allUsers