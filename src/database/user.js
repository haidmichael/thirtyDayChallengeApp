// import db from './db.js'
import { pool } from "./db.js"

export const getAllUser = async () => {
    let client 
    try {
        client = await pool.connect() 

        const query = 'SELECT * FROM user'
        const result = await client.query(query) 
        // return result.json(result.rows) 
        return result.rows
        // const { rows: user } = await pool.query(`SELECT * from user`)
        // return user 
    } catch (error) {
        throw { status: 500, message: error } 
    } finally {
        if (client) {
            client.release
        }
    }
}

// export default getAllUser