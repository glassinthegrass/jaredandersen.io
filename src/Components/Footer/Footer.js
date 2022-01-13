import React from "react";
import { StyledFooter } from "./footerStyles";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { SiteMap } from "./SiteMap";
import { StyledMovingBox } from "./footerStyles";

export const Footer = ({ handleNavigation, fullDate }) => (
  <StyledFooter id="footer">
    <StyledMovingBox>
      <Contact />
      <SiteMap handleNavigation={handleNavigation} />
    </StyledMovingBox>
    <Copyright fullDate={fullDate} />
  </StyledFooter>
);
