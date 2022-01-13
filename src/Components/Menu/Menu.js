import React from "react";
import {MenuBox,MenuAside,FadedAside} from './menuStyles'
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
