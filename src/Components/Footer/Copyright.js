import React from "react";
import { StyledCopyStrip, StyledCopyTitle, StyledLink } from "./footerStyles";
export const Copyright = ({ fullDate }) => (
  <StyledCopyStrip>
    <StyledCopyTitle>© 2021-{fullDate.getFullYear()} Jared Andersen</StyledCopyTitle>
    <StyledCopyTitle>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://github.com/glassinthegrass/jaredandersen.io"
      >
        View sites Github
      </StyledLink>
    </StyledCopyTitle>
  </StyledCopyStrip>
);
