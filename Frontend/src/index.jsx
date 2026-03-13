// Path: src/index.js (ya src/main.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import zaroori hai
import App from './App'; // 2. App.js ko import karein
import './index.css'; // Agar aapki css file hai

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 3. BrowserRouter yahan wrap hoga */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);