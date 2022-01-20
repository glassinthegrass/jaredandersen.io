import React from "react";
import { StyledTitleLink } from "./headerStyles";

export const NavTitleLink = ({ handleClick, id, title }) => (
  <StyledTitleLink as='h1' onClick={() => handleClick(id)}>{title}</StyledTitleLink>
);