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
VALUES('Freelance', 3000), ('Groceries', -150), ('iPhone replacement', -990), ('Mechanical keyboard', 250), ('Weekly gathering', -300); 

-- push to PSQL: $ psql < database.sql