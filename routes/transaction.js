const express = require('express');
const router = express.Router();

// Controllers se functions ko import kiya (Abhishek Yadav)
const { 
    getTransactions, 
    addTransaction, 
    deleteTransaction 
} = require('../controllers/transaction');

// Base route: /api/transactions
router.route('/')
    .get(getTransactions)
    .post(addTransaction);

// ID wala route: /api/transactions/:id
// Ye delete karne ke liye kaam aayega
router.route('/:id')
    .delete(deleteTransaction);

module.exports = router;