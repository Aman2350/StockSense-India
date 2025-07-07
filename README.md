# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📈 StockSense India

**StockSense India** is an AI-powered stock market dashboard for Indian retail investors. It lets users track their portfolio, view curated stock market news, and get AI-generated market sentiment analysis based on current headlines — all in one sleek web app.

---

## 🚀 Features

- 🧾 **Portfolio Tracker**
  - Add Indian stocks (symbol, quantity, and buy price)
  - Portfolio is stored in `localStorage` (auto-saves on reload)

- 📰 **Live Market News**
  - Fetched using [GNews API](https://gnews.io/)
  - Includes General News and Portfolio-Filtered News

- 🤖 **AI Market Analysis**
  - Uses [Groq API](https://console.groq.com/) with LLaMA 3.1 model
  - Analyzes news and gives:
    - Overall sentiment (Positive/Negative/Neutral)
    - Summary
    - Confidence score
    - Recommendations

- 🔗 **Link to Full Articles**
  - Each news card includes a “Read full article” link to the original source

- 🖌️ **Modern UI/UX**
  - Built with TailwindCSS + Lucide Icons
  - Responsive design for desktop and mobile

---

## 🧑‍💻 Tech Stack

- **Frontend:** React + Vite
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **APIs:** GNews (news) + Groq (AI)

---

