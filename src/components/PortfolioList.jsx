// src/components/PortfolioList.jsx
import React from 'react';
import { X, Activity } from 'lucide-react';

const PortfolioList = ({ portfolio, onRemove }) => {
  if (portfolio.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <Activity className="w-12 h-12 mx-auto mb-3 text-gray-400" />
        <p>Add stocks to your portfolio to get personalized news analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {portfolio.map((stock) => (
        <div key={stock.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <div className="font-medium text-gray-900">{stock.symbol}</div>
            <div className="text-sm text-gray-600">{stock.quantity} shares</div>
            <div className="text-sm">
              <span className="text-gray-500">Avg: ₹{stock.price}</span>
              <span className="mx-2">|</span>
              <span className="text-gray-900">Current: ₹{stock.currentPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`text-sm font-medium ${
                stock.currentPrice - stock.price >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {(stock.currentPrice - stock.price >= 0 ? '+' : '') +
                (((stock.currentPrice - stock.price) / stock.price) * 100).toFixed(1)}
              %
            </div>
            <button onClick={() => onRemove(stock.id)} className="text-red-600 hover:text-red-800">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
