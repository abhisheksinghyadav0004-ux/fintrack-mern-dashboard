import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionList from './components/TransactionList'; 
import { AddTransaction } from './components/AddTransaction';
import { Sidebar } from './components/Sidebar';
import { GlobalProvider } from './context/GlobalState'; // Ab ye sahi chalega
import { Analytics } from './components/Analytics';
import './App.css';

// Dashboard layout
const Dashboard = () => (
    <div className="dashboard-main-grid">
        <div className="dashboard-left-col">
            <div className="top-stats-row">
                <IncomeExpenses />
            </div>
            
            <div className="glass-card list-container">
                <h3 className="section-title">Transaction History</h3>
                <div className="tx-list-scroll">
                    <TransactionList /> 
                </div>
            </div>
        </div>
        
        <div className="dashboard-right-col">
            <div className="glass-card form-container">
                <h3 className="section-title">Add Transaction</h3>
                <AddTransaction />
            </div>
        </div>
    </div>
);

function App() {
    return (
        <GlobalProvider>
            <Router>
                <div className="desktop-wrapper">
                    <Sidebar />
                    <div className="content-area">
                        <header className="main-header">
                            <Balance />
                        </header>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/transactions" element={<TransactionList />} />
                            <Route path="/analytics" element={<Analytics />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </GlobalProvider>
    );
}

export default App;