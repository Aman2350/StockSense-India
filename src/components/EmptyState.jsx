// src/components/EmptyState.jsx
import React from 'react';
import { Filter } from 'lucide-react';

const EmptyState = ({ message = 'No data found', subtext = 'Try adding relevant stocks or refreshing your data.' }) => {
  return (
    <div className="text-center py-12 text-gray-500">
      <Filter className="w-12 h-12 mx-auto mb-3 text-gray-400" />
      <p className="text-lg mb-2">{message}</p>
      <p>{subtext}</p>
    </div>
  );
};

export default EmptyState;
