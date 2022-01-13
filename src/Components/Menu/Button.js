import React from "react";
import {ButtonBox,Icon,Title} from './menuStyles'
export const Button = ({ icon, title, handleClick, id }) => (
  <ButtonBox onClick={() => handleClick(id)}>
    <Icon src={icon} />
    <Title>{title}</Title>
  </ButtonBox>
);

