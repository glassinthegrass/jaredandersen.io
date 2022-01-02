import React, { useState } from "react";

import "./App.css";

import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Resume } from "./Components/Resume/Resume";
import { Home } from "./Components/Home/Home";
const App = () => {
  const [highlight, setHighlight] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    if (id === "resume") {
      navigate("resume");
    } else {
      navigate("/");
      const x = document.querySelector(`#${id}`);
      x.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollTop = (e) => {
+e.target.scrollTop >200 ? setHighlight(true):setHighlight(false);
  };

  return (
    <StyledApp tabindex="0" onScroll={(e) => handleScrollTop(e)}>
      <GlobalStyle />
      <Header highlight={highlight} handleNavigation={handleNavigation} />
      <Routes>
        <Route exact path="/" element={<Home handleNavigation={handleNavigation}/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer handleNavigation={handleNavigation} />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.main`
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://lp-cms-production.imgix.net/2019-06/GettyImages-163642367_super.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: scroll;
`;
