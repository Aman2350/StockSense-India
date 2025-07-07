// src/components/AddStockForm.jsx
import React from 'react';
import { Plus } from 'lucide-react';

const AddStockForm = ({ newStock, setNewStock, onAdd }) => {
  return (
    <div className="space-y-3 mb-6">
      <input
        type="text"
        placeholder="Stock Symbol (e.g., RELIANCE)"
        value={newStock.symbol}
        onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          placeholder="Quantity"
          value={newStock.quantity}
          onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="number"
          placeholder="Price"
          value={newStock.price}
          onChange={(e) => setNewStock({ ...newStock, price: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        onClick={onAdd}
        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Plus className="w-4 h-4" />
        <span>Add Stock</span>
      </button>
    </div>
  );
};

export default AddStockForm;
