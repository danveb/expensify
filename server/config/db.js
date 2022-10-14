const { Pool } = require("pg"); 
const dotenv = require("dotenv").config(); 

/* PSQL 
$ CREATEDB expensify
$ psql 
\c expensify 
CREATE TABLE transactions(id SERIAL PRIMARY KEY, name VARCHAR(255), amount FLOAT);
INSERT INTO transactions(name, amount) VALUES('book', 33); 
SELECT * FROM transactions
*/ 

// Pool connection to allow multiple connectio nrequests to server 
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER, 
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
}); 

console.log("PostgreSQL connected".cyan.underline); 

module.exports = pool;