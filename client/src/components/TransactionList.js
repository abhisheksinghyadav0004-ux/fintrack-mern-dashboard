import React, { useContext, useState } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

// NOTE: Humne yahan "const" use kiya hai
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter(t => 
    t.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-wrapper">
      <h3 className="section-title">Recent Activity</h3>
      
      <div className="search-bar-container">
        <input 
          type="text" 
          placeholder="Search transactions..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="modern-search-input"
        />
      </div>
      
      <div className="tx-list-scroll custom-scrollbar">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map(transaction => (
            <Transaction key={transaction._id || transaction.id} transaction={transaction} />
          ))
        ) : (
          <div className="empty-feed">
            <div className="empty-icon">📂</div>
            <p>No activity found</p>
          </div>
        )}
      </div>
    </div>
  );
};

// YEH LINE IMPORT HAI: Default export yahan ho raha hai
export default TransactionList;