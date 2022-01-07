import React, { useEffect } from "react";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Portfolio } from "../Portfolio/Portfolio";
export const Home = ({ handleNavigation, id }) => {
  useEffect(() => {
    const x = document.querySelector(`#${id}`);
    x.scrollIntoView({ behavior: "smooth" });
  }, [id]);
  return (
    <React.Fragment>
      <Hero />
      <About handleNavigation={handleNavigation} />
      <Portfolio />
    </React.Fragment>
  );
};
