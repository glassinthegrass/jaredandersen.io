//import
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import './styles/reset.css'
import { GlobalStyle } from "./styles/GlobalStyles";
//declarations
const root = document.getElementById("root");
const Router = process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;
const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  root
);
