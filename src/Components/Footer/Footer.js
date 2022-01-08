import React from "react";
import styled from "styled-components";

export const Footer = ({ handleNavigation }) => (
  <StyledFooter id="footer">
    <FooterBox>
      <FooterTitle>Contact Me</FooterTitle>
      <FooterSubtitle>Email: <a href='mailto:thejaredandersen@gmail.com' target="_blank" rel='noreferrer'  >thejaredandersen@gmail.com</a></FooterSubtitle>
      <FooterSubtitle>Phone: 1(480) 494-7356</FooterSubtitle>
      <FooterSubtitle>Discord: thejaredandersen#6061</FooterSubtitle>
    </FooterBox>
    <FooterBox>
      <FooterTitle>Site Map</FooterTitle>


      <MapSubtitle onClick={() => handleNavigation("about")}>
        About Me
      </MapSubtitle>
      <MapSubtitle onClick={() => handleNavigation("portfolio")}>
        Portfolio
      </MapSubtitle>
      <MapSubtitle onClick={() => handleNavigation("experience")}>
        Experience
      </MapSubtitle>

    </FooterBox>
  </StyledFooter>
);

const StyledFooter = styled.div`
display: flex;
width: calc(100vw - 2rem);
background-color: rgb(69, 91, 116);
padding: 1rem;
flex-direction:column;
@media (min-width: 550px) {
    flex-direction:row;
    justify-content: center;
    align-items: flex-start;
}
`;
const FooterBox = styled.span`
  width: calc(100% - 2rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding:1rem;
`;

const FooterTitle = styled.h3`
  padding: 1rem;
  font-size: 30px;
  width: calc(100% - 2rem);
  text-align: left;
`;
const FooterSubtitle = styled.p`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  white-space: normal;
  font-size: 15px;
  text-align: left;
  width: calc(100% - 5rem);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  `;
  const MapSubtitle=styled(FooterSubtitle)`
  white-space:nowrap;
  cursor:pointer;




`