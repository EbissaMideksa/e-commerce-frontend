import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './context/ShopContext';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
