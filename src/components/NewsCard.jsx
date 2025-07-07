// src/components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ news, getSentimentColor, getSentimentIcon }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 pr-4">{news.headline}</h4>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(news.sentiment)} flex items-center space-x-1`}
        >
          {getSentimentIcon(news.sentiment)}
          <span>{news.impact}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>{news.source}</span>
        <span>{news.timestamp}</span>
      </div>
      
     
      <div className="text-sm text-gray-600 bg-gray-50 rounded p-3">
  <div className="flex items-center justify-between">
    <span>{news.reasoning}</span>
    <span className="text-xs font-medium text-gray-500">{news.confidence}% confidence</span>
  </div>
  
  {/* Add this block BELOW reasoning/confidence */}
  <a
    href={news.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 text-sm underline mt-2 inline-block"
  >
    Read full article →
  </a>
</div>



    </div>
  );
};

export default NewsCard;
