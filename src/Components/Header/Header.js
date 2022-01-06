import React from "react";
import styled from "styled-components";

export const Header = ({ handleMenu,handleNavigation, highlight }) => (
  <StyledHeader highlight={highlight}>
    <MenuIcon onClick={handleMenu} >
    <MenuBar />
    <MenuBar />
    <MenuBar />
    </MenuIcon>
    <Headline onClick={() => handleNavigation("hero")}>
      Jared Andersen
    </Headline>
    <LinkBox>

      <Links onClick={() => handleNavigation("about")}>About me</Links>
      <Links onClick={() => handleNavigation("portfolio")}>Portfolio</Links>
      <Links onClick={() => handleNavigation("experience")}>Experience</Links>
    </LinkBox>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  ${(props) =>
    (props.highlight) 
      ? `background-color:rgb(69,91,116);  
      border-radius-bottom: 50%;
    box-shadow: 0 0 50px rgb(234,234,234);`
      : ""};

`;

const Headline = styled.h1`
  font-size: 1em;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem;
  cursor:pointer;
`;
const Links = styled.h6`
  font-size: 1em;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
cursor:pointer;
`;
const MenuIcon = styled.span`
  @media (min-width:550px) {
    display: none;
  }
  height: calc(2rem - 1px);
  width:2rem;
  padding:0.5rem;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  background-color:rgb(69,91,116);
  border-bottom:1px solid rgb(0,0,0);
  border-right:1px solid rgb(0,0,0);
  cursor:pointer;
`;
const MenuBar=styled.div`
height:0.3rem;
width:100%;
margin:1px;
background-color:rgb(234,234,234);
border-radius:50px 50px 50px 50px;
`

const LinkBox = styled.span`
  @media (min-width: 550px) {
    padding-right: 1rem;
    height: 3rem;
    display: flex;
  }
  display: none;
`;
