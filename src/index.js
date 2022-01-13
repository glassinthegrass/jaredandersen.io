import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { HashRouter, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;
const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  root
);
