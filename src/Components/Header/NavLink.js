import React from "react";
import { StyledLink } from "./headerStyles";

export const NavLink = ({ handleClick, id, title,fontSize }) => (
  <StyledLink fontSize={fontSize} onClick={() => handleClick(id)}>{title}</StyledLink>
);