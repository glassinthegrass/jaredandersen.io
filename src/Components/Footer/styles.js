import styled from 'styled-components'

export const StyledFooter = styled.div`
display: flex;
width: 100vw;
background-color: rgb(69, 91, 116);
flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
`;
 export const FooterBox = styled.nav`
width: calc(100% - 2rem);
height:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 1rem;
`;

export const FooterTitle = styled.h3`
padding: 1rem;
font-size: 30px;
width: calc(100% - 2rem);
text-align: left;
`;
export const FooterSubtitle = styled.p`
padding-left: 2.5rem;
padding-right: 2.5rem;
white-space: normal;
font-size: 16px;
text-align: left;
width: calc(100% - 5rem);
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`;
export const MapSubtitle = styled(FooterSubtitle)`
white-space: nowrap;
cursor: pointer;
`;

export const CopyStrip= styled.div`
width:100%;
height:3rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:black;
`
export const CopyTitle=styled.p`
padding-left:1.5rem;
padding-right:1.5rem;
font-size:14px;
`
export const StyledLink=styled.a`
text-decoration:none;
color:rgb(234,234,234);
&:hover{
color:rgb(69, 91, 116);
};

`
export const StyledEmail=styled.a`
text-decoration:none;
color:rgb(234,234,234);
&:hover{
    color:rgb(216, 222, 164)
}
`