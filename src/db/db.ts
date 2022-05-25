import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'academia',
    port: 5432
});