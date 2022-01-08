import React from "react";
import styled from "styled-components";
export const Button = ({ icon, title, handleClick, id }) => (
  <ButtonBox onClick={() => handleClick(id)}>
    <Icon src={icon} />
    <Title>{title}</Title>
  </ButtonBox>
);

const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0.3rem;
  text-align: left;
`;
const ButtonBox = styled.span`
  display: flex;
  width: calc(100% - 2rem);
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;
const Icon = styled.img`
  height: 2rem;
`;
