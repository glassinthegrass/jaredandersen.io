//modules
import React, { useState, useEffect } from "react";
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
  const [menuToggle, setMenuToggle] = useState(false);
const [to,setTo]=useState('hero');
  const navigate = useNavigate();
  const fullDate = new Date();

  const handleNavigation = (id = 'hero') => {
    if (id === "experience") {
      setTo(id);
      navigate(`/${id}`);
    } else {
      setTo(id);
      navigate("/");
    }
  };
useEffect(()=>{
  const x = document.querySelector(`#${to}`);
  x.scrollIntoView({ behavior: "smooth" });
},[to])

  const handleScrollTop = (e) => {
    Number(e.target.scrollTop) > 150 ? setHighlight(true) : setHighlight(false);
  };

  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  const handleClick = (toggle) => {
    return (id)=>{
      setMenuToggle(!toggle)
      handleNavigation(id);
    }

  };

  const display = (
    <StyledApp
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
              <Hero handleNavigation={handleNavigation} />
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
