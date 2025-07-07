// src/components/Header.jsx
import React from 'react';
import { TrendingUp, RefreshCw, Bell, Mail } from 'lucide-react';

const Header = ({ onRefresh, refreshing }) => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">StockSense India</h1>
          <p className="text-sm text-gray-600">AI-Powered Portfolio News Analysis</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onRefresh}
          disabled={refreshing}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
        <Bell className="w-5 h-5 text-gray-600" />
        <Mail className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  </header>
);

export default Header;
