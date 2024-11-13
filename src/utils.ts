import { Client } from "pg";
export const getClient = async () => {
    const client = new Client('postgresql://neondb_owner:NXfhZk6MelP1@ep-sweet-recipe-a5twohws.us-east-2.aws.neon.tech/neondb?sslmode=require');
    await client.connect();
    return client;
}