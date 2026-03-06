const mongoose = require('mongoose');

// Designed by Abhishek Yadav
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text (e.g., Dinner, Petrol)']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
 category: {
    type: String,
    enum: [
      'Salary', 
      'Business', 
      'Fuel',           // Petrol/Diesel
      'Groceries',      // Kirana Store
      'Medical',        // Dawai, Doctor, Hospital (Ye raha aapka medical)
      'Food',           // Zomato/Restaurants
      'Rent', 
      'Transport',      // Metro/Bus
      'Shopping', 
      'Entertainment', 
      'Education', 
      'Bills',          // Bijli, Pani, Mobile
      'Investment', 
      'Gift',
      'Other'
    ],
    required: [true, 'Please select a category']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);