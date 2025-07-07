import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export const getCompanyName = (symbol) => {
  const companies = {
    RELIANCE: 'RELIANCE INDUSTRIES',
    TCS: 'TATA CONSULTANCY',
    HDFCBANK: 'HDFC BANK',
    INFY: 'INFOSYS',
    ICICIBANK: 'ICICI BANK',
    SBIN: 'STATE BANK',
    BHARTIARTL: 'BHARTI AIRTEL',
  };
  return companies[symbol] || symbol;
};

export const getSentimentColor = (sentiment) => {
  switch (sentiment) {
    case 'positive':
      return 'text-green-600 bg-green-50';
    case 'negative':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const getSentimentIcon = (sentiment) => {
  switch (sentiment) {
    case 'positive':
      return <TrendingUp className="w-4 h-4" />;
    case 'negative':
      return <TrendingDown className="w-4 h-4" />;
    default:
      return <Activity className="w-4 h-4" />;
  }
};
