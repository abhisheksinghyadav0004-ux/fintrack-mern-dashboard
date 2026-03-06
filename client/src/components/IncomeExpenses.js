import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      {/* Income Card */}
      <div className="income-card glass-card">
        <div className="card-content">
          <h4>Income</h4>
          <p className="money plus">+₹{income}</p>
        </div>
        <div className="card-glow-green"></div>
      </div>

      {/* Expense Card */}
      <div className="expense-card glass-card">
        <div className="card-content">
          <h4>Expense</h4>
          <p className="money minus">-₹{expense}</p>
        </div>
        <div className="card-glow-red"></div>
      </div>
    </div>
  );
};