// import React from 'react';
// import StockMarketDashboard from './pages/StockMarketDashboard';

// const App = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <StockMarketDashboard />
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import News from './pages/News';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Simple Nav */}
        <nav className="bg-white shadow p-4 mb-6">
          <ul className="flex space-x-6 text-blue-600 font-medium">
            <li><Link to="/">🏠 Dashboard</Link></li>
            <li><Link to="/portfolio">📊 Portfolio</Link></li>
            <li><Link to="/news">📰 News</Link></li>
          </ul>
        </nav>

        {/* Route Views */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
