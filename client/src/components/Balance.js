import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Total calculation logic (Same as yours)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="main-header">
      <h4>Net Liquidity</h4>
      <h1>₹{total}</h1>
      
      <div className="balance-meta">
        <span className="trend-badge positive">+2.4%</span>
        <span className="meta-text"> vs last month</span>
      </div>
    </div>
  );
};