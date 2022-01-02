import React from 'react';
import styled from 'styled-components';

export const Footer =({handleNavigation})=>(
    <StyledFooter id='footer'>
        <FooterBox>
            <FooterTitle>Contact Me</FooterTitle>
            <FooterSubtitle>Email: thejaredandersen@gmail.com</FooterSubtitle>
            <FooterSubtitle>Phone: 1(480) 494-7356</FooterSubtitle>
            <FooterSubtitle>Discord: thejaredandersen#6061</FooterSubtitle>
        </FooterBox>
        <FooterBox>
            <FooterTitle>Site Map</FooterTitle>
            <FooterSubtitle onClick={()=>handleNavigation('about')}>About Me</FooterSubtitle>
            <FooterSubtitle onClick={()=>handleNavigation('portfolio')}>Portfolio</FooterSubtitle>
        </FooterBox>
        
    </StyledFooter>
)

const StyledFooter=styled.div`
width:calc(100vw - 2rem);
display:flex;
justify-content:center;
align-items:flex-start;
background-color:rgb(69,91,116);
padding:1rem;
`
const FooterBox= styled.span`
width:50%;

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
`
const FooterTitle =styled.h3`
padding:1.5rem;
font-size:25px;
width:calc(100% - 3rem);
text-align:left;
`
const FooterSubtitle=styled.p`
padding-left:1.5rem;
padding-right:1.5rem;
font-size:15px;
text-align:left;
width:calc(100% - 3rem);
padding-top:0.5rem;
padding-bottom:0.5rem;
`