import React from "react";
import me from "../../assets/me.jpeg";
import {
  StyledHero,
  StyledBox,
  StyledCircle,
  StyledPic,
  StyledSpace,
  StyledName,
  StyledTitle,
} from "./heroStyles";

export const Hero = () => (
  <StyledHero id="hero">
    <StyledBox>
      <StyledCircle>
        <StyledPic src={me} alt="a" />
      </StyledCircle>
      <StyledSpace height="2" />
      <StyledName>Jared Andersen</StyledName>
      <StyledTitle>Student, Developer. Father & Husband.</StyledTitle>
      <StyledSpace />
    </StyledBox>
  </StyledHero>
);
