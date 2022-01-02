import React from 'react';
import styled from 'styled-components';

export const Webcard=({icon,siteName,siteDescription,siteUrl,githubUrl})=>(
<StyledWebCard>
<StyledBox>
    <StyledIcon src={icon} alt={siteName}/>
    <StyledName>{siteName}</StyledName>
    <StyledDescription as='h6'>{siteDescription}</StyledDescription>
</StyledBox>
<StyledBox>
<SiteLink  as='a' target="_blank" rel="noopener" href={siteUrl}>Visit Website</SiteLink>
<SiteSource  as='a' target="_blank" rel="noopener" href={githubUrl}>Site Source Code</SiteSource>
</StyledBox>
</StyledWebCard>
)
const StyledWebCard=styled.span`
width:275px;
height:375px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:1.5rem;
padding-bottom:0;
padding-top:1rem;
background-color:rgb(69,91,116);
border-radius:10px 10px 10px 10px;
`
const StyledBox=styled.span`

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100%;
`
const StyledIcon=styled.img`
height:100px;
margin:1rem;
background-color:rgb(234,234,234);
`
const StyledName=styled.h3`
width:100%;
font-size:30px;
`
const StyledDescription=styled(StyledName)`
font-size:14px;
white-space:normal;
`
const SiteLink=styled(StyledDescription)`
font-size:20px;
text-decoration:none;
color:rgb(234,234,234);
`

const SiteSource =styled(SiteLink)`
font-size:8px;
`

