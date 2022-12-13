import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter, HashRouter } from 'react-router-dom';
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// для локальной сборки без хостинга нужен HashRouter. Для хостинга  - BrowserRouter
  <HashRouter>
    <App />
  </HashRouter>
 );
