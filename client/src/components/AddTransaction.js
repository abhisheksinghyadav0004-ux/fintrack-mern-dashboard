import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Other');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    // Validation: Amount 0 nahi hona chahiye
    if (parseInt(amount) === 0) {
      alert("Abhishek bhai, 0 amount ki entry ka kya fayda? Kuch value daalo!");
      return;
    }

    const newTransaction = {
      text,
      amount: +amount,
      category
    }

    addTransaction(newTransaction);
    
    // Resetting Form
    setText('');
    setAmount(0);
    setCategory('Other');
  }

  return (
    <div className="add-transaction-wrapper">
      <form onSubmit={onSubmit}>
        {/* Transaction Name Input */}
        <div className="form-group">
          <label>Transaction Title</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="e.g. Office Lunch" 
            required 
          />
        </div>

        {/* Category Dropdown with Modern Styling */}
        <div className="form-group">
          <label>Category</label>
          <select 
            className="modern-select"
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required
          >
            <option value="Salary">💰 Salary</option>
            <option value="Business">💼 Business</option>
            <option value="Medical">🏥 Medical</option>
            <option value="Food">🍔 Food</option>
            <option value="Fuel">⛽ Fuel</option>
            <option value="Groceries">🛒 Groceries</option>
            <option value="Rent">🏠 Rent</option>
            <option value="Bills">🧾 Bills</option>
            <option value="Other">✨ Other</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="form-group">
          <label>Amount (Use '-' for Expenses)</label>
          <div className="amount-input-wrapper">
            <span className="currency-symbol">₹</span>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="0.00" 
              required 
            />
          </div>
        </div>

        <button className="btn btn-primary-glow">
          Execute Transaction
        </button>
      </form>
    </div>
  )
}