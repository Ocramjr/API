import { createConnection } from "mysql2/promise";

const config = {
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "appdb",
    port: 3308,
}

const connection = await createConnection(config);

export { connection };