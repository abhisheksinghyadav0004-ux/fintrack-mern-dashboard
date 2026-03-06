const Transaction = require('../models/Transaction');

// Designed by Abhishek Yadav
// @desc    Sare transactions mangwane ke liye (Filter option ke sath)
exports.getTransactions = async (req, res, next) => {
    try {
        let query = {};

        // Filter Check: Agar URL me category mangi ho (e.g. ?category=Fuel)
        if (req.query.category) {
            query.category = req.query.category;
        }

        const transactions = await Transaction.find(query);
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        console.error(`Error: ${err.message}`);
        return res.status(500).json({ success: false, error: 'Server Error' });
    }
}

// @desc    Naya transaction save karne ke liye
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        } else {
            return res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
}

// @desc    Delete transaction
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ success: false, error: 'No transaction found' });
    }

    await transaction.deleteOne();

    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
}