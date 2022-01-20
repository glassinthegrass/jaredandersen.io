import React from "react";
import { StyledLink } from "./headerStyles";

export const NavLink = ({ handleClick, id, title }) => (
  <StyledLink as='h6' onClick={() => handleClick(id)}>{title}</StyledLink>
);