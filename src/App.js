//modules
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//Components
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Experience } from "./Components/Experience/Experience";
import { Footer } from "./Components/Footer/Footer";

//styled-components
import { StyledApp } from "./styles/StyledApp";

//start
const App = () => {
  const [highlight, setHighlight] = useState(false);
  const [id, setId] = useState("top");
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
  const handleClick = (id) => {
    handleMenu();
    handleNavigation(id);
  };

  const fullDate = new Date();

  const display = (
    <StyledApp
      id="top"
      menuToggle={menuToggle}
      tabindex="0"
      onScroll={(e) => handleScrollTop(e)}
    >
      <Menu
        handleClick={handleClick}
        handleMenu={handleMenu}
        menuToggle={menuToggle}
      />
      <Header
        handleMenu={handleMenu}
        highlight={highlight}
        handleNavigation={handleNavigation}
        menuToggle={menuToggle}
      />
      
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Hero handleNavigation={handleNavigation} id={id} />
              <About handleNavigation={handleNavigation} />
              <Portfolio />
            </React.Fragment>
          }
        />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer handleNavigation={handleNavigation} fullDate={fullDate} />
    </StyledApp>
  );

  return display;
};

export default App;
