import React from "react";
import {StyledWebCard,StyledBox,StyledIcon,StyledName,StyledDescription,StyledLinkBox,StyledLink,StyledSource} from "./portfolioStyles";

export const Webcard = ({icon,siteName,siteDescription,siteUrl,githubUrl,}) => (
  <StyledWebCard>
    <StyledBox>
      <StyledIcon src={icon} alt={siteName} />
      <StyledName>{siteName}</StyledName>
      <StyledDescription as="h6">{siteDescription}</StyledDescription>
    </StyledBox>
    <StyledLinkBox>
      <StyledLink as="a" target="_blank" rel="noopener" href={siteUrl}>
        Visit Website
      </StyledLink>
      <StyledSource as="a" target="_blank" rel="noopener" href={githubUrl}>
        View Sites Github
      </StyledSource>
    </StyledLinkBox>
  </StyledWebCard>
);