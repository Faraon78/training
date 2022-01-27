import {createConnection, Connection} from "typeorm";

const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: process.env.TYPEORM_PASSWORD,
    database: "projectdb",
    
});