import React from "react";
import {ButtonBox,Icon,Title} from './menuStyles'
export const Button = ({ icon, title, handleClick, to }) => (
  <ButtonBox onClick={() => handleClick(to)}>
    <Icon src={icon} />
    <Title>{title}</Title>
  </ButtonBox>
);

