import React,{useEffect} from "react";
import me from "../../assets/me.jpeg";
import {StyledHero,StyledBox,StyledCircle,StyledPic,StyledSpace,StyledName,StyledTitle} from "./heroStyles";

export const Hero = ({handleNavigation,id}) => {
  useEffect(() => {
    const x = document.querySelector(`#${id}`);
    x.scrollIntoView({ behavior: "smooth" });
  }, [id]);
  return (
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
};
