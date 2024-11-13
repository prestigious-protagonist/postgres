import { getClient } from "./utils";

const createTable = async () => {
    const client = await getClient();
    const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await client.query(createUserTableQuery)
}
createTable();
