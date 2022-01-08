import React, { useState } from "react";
import background from "./public/background.jpeg";
import "./App.css";

import styled from "styled-components";
import { GlobalStyle } from "./Style/GlobalStyle";
import { Menu } from "./Components/Menu/Menu";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Experience } from "./Components/Experience/Experience";
import { Home } from "./Components/Home/Home";
const App = () => {
  const [highlight, setHighlight] = useState(false);
  const [id, setId] = useState("hero");
  const [menuToggle, setMenuToggle] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (id) => {
    if (id === "experience") {
      setId(id);
      navigate(`/${id}`);
    } else {
      navigate("/");
      setId(id);
      const x = document.querySelector(`#${id}`);
      x.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTop = (e) => {
    +e.target.scrollTop > 150 ? setHighlight(true) : setHighlight(false);
  };

  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  let navToggle = menuToggle ? (
    <Menu
      handleNavigation={handleNavigation}
      handleMenu={handleMenu}
      menuToggle={menuToggle}
    />
  ) : (
    <Header
      handleMenu={handleMenu}
      highlight={highlight}
      handleNavigation={handleNavigation}
    />
  );

  const display = (
    <StyledApp
      id="top"
      menuToggle={menuToggle}
      tabindex="0"
      onScroll={(e) => handleScrollTop(e)}
    >
      <GlobalStyle />
      {navToggle}
      <Routes>
        <Route
          path="/"
          element={<Home id={id} handleNavigation={handleNavigation} />}
        />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer handleNavigation={handleNavigation} />
    </StyledApp>
  );

  return display;
};

export default App;

const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: ${(props) => (props.menuToggle ? "hidden" : "auto")};
`;
