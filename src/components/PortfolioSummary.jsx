// src/components/PortfolioSummary.jsx
import React from 'react';

const PortfolioSummary = ({ value, gain, gainPercent }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
      <div className="text-sm text-gray-600 mb-1">Total Value</div>
      <div className="text-2xl font-bold text-gray-900">₹{value.toLocaleString('en-IN')}</div>
      <div className={`text-sm font-medium ${gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {gain >= 0 ? '+' : ''}
        ₹{gain.toLocaleString('en-IN')} ({gainPercent.toFixed(2)}%)
      </div>
    </div>
  );
};

export default PortfolioSummary;
