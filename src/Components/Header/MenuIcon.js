import React from 'react'
import { StyledIconBox,StyledIconBar } from './headerStyles'

export const MenuIcon = ({toggle})=>(
    <StyledIconBox onClick={toggle}>
      <StyledIconBar />
      <StyledIconBar />
      <StyledIconBar />
    </StyledIconBox>
);