import React from "react";
import { Webcard } from "./Webcard";
import { SubHeader } from "./SubHeader";
import { StyledPortfolio,StyledMain } from "./portfolioStyles";
import gather from "../../assets/Gather.png";
import oneup from "../../assets/oneup.png";
import currency from "../../assets/currency-convert.png";
export const Portfolio = () => (
    <StyledPortfolio id="portfolio">
        <SubHeader title='Portfolio'/>
      <StyledMain>
        <Webcard
          icon={gather}
          siteName="Gather"
          siteDescription=' A website that allows users to "register" unregistered “people” to groups, where users comment to them.
Targeted families with younger children aren’t ready for social media, but want them to receive birthday messages.'
          siteUrl="https://gather.jaredandersen.io"
          githubUrl={"https://github.com/glassinthegrass/gather"}
        />
        <Webcard
          icon={oneup}
          siteName="One Up"
          siteDescription="Collaborated to create a dating app for people that like nerdy things, using a tinder-like match system.
Targeted toward single people over 18, that want to chat and date fellow geeky people."
          siteUrl="https://oneup.jaredandersen.io"
          githubUrl={"https://github.com/glassinthegrass/geek-dating-app"}
        />
        <Webcard
          icon={currency}
          siteName="Currency-Convert"
          siteDescription="a currency conversion app utilizing the frankfurt currency conversion API and my own front end."
          siteUrl="https://currency-convert.jaredandersen.io"
          githubUrl={"https://github.com/glassinthegrass/currency-convert"}
        />
      </StyledMain>
    </StyledPortfolio>
  );
