const express = require("express"); 
const router = express.Router(); 
const { getTransactions, addTransaction, getTransaction, updateTransaction, deleteTransaction } = require("../controllers/transactionController.js"); 

// CRUD - GET, POST, PUT/PATCH, DELETE 
router.get("/", getTransactions); 
router.post("/", addTransaction); 
router.get("/:id", getTransaction); 
router.put("/:id", updateTransaction); 
router.delete("/:id", deleteTransaction); 

module.exports = router;