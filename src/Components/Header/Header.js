import React from "react";
import styled from "styled-components";

export const Header = ({ handleNavigation, highlight }) => (
  <StyledHeader highlight={highlight}>
    <Headline onClick={() => handleNavigation("hero")}>
      jaredandersen.io
    </Headline>

    <Links onClick={() => handleNavigation("about")}>about me</Links>
    <Links onClick={() => handleNavigation("portfolio")}>portfolio</Links>
    <Links onClick={() => handleNavigation("resume")}>resume</Links>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: ${(props) =>
    props.highlight ? "rgb(69,91,116)" : ""};
`;

const Headline = styled.h1`
  font-size: 1em;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem;
`;
const Links = styled.div`
  font-size: 1em;
  padding: 0.5rem;
  margin: 0.5rem;

`;
