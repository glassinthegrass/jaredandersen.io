import React from "react";
import { StyledAbout, StyledBox, StyledTitle, StyledText, StyledLink, StyledContactMe } from "./aboutStyles";

export const About = ({ handleNavigation }) => (
  <StyledAbout id="about">
    <StyledBox>
      <StyledTitle as="h1">Nice To Meet You!</StyledTitle>
      <StyledBox>
        <StyledText>
          I'm Jared Andersen, and I just moved to Maryville, TN.
        </StyledText>
        <StyledText>
          {`I recently graduated `}
          <StyledLink
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://devmountain.com"
          >
            DevMountain
          </StyledLink>{` Web Development program.`}
        </StyledText>
        <StyledText>
          I love programming, Hiking, taking photos of my dogs!
        </StyledText>
        <StyledText>
          Feel free to get in touch or take a look at my past work below.
        </StyledText>
      </StyledBox>
      <StyledContactMe onClick={() => handleNavigation("footer")}>
        Contact Me
      </StyledContactMe>
    </StyledBox>
  </StyledAbout>
);
