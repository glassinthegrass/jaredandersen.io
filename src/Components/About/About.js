import React from "react";
import styled from "styled-components";

export const About = ({ handleNavigation }) => (
  <StyledAbout id="about">
    <StyledBox>
      <StyledTitle as="h1">Nice To Meet You!</StyledTitle>
      <StyledBox>
        <StyledText>
          I'm Jared Andersen, and I just moved to Maryville, TN.
        </StyledText>
        <StyledText>
          I recently graduated{" "}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            href="https://devmountain.com"
          >
            DevMountain
          </StyledLink>{" "}
          Web Development program.
        </StyledText>
        <StyledText>
          I love programming, as well as Hiking, taking photos of my dogs and
          learning new things!
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
const StyledAbout = styled.section`
  padding: 3rem;
  width: (100vw - 6rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(69, 91, 116);
`;
const StyledBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;
const StyledText = styled.p`
  text-align: left;
  width: 100%;
  line-height: 1.3;
  letter-spacing: 1px;
  white-space: normal;
  font-size: 20px;
`;
const StyledContactMe = styled.div`
  text-align: center;
  padding-left: 3px;
  padding-right: 3px;
  cursor: pointer;
  font-size: 26px;
  line-height: 1.1;

  white-space: normal;
  border-radius: 4px;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(234,234,234);
  text-shadow: -0.5px -0.5px 0 rgb(88, 88,88),
    0.5px -0.5px 0 rgb(88,88,88), -0.5px 0.5px 0 rgb(88,88,88),
    0.5px 0.5px 0 rgb(88,88,88);
  &:hover {
    color: rgb(234, 234, 234);
    text-shadow: -0.5px -0.5px 0 rgb(69, 91, 116),
      0.5px -0.5px 0 rgb(69, 91, 116), -0.5px 0.5px 0 rgb(69, 91, 116),
      0.5px 0.5px 0 rgb(69, 91, 116);
  }
  &:active {
    color: rgb(69, 91, 116);
    background-color: rgb(234, 234, 234);
  }
  @media(min-width:500px){
    letter-spacing:2px;
    color:rgb(69, 91, 116);
    text-shadow: -0.5px -0.5px 0 rgb(234, 234, 234), 0.5px -0.5px 0 rgb(234, 234, 234),
      -0.5px 0.5px 0 rgb(234, 234, 234), 0.5px 0.5px 0 rgb(234, 234, 234);
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  padding-left: 3px;
  padding-right: 3px;
  padding: 1px;
  border-radius: 4px;
  font-size:20px;
  font-weight:bold;
  color:rgb(234,234,234);
    text-shadow: -0.5px -0.5px 0 rgb(88,88,88), 0.5px -0.5px 0 rgb(88,88,88),
      -0.5px 0.5px 0 rgb(88,88,88), 0.5px 0.5px 0 rgb(88,88,88);
  &:hover{
  
  color:rgb(234,234,234);
  text-shadow: -0.5px -0.5px 0 rgb(69,91,116), 0.5px -0.5px 0 rgb(69,91,116),
      -0.5px 0.5px 0 rgb(69,91,116), 0.5px 0.5px 0 rgb(69,91,116);
  };
  &:active{
    color:rgb(69,91,116);
    background-color:rgb(234,234,234);
  }
  @media(min-width:500px){
    color:rgb(69, 91, 116);
    text-shadow: -0.5px -0.5px 0 rgb(234, 234, 234), 0.5px -0.5px 0 rgb(234, 234, 234),
      -0.5px 0.5px 0 rgb(234, 234, 234), 0.5px 0.5px 0 rgb(234, 234, 234);
  }
`;
const StyledTitle = styled(StyledText)`
  padding: 1rem;
  width: calc(100% - 2rem);
`;
