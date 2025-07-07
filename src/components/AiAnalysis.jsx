// // src/components/AiAnalysis.jsx
// import React from 'react';
// import { AlertCircle, Activity } from 'lucide-react';

// const AiAnalysis = ({ analysis, onAnalyze, loading, getSentimentColor, getSentimentIcon }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold">AI Analysis</h2>
//         <button
//           onClick={onAnalyze}
//           disabled={loading}
//           className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
//         >
//           <Activity className={`w-4 h-4 ${loading ? 'animate-pulse' : ''}`} />
//           <span>{loading ? 'Analyzing...' : 'Analyze'}</span>
//         </button>
//       </div>

//       {analysis ? (
//         <div className="space-y-4">
//           <div className={`p-4 rounded-lg ${getSentimentColor(analysis.overallSentiment.toLowerCase())}`}>
//             <div className="flex items-center space-x-2 mb-2">
//               {getSentimentIcon(analysis.overallSentiment.toLowerCase())}
//               <span className="font-medium">{analysis.overallSentiment} Sentiment</span>
//               <span className="text-sm">({analysis.confidence}% confidence)</span>
//             </div>
//             <p className="text-sm">{analysis.summary}</p>
//           </div>

//           <div>
//             <h4 className="font-medium mb-2">Recommendations:</h4>
//             <ul className="space-y-1 text-sm text-gray-600">
//               {analysis.recommendations.map((rec, index) => (
//                 <li key={index} className="flex items-start space-x-2">
//                   <span className="text-blue-600 mt-1">•</span>
//                   <span>{rec}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center py-8 text-gray-500">
//           <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
//           <p>Click "Analyze" to get AI-powered insights about your portfolio</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiAnalysis;




// src/components/AiAnalysis.jsx
import React from 'react';
import { AlertCircle, Activity } from 'lucide-react';

const AiAnalysis = ({ analysis, onAnalyze, loading }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">AI Analysis</h2>
        <button
          onClick={onAnalyze}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          <Activity className={`w-4 h-4 ${loading ? 'animate-pulse' : ''}`} />
          <span>{loading ? 'Analyzing...' : 'Analyze'}</span>
        </button>
      </div>

      {analysis ? (
        <div className="p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-line">
          {analysis.summary}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
          <p>Click "Analyze" to get AI-powered insights about your portfolio</p>
        </div>
      )}
    </div>
  );
};

export default AiAnalysis;
