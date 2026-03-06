import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // --- ACTIONS ---

  // 1. Get Transactions
  async function getTransactions() {
    try {
      const res = await axios.get('http://localhost:5000/api/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: "Server Error: Backend not connected"
      });
    }
  }

  // 2. Delete Transaction
  async function deleteTransaction(id) {
    try {
      // Backend call
      await axios.delete(`http://localhost:5000/api/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      // Offline fallback: Agar backend nahi hai toh bhi UI se delete ho jaye
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }
  }

  // 3. Add Transaction (Ab Date aur Time bhi save hoga)
  async function addTransaction(transaction) {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }

    // Naye fields add kiye: Date aur Time
    const timestamp = new Date();
    const transactionWithMeta = {
      ...transaction,
      date: timestamp.toLocaleDateString(),
      time: timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    try {
      const res = await axios.post('http://localhost:5000/api/transactions', transactionWithMeta, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      // BACKEND BAND HAI: Local Testing ke liye state mein add karein
      const tempId = transaction._id || Math.floor(Math.random() * 100000000);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: { ...transactionWithMeta, _id: tempId } 
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}