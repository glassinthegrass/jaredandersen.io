import React from "react";
import { CopyStrip, CopyTitle, StyledLink } from "./styles";
export const Copyright = ({ fullDate }) => (
  <CopyStrip>
    <CopyTitle>© 2021-{fullDate.getFullYear()} Jared Philip Andersen</CopyTitle>
    <CopyTitle>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://github.com/glassinthegrass/jaredandersen.io"
      >
        View Sites Github
      </StyledLink>
    </CopyTitle>
  </CopyStrip>
);