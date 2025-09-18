// import db from './db.js'
import { pool } from "./db.js"

// ##### Get Request to select all users #####
export const getAllUser = async () => {
    let client = await pool.connect() 
    try {
        const query = 'SELECT * FROM "user"'
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

// ##### Post Request to create user #####
export const createUser = async ({email, password, first_name, last_name}) => {
    let client = await pool.connect()  
    try {
        // const { rows: [user] } = await client.query(
        // console.log(object)
        const result = await client.query(
			`
                INSERT INTO "user" (email, password, first_name, last_name) 
                VALUES($1, $2, $3, $4) 
                RETURNING email, password, first_name, last_name
              `,
			[ email, password, first_name, last_name ]
        ) 
        // return user
        // res.json(result.rows[0]) 
        return result.rows[0]
    } catch (error) {
        throw error 
    }
}