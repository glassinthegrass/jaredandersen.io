import React from 'react';
import styled from 'styled-components';

export const Resume=()=>(
    <StyledResume>
        <Framed src='https://docs.google.com/document/d/1T-DQreBqqpRd8OXgLEd3KtBHSF2Snv1F0Ok760JMma4/edit?usp=sharing' />
    </StyledResume>
)
const StyledResume = styled.div`

`
const Framed = styled.iframe`
width:100vw;
height:100vh;
border:none;
`