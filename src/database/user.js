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

export const createUser = async () => {
    let client 
    try {
        // const { rows: [user] } = await client.query(
        console.log(object)
        const result = await client.query(
			`
                INSERT INTO users (email, password, first_name, last_name) 
                VALUES($1, $2, $3, $4) 
                RETURNING email, password, firstname, lastname
              `,
			[ email, password, first_name, last_name ]
        ) 
        // return user
        res.json(result.rows[0]) 
    } catch (error) {
        throw error 
    }
}
// export default getAllUser