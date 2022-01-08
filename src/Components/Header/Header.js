import React from "react";
import styled from "styled-components";
import { MenuIcon } from "./MenuIcon";
import { NavLink } from "./NavLink";
export const Header = ({handleMenu, menuToggle, handleNavigation, highlight}) => (
  <StyledHeader menuToggle={menuToggle} highlight={highlight}>
    <MenuIcon toggle={handleMenu} />
    <NavLink
      fontSize="21"
      handleClick={handleNavigation}
      id={"hero"}
      title="Jared Andersen"
    />
    <NavBox>
      <NavLink
        fontSize="16"
        handleClick={handleNavigation}
        id={"about"}
        title="About Me"
      />
      <NavLink
        fontSize="16"
        handleClick={handleNavigation}
        id={"portfolio"}
        title="Portfolio"
      />
      <NavLink
        fontSize="16"
        handleClick={handleNavigation}
        id={"experience"}
        title="Experience"
      />
    </NavBox>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 3rem;
  width: 100%;
  display: ${(props) => (props.menuToggle ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  ${(props) =>
    props.highlight
      ? `background-color:rgb(69,91,116);  
      border-radius-bottom: 50%;
    box-shadow: 0 0 50px rgb(234,234,234,0.8);`
      : ""};
`;

const NavBox = styled.nav`
display: none;
  @media (min-width: 550px) {
    padding-right: 1rem;
    height: 3rem;
    display: flex;
  }
`;
