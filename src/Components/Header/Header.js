import React from "react";
import { StyledHeader,StyledNavBox } from "./headerStyles";
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
    <StyledNavBox>
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
    </StyledNavBox>
  </StyledHeader>
);

