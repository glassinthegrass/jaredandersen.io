import React from "react";
import { StyledFooter } from "./styles";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { SiteMap } from "./SiteMap";
import {MovingBox} from './styles'

export const Footer = ({ handleNavigation,fullDate }) => (
  <StyledFooter id="footer">
<MovingBox>

    <Contact/>
   <SiteMap handleNavigation={handleNavigation}/>
</MovingBox>
   <Copyright fullDate={fullDate}/>

  </StyledFooter>
);


