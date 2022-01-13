import React from "react";
import { StyledFooterBox, StyledMapSubtitle, StyledFooterTitle } from "./footerStyles";
export const SiteMap = ({ handleNavigation }) => (
  <StyledFooterBox>
    <StyledFooterTitle>Site Map</StyledFooterTitle>
    <StyledMapSubtitle onClick={() => handleNavigation("about")}>
      About Me
    </StyledMapSubtitle>
    <StyledMapSubtitle onClick={() => handleNavigation("portfolio")}>
      Portfolio
    </StyledMapSubtitle>
    <StyledMapSubtitle onClick={() => handleNavigation("experience")}>
      Experience
    </StyledMapSubtitle>
  </StyledFooterBox>
);
