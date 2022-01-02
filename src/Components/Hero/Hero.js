import React from "react";
import image from "../../me.jpeg";
import styled from "styled-components";

export const Hero = () => (
  <StyledHero id="hero">
    <StyledBox>
      <Circle>
        <StyledPic src={image} alt="a" />
      </Circle>
      <StyledName>Jared Andersen</StyledName>
      <StyledTitle>Student, Developer. Father & Husband.</StyledTitle>
    </StyledBox>
  </StyledHero>
);

const StyledHero = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: calc(80% - 1rem);
`;
const StyledName = styled.h1`
  font-size: 60px;
  width: 100%;

  text-align: center;
`;

const StyledTitle = styled(StyledName)`
  font-size: 20px;
  width: 100%;
  white-space: normal;
`;
const StyledPic = styled.img`
  width: 250px;
  height: 250px;
  margin-top: -100px;
  margin-left: -50px;
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem;
`;
