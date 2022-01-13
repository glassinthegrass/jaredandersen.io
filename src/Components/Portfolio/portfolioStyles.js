import styled from "styled-components";
import { ExternalButton } from "../../styles/BaseComponents";

export const StyledPortfolio = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
  `,
  StyledMain = styled.div`
    width: calc(100vw - 6rem);
    background-color: rgb(234, 234, 234);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem;
    padding-top: 4rem;
  `,
  StyledTitleDiv = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  StyledTitle = styled.h1`
    font-size: 60px;
  `,
  StyledWebCard = styled.span`
    width: 275px;
    height: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    background-color: rgb(69, 91, 116);
    border-radius: 5px;
    box-shadow: 0 10px 6px -6px #777;
  `,
  StyledBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  `,
  StyledLinkBox = styled(StyledBox)`
    align-items: flex-start;
  `,
  StyledIcon = styled.img`
    height: 100px;
    margin: 1rem;
    background-color: rgb(234, 234, 234);
  `,
  StyledName = styled.h3`
    width: 100%;
    font-size: 30px;
  `,
  StyledDescription = styled(StyledName)`
    font-size: 14px;
    white-space: normal;
  `,
  StyledLink = styled(ExternalButton)`
    text-decoration: none;
    font-size: 22px;
    padding-left:3px;
    padding-right3px;
    @media(min-width:500px){
        letter-spacing:1.25px;
    }
    `,
  StyledSource = styled(StyledLink)`
    font-size: 14.5px;
    letter-spacing: 2px;
  `;
