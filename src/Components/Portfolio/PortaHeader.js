import React from 'react'
import styled from 'styled-components'

export const PortaHeader =({title})=>(
    <PortfolioTitleDiv>
    <Title>{title}</Title>
  </PortfolioTitleDiv>
)

const PortfolioTitleDiv = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 60px;
`;