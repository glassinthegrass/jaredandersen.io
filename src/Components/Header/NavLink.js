import React from "react";
import styled from "styled-components";

export const NavLink = ({ handleClick, id, title,fontSize }) => (
  <Link fontSize={fontSize} onClick={() => handleClick(id)}>{title}</Link>
);

const Link = styled.h6`
  font-size: ${props=>props.fontSize ?? 12}px;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;
