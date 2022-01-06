import React from "react";
import me from "../../public/me.jpeg";
import styled from "styled-components";

export const Hero = () => (
  <StyledHero id="hero">
    <StyledBox>

      <Circle>
        <StyledPic src={me} alt="a" />
      </Circle>
<Space height='2'></Space>

      <StyledName>Jared Andersen</StyledName>
      <StyledTitle>Student, Developer. Father & Husband.</StyledTitle>
      <Space ></Space>
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
  width: 80vw;


`;
const StyledName = styled.h1`
  font-size: 60px;
  width: 100%;
  line-height:1.1;
  white-space: normal;
  text-align: center;
  @media(max-width:400px){
    font-size:50px;
  }
`;

const StyledTitle = styled(StyledName)`
  font-size: 20px;
  width: calc(100% - 1rem);
  padding:0.5rem;
`;
const StyledPic = styled.img`
  width: 250px;
  height: 250px;
  margin-top: -90px;
  margin-left: -50px;
  @media(max-width:400px){
width:325px;
height:325px;
margin-top: -120px;
  margin-left: -70px;
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  @media(max-width:400px){
width:125px;
height:125px;
  }
`;
const Space = styled.span`
width:100%;
height:${props=>props.height ?? 1}rem;
`
