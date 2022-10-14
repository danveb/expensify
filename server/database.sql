-- dropdb & createdb 
DROP DATABASE IF EXISTS expensify; 
CREATE DATABASE expensify; 

\c expensify; 

DROP TABLE IF EXISTS transactions; 
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL, 
    amount FLOAT NOT NULL
); 

INSERT INTO transactions(text, amount) 
VALUES('COOK', -125), ('FREELANCE', 6000); 

-- push to PSQL: $ psql < database.sql