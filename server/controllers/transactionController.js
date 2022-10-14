const pool = require("../config/db.js"); 

// methods to interact with database

// GET /api/v1/transactions
const getTransactions = async (req, res, next) => {
    try {
        const transactions = await pool.query('SELECT * FROM transactions'); 
        // error check for no transactions
        if(transactions.rows.length === 0) {
            res.status(400);
            throw new Error("No transactions available"); 
        };
        res.status(200).json(transactions.rows); 
    } catch(error) {
        next(error); 
    };
}; 

// POST /api/v1/transactions
// text, amount from request body
const addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body; 
        const transaction = await pool.query(`INSERT INTO transactions (text, amount) VALUES ($1, $2) RETURNING id, text, amount`, [text, amount]); 
        res.status(201).json(transaction.rows); 
    } catch(error) {
        next(error); 
    };
}; 

// GET /api/v1/transactions/:id 
const getTransaction = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const transaction = await pool.query(`SELECT * FROM transactions WHERE id = $1`, [id]); 
        // error check for no transactions
        if(transaction.rows.length === 0) {
            res.status(400);
            throw new Error("No transaction found"); 
        };
        res.status(200).json(transaction.rows); 
    } catch(error) {
        next(error); 
    };
};

// PUT /api/v1/transactions/:id
const updateTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body; 
        const { id } = req.params; 
        const transaction = await pool.query(`UPDATE transactions SET text = $1, amount = $2 WHERE id = $3 RETURNING text, amount`, [text, amount, id]); 
        res.status(200).json(transaction.rows); 
    } catch(error) {
        next(error); 
    };
};

// DELETE /api/v1/transactions/:id 
const deleteTransaction = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const transaction = await pool.query(`DELETE FROM transactions WHERE id = $1 RETURNING id, text, amount`, [id]); 
        // error check for no transactions
        if(transaction.rows.length === 0) {
            res.status(400);
            throw new Error("Could not find transaction"); 
        };
        return res.status(200).json(transaction.rows); 
    } catch(error) {
        next(error); 
    };
};

module.exports = {
    getTransactions, 
    addTransaction, 
    getTransaction, 
    updateTransaction, 
    deleteTransaction, 
}