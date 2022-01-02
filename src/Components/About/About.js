import React from 'react';
import styled from 'styled-components';

export const About=({handleNavigation})=>(
<StyledAbout id='about' >
    <StyledBox>
<StyledText>Nice To Meet You!</StyledText>
<StyledText>I'm Jared Andersen, and I just moved to Maryville, TN! <br/>
I love programming, as well as Hiking, taking photos of my dogs and learning new things!<br/>
Feel free to get in touch or take a look at my past work below.</StyledText>
<StyledContactMe onClick={()=>handleNavigation('footer')}>Contact Me</StyledContactMe>
    </StyledBox>

</StyledAbout>
)
const StyledAbout=styled.section`
width:100vw;
min-height:30vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-color:rgb(69,91,116);
`
const StyledBox= styled.span`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding:1rem;
width:80%;
padding-top:2rem;
`
const StyledText=styled.h3`
text-align:left;
width:calc(100% - 2rem);
padding:1rem;
line-height:1.5;
letter-spacing:1px;
white-space:normal;
`
const StyledContactMe=styled(StyledText)`
text-align:center;
padding:0;
`