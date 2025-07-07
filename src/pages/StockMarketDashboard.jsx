// src/pages/StockMarketDashboard.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AddStockForm from '../components/AddStockForm';
import PortfolioSummary from '../components/PortfolioSummary';
import PortfolioList from '../components/PortfolioList';
import AiAnalysis from '../components/AiAnalysis';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';
import { Filter } from 'lucide-react';
import { fetchIndianStockNews } from '../services/NewsService';
import axios from 'axios'; // ✅ Keep this at the top


const StockMarketDashboard = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [newStock, setNewStock] = useState({ symbol: '', quantity: '', price: '' });
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('general');


 



useEffect(() => {
  const loadNews = async () => {
    const news = await fetchIndianStockNews();
    setGeneralNews(news);
  };

  loadNews();
}, []);


  const addStock = () => {
    if (newStock.symbol && newStock.quantity && newStock.price) {
      const stock = {
        id: Date.now(),
        symbol: newStock.symbol.toUpperCase(),
        quantity: parseInt(newStock.quantity),
        price: parseFloat(newStock.price),
        currentPrice: parseFloat(newStock.price) * (0.95 + Math.random() * 0.1),
      };
      setPortfolio([...portfolio, stock]);
      setNewStock({ symbol: '', quantity: '', price: '' });
    }
  };

  const removeStock = (id) => {
    setPortfolio(portfolio.filter(stock => stock.id !== id));
  };






const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;

const generateAIAnalysis = async () => {
     if (!groqApiKey) {
    alert('Groq API key is missing!');
    return;
  }

  setLoading(true);
  const relevantNews = filteredNews.length > 0 ? filteredNews : generalNews.slice(0, 5);
   if (relevantNews.length === 0) {
    alert('No news available for analysis.');
    setLoading(false);
    return;
  }

  const prompt = `
You are a financial assistant. Based on the following stock market news, provide:
1. Overall market sentiment (Positive, Neutral, Negative)
2. A brief 2-3 line summary
3. A confidence score out of 100
4. 2-3 recommendations for investors

News Headlines and Reasoning:
${relevantNews.map((news, i) => `${i + 1}. ${news.headline} — ${news.reasoning}`).join('\n')}
`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions', // ✅ Groq endpoint
      {
        model: 'llama-3.1-8b-instant', // ✅ Best Groq-supported model  mixtral-8x7b-32768'
     
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${groqApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.choices[0].message.content;

console.log('News sent to AI:', prompt);
console.log('Groq Response:', aiResponse);


    setAiAnalysis({
      summary: aiResponse,
    });
  } catch (err) {
    console.error('Groq API error:', err);
    alert('AI analysis failed.');
  }

  setLoading(false);
};




//   const refreshNews = () => {
//     setRefreshing(true);
//     setTimeout(() => setRefreshing(false), 1500);
//   };

const refreshNews = async () => {
  setRefreshing(true);
  const news = await fetchIndianStockNews();
  setGeneralNews(news);
  setRefreshing(false);
};


  const getSentimentColor = (s) => s === 'positive' ? 'text-green-600 bg-green-50' : s === 'negative' ? 'text-red-600 bg-red-50' : 'text-gray-600 bg-gray-50';
  const getSentimentIcon = (s) => {
    const icons = {
      positive: '📈',
      negative: '📉',
      neutral: '🔍'
    };
    return <span>{icons[s]}</span>;
  };




useEffect(() => {
  const savedPortfolio = localStorage.getItem('portfolio');
  if (savedPortfolio) {
    try {
      const parsed = JSON.parse(savedPortfolio);
      if (Array.isArray(parsed)) {
        setPortfolio(parsed);
      }
    } catch (e) {
      console.error("Failed to parse portfolio from localStorage", e);
    }
  }
}, []);

useEffect(() => {
  if (portfolio.length > 0) {
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
  } else {
    localStorage.removeItem('portfolio'); // Optional: clean up if empty
  }
}, [portfolio]);


useEffect(() => {
  if (portfolio.length === 0) {
    setFilteredNews([]);
    return;
  }
  const symbols = portfolio.map(stock => stock.symbol.toUpperCase());
  const filtered = generalNews.filter(news =>
    symbols.some(symbol => news.headline.toUpperCase().includes(symbol))
  );
  setFilteredNews(filtered);
}, [portfolio, generalNews]);


  const value = portfolio.reduce((t, s) => t + s.currentPrice * s.quantity, 0);
  const gain = portfolio.reduce((t, s) => t + (s.currentPrice - s.price) * s.quantity, 0);
  const gainPercent = value ? (gain / (value - gain)) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={refreshNews} refreshing={refreshing} />
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
            {portfolio.length > 0 && (
              <PortfolioSummary value={value} gain={gain} gainPercent={gainPercent} />
            )}
            <AddStockForm newStock={newStock} setNewStock={setNewStock} onAdd={addStock} />
            <PortfolioList portfolio={portfolio} onRemove={removeStock} />
          </div>
          <AiAnalysis
            analysis={aiAnalysis}
            onAnalyze={generateAIAnalysis}
            loading={loading}
            getSentimentColor={getSentimentColor}
            getSentimentIcon={getSentimentIcon}
          />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6 py-4">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`font-medium pb-2 border-b-2 transition-colors ${activeTab === 'general' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                >
                  General News ({generalNews.length})
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`font-medium pb-2 border-b-2 transition-colors ${activeTab === 'portfolio' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                >
                  Portfolio News ({filteredNews.length})
                </button>
              </nav>
            </div>
            <div className="p-6 space-y-4">
              {activeTab === 'general' && generalNews.map(news => (
                <NewsCard key={news.id} news={news} getSentimentColor={getSentimentColor} getSentimentIcon={getSentimentIcon} />
              ))}
              {activeTab === 'portfolio' && (
                filteredNews.length > 0 ? (
                  filteredNews.map(news => (
                    <NewsCard key={news.id} news={news} getSentimentColor={getSentimentColor} getSentimentIcon={getSentimentIcon} />
                  ))
                ) : (
                  <EmptyState
                    icon={Filter}
                    title="No portfolio-specific news found"
                    subtitle="Add stocks to your portfolio to see relevant news here"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketDashboard;




//   const generateAIAnalysis = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const news = filteredNews.length ? filteredNews : generalNews.slice(0, 3);
//       const p = news.filter(n => n.sentiment === 'positive').length;
//       const n = news.filter(n => n.sentiment === 'negative').length;
//       const overall = p > n ? 'Positive' : n > p ? 'Negative' : 'Neutral';
//       const confidence = Math.min(95, 75 + Math.abs(p - n) * 5);
//       const summary = overall === 'Positive' ?
//         `Sentiment leans positive with ${p} positives.` :
//         overall === 'Negative' ?
//         `Sentiment shows caution with ${n} negatives.` :
//         `Mixed signals. Market may consolidate.`;

//       setAiAnalysis({
//         overallSentiment: overall,
//         confidence,
//         summary,
//         recommendations: [
//           portfolio.length ? 'Monitor your holdings' : 'Consider adding stocks',
//           'Stay updated with sector news',
//           'Ensure balanced allocations'
//         ]
//       });
//       setLoading(false);
//     }, 2000);
//   };


 
//   const mockGeneralNews = [
//     { id: 1, headline: "RBI maintains repo rate", source: "ET", timestamp: "2h", sentiment: "neutral", impact: "Neutral", confidence: 75, reasoning: "Stable policy" },
//     { id: 2, headline: "Reliance Q3 beats estimates", source: "Moneycontrol", timestamp: "4h", sentiment: "positive", impact: "Positive", confidence: 88, reasoning: "Strong quarterly results" },
//     { id: 3, headline: "IT sector faces headwinds", source: "Business Standard", timestamp: "6h", sentiment: "negative", impact: "Negative", confidence: 82, reasoning: "Tech slowdown" },
//     { id: 4, headline: "Banking sector improves NPA", source: "Financial Express", timestamp: "8h", sentiment: "positive", impact: "Positive", confidence: 79, reasoning: "Better asset quality" },
//     { id: 5, headline: "Adani stocks rebound", source: "Mint", timestamp: "10h", sentiment: "positive", impact: "Positive", confidence: 71, reasoning: "Regulatory clarity" }
//   ];

//   useEffect(() => {
//     setGeneralNews(mockGeneralNews);
//     filterNewsForPortfolio();
//   }, [portfolio]);