import React from "react";
import styled from "styled-components";
import { Webcard } from "./Webcard";
import gather from "../../public/Gather.png";
import oneup from "../../public/oneup.png";
import currency from "../../public/currency-convert.png";
export const Portfolio = () => {
  return (
    <StyledPortfolio id="portfolio">
      <PortfolioTitleDiv>
        <Title>Portfolio</Title>
      </PortfolioTitleDiv>

      <PortfolioMain>
        <Webcard
          icon={gather}
          siteName="Gather"
          siteDescription=' A website that allows users to "register" unregistered “people” to groups, where users comment to them.
Targeted families with younger children aren\’t ready for social media, but want them to receive birthday messages.'
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
      </PortfolioMain>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;
const PortfolioTitleDiv = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const PortfolioMain = styled.div`
  width: calc(100vw - 6rem);
  background-color: rgb(234, 234, 234);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;
  padding-top: 4rem;
`;
