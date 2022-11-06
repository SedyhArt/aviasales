import pg from "pg";
const dbPort = process.env.DB_PORT;

const pool = new pg.Pool(
    {
        user: "postgres",
        password: '111',
        host: 'localhost',
        port: dbPort,
        database: 'aviasales'
    }
);

export default pool;