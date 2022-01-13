import React from 'react';
import { StyledFooterBox,StyledFooterTitle, StyledFooterSubtitle, StyledEmail } from './footerStyles';
export const Contact=()=>(
    <StyledFooterBox as="address">
      <StyledFooterTitle>Contact Me</StyledFooterTitle>
      <StyledFooterSubtitle>
        Email:{" "}
        <StyledEmail as='a'
          href="mailto:thejaredandersen@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          thejaredandersen@gmail.com
        </StyledEmail>
      </StyledFooterSubtitle>
      <StyledFooterSubtitle>Phone: 1(480) 494-7356</StyledFooterSubtitle>
      <StyledFooterSubtitle>Discord: thejaredandersen#6061</StyledFooterSubtitle>
    </StyledFooterBox>
)