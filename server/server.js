const express = require("express"); 
const dotenv = require("dotenv").config(); 
const colors = require("colors"); 
const PORT = process.env.PORT || 4000; 
const transactions = require("./routes/transactions.js"); 

// initialize express app
const app = express(); 

// Body Parser Middleware
app.use(express.json()); 

// REST API
app.use("/api/v1/transactions", transactions); 

// GET on localhost:4000 (backend) returns Hello World
app.get("/", (req, res) => res.send("Hello World")); 

// sample controller + route
// const getTransactions = async (req, res) => {
//     const response = await pool.query(`SELECT * FROM transactions`);
//     // console.log(response.json()); 
//     res.status(200).json(response.rows); 
// };
// app.get("/transactions", getTransactions); 

app.listen(PORT, console.log(`Server running on PORT ${PORT}`.yellow.underline)); 