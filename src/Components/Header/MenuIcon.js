import React from 'react'
import styled from 'styled-components'

export const MenuIcon = ({toggle})=>(
    <IconBox onClick={toggle}>
      <Bar />
      <Bar />
      <Bar />
    </IconBox>
)

const IconBox = styled.span`
  @media (min-width: 550px) {
    display: none;
  }
  height: calc(2rem - 1px);
  width: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(69, 91, 116);
  border-bottom: 1px solid rgb(0, 0, 0);
  border-right: 1px solid rgb(0, 0, 0);
  cursor: pointer;
`;
const Bar = styled.span`
  height: 0.3rem;
  width: 100%;
  margin: 1px;
  background-color: rgb(234, 234, 234);
  border-radius: 50px 50px 50px 50px;
`;