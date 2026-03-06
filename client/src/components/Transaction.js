import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  
  // Amount positive ya negative check karne ke liye
  const sign = transaction.amount < 0 ? '-' : '+';
  const isExpense = transaction.amount < 0;

  return (
    <li className={`transaction-item ${isExpense ? 'minus-border' : 'plus-border'}`}>
      <div className="item-info">
        {/* Modern Category Icon */}
        <div className={`category-icon ${isExpense ? 'bg-red' : 'bg-green'}`}>
          {transaction.category === 'Food' ? '🍔' : 
           transaction.category === 'Salary' ? '💰' : 
           transaction.category === 'Medical' ? '🏥' : '💳'}
        </div>
        <div>
          <span className="transaction-text">{transaction.text}</span>
          {/* Category aur Date/Time dikhane ke liye */}
          <p className="transaction-category">
          {transaction.category} • {transaction.createdAt ? new Date(transaction.createdAt).toLocaleDateString('en-IN') : 'N/A'} | {transaction.createdAt ? new Date(transaction.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : 'N/A'}
          </p>
        </div>
      </div>
      
      <div className="item-action">
        <span className={`transaction-amount ${isExpense ? 'text-red' : 'text-green'}`}>
          {sign}₹{Math.abs(transaction.amount).toLocaleString()}
        </span>
        
        {/* DELETE BUTTON with Trash Icon */}
        <button 
          onClick={() => deleteTransaction(transaction._id || transaction.id)} 
          className="delete-btn"
          title="Delete Transaction"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};