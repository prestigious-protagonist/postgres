import {getClient} from './utils'

const insertData = async () => {
    const client = await getClient()
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    await client.query(insertUserText,userValues)
    console.log("Data Added")
}
insertData();