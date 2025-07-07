

// src/services/NewsService.js
import axios from 'axios';
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/search';

export const fetchIndianStockNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: 'stock market india',
        lang: 'en',
        country: 'in',
        token: API_KEY,
      },
    });

    return response.data.articles.map((article, index) => ({
      id: index,
      headline: article.title,
      source: article.source.name,
      timestamp: new Date(article.publishedAt).toLocaleString(),
      link: article.url,
      sentiment: 'neutral', // Optional: add your own sentiment logic
      impact: 'Neutral',
      confidence: Math.floor(Math.random() * 30 + 70), // mock confidence
      reasoning: article.description || 'Market update from news headline',
    }));
  } catch (error) {
    console.error('Error fetching GNews:', error);
    return [];
  }
};
