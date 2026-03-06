import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

export const Analytics = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0));

  const doughnutData = {
    labels: ['Income', 'Expenses'],
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#00f5a0', '#ff4b5c'],
      borderColor: ['#1a1d23'],
      borderWidth: 5,
      hoverOffset: 10
    }]
  };

  const lineData = {
    labels: transactions.slice(-7).map(t => t.text),
    datasets: [{
      fill: true,
      label: 'Flow',
      data: transactions.slice(-7).map(t => t.amount),
      borderColor: '#00f5a0',
      backgroundColor: 'rgba(0, 245, 160, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#00f5a0'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } } }
    },
    scales: {
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
      x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
    }
  };

  return (
    <div className="analytics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
      <div className="box-container" style={{ height: '400px' }}>
        <h3 style={{ marginBottom: '20px' }}>Expense Ratio</h3>
        <div style={{ height: '280px' }}>
          <Doughnut data={doughnutData} options={options} />
        </div>
      </div>
      
      <div className="box-container" style={{ height: '400px' }}>
        <h3 style={{ marginBottom: '20px' }}>Activity Trend</h3>
        <div style={{ height: '280px' }}>
          <Line data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
};