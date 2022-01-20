import React from "react";
import { StyledHeader, StyledTitleBox, StyledNavBox } from "./headerStyles";
import { MenuIcon } from "./MenuIcon";
import { NavLink } from "./NavLink";
import { NavTitleLink } from "./NavTitleLink";
export const Header = ({
  handleMenu,
  menuToggle,
  handleNavigation,
  highlight,
}) => (
  <StyledHeader menuToggle={menuToggle} highlight={highlight}>
    <MenuIcon toggle={handleMenu} />
    <StyledTitleBox>
      <NavTitleLink
        handleClick={handleNavigation}
        id="hero"
        title="Jared Andersen"
      />
    </StyledTitleBox>
    <StyledNavBox>
      <NavLink handleClick={handleNavigation} id="about" title="About Me" />
      <NavLink
        handleClick={handleNavigation}
        id="portfolio"
        title="Portfolio"
      />
      <NavLink
        handleClick={handleNavigation}
        id="experience"
        title="Experience"
      />
    </StyledNavBox>
  </StyledHeader>
);
