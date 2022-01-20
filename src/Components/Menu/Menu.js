import React from "react";
import {MenuBox,MenuAside,FadedAside} from './menuStyles'
import me from "../../assets/aboutme.png";
import portfolio from "../../assets/portfolio.png";
import experience from "../../assets/experience.png";
import { Button } from "./Button";

export const Menu = ({ menuToggle, handleClick,handleMenu }) => (
    <MenuBox menuToggle={menuToggle}>
      <MenuAside>
      <Button to='about' icon={me} title='about me' handleClick={handleClick(menuToggle)}/>
      <Button to='portfolio' icon={portfolio} title='portfolio' handleClick={handleClick(menuToggle)}/>
      <Button to='experience' icon={experience} title='experience' handleClick={handleClick(menuToggle)}/>
      </MenuAside>
      <FadedAside onClick={handleMenu}></FadedAside>
    </MenuBox>
  );
