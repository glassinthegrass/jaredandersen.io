import React from "react";
import { StyledTitleDiv, StyledTitle } from "./portfolioStyles";

export const SubHeader = ({ title }) => (
  <StyledTitleDiv>
    <StyledTitle>{title}</StyledTitle>
  </StyledTitleDiv>
);
