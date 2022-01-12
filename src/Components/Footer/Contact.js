import React from 'react';
import { FooterBox,FooterTitle, FooterSubtitle, StyledEmail } from './styles';
export const Contact=()=>(
    <FooterBox as="address">
      <FooterTitle>Contact Me</FooterTitle>
      <FooterSubtitle>
        Email:{" "}
        <StyledEmail
          href="mailto:thejaredandersen@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          thejaredandersen@gmail.com
        </StyledEmail>
      </FooterSubtitle>
      <FooterSubtitle>Phone: 1(480) 494-7356</FooterSubtitle>
      <FooterSubtitle>Discord: thejaredandersen#6061</FooterSubtitle>
    </FooterBox>
)