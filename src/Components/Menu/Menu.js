import React from "react";
import styled, { keyframes } from "styled-components";
import me from "../../assets/aboutme.png";
import portfolio from "../../assets/portfolio.png";
import experience from "../../assets/experience.png";
import { Button } from "./Button";

export const Menu = ({ menuToggle, handleClick,handleMenu }) => (
    <MenuBox menuToggle={menuToggle}>
      <MenuAside>
      <Button id='about' icon={me} title='about me' handleClick={handleClick}/>
      <Button id='portfolio' icon={portfolio} title='portfolio' handleClick={handleClick}/>
      <Button id='experience' icon={experience} title='experience' handleClick={handleClick}/>
      </MenuAside>
      <FadedAside onClick={handleMenu}></FadedAside>
    </MenuBox>
  );
const showMenu = keyframes`
from{margin-left:-10rem;}
to{margin-left:0;}
`;
const showAside = keyframes`
from{background-color:rgb(234,234,234,0);}
to{background-color:rgb(234,234,234,0.7);}
`;

const MenuBox = styled.div`
  width: 100vw;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  display: ${(props) => (props.menuToggle ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MenuAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  background-color: rgb(100, 100, 100);
  animation: ${showMenu} 0.25s ease-in 0s 1;
`;
const FadedAside = styled.aside`
  width: 100%;
  height: 100%;
  background-color: rgb(234, 234, 234, 0.7);
  animation: ${showAside} 0.25s ease-in 0s 1;
`;
