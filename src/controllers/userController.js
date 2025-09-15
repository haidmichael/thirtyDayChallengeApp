import { getAllUser } from '../database/user.js'

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
// export default allUsers