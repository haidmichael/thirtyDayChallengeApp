// import db from './db.js'
import { pool }from "./db.js"

export const getAllUser = async () =>{
    try {
        // const { rows: user } = await db.query(`SELECT * from user`)
        const { rows: user } = await pool.query(`SELECT * from user`)
        return user 
    } catch (error) {
        throw { status: 500, message: error } 
    }
}

// export default getAllUser