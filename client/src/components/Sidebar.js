import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png'; 

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="brand-section">
        <div className="avatar-wrapper">
          <img src={logoImg} alt="User Logo" className="user-avatar" />
        </div>
        <h2 className="brand-name">FinTrack</h2>
      </div>

      <nav className="nav-links">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="nav-icon">📊</span> Dashboard
        </Link>
        <Link to="/transactions" className={`nav-item ${location.pathname === '/transactions' ? 'active' : ''}`}>
          <span className="nav-icon">💸</span> Transactions
        </Link>
        <Link to="/analytics" className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
          <span className="nav-icon">📈</span> Analytics
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="divider-line"></div>
        <span className="footer-label">Designed By-</span>
        <p className="footer-username">Abhishek Yadav</p>
      </div>
    </div>
  );
};