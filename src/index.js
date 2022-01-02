import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import {HashRouter,BrowserRouter} from 'react-router-dom'
const Router = process.env.NODE_ENV==='development'?HashRouter:BrowserRouter;
const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  root
);
