import React from "react";
import { StyledFooter } from "./styles";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { SiteMap } from "./SiteMap";
import styled from "styled-components";

export const Footer = ({ handleNavigation,fullDate }) => (
  <StyledFooter id="footer">
<FooterColumn>

    <Contact/>
   <SiteMap handleNavigation={handleNavigation}/>
</FooterColumn>
   <Copyright fullDate={fullDate}/>

  </StyledFooter>
);


export const FooterColumn =styled.span`
display: flex;
width: calc(100vw - 2rem);
background-color: rgb(69, 91, 116);
padding: 1rem;
flex-direction:column;
@media (min-width: 550px) {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
`