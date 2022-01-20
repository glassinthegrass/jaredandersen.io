import styled from "styled-components";
import { ExternalButton } from "../../styles/BaseComponents";
export const StyledFooter = styled.div`
    display: flex;
    width: 100vw;
    background-color: rgb(69, 91, 116);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  StyledFooterBox = styled.nav`
    width: calc(100% - 2rem);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
  `,
  StyledFooterTitle = styled.h3`
    padding: 0.5rem;
    font-size: 26px;
    font-weight:600;
    width: calc(100% - 1rem);
    text-align: left;
    @media (min-width: 500px;) {
      padding: 1rem;
      font-size: 30px;
      width: calc(100% - 2rem);
    }
  `,
  StyledFooterSubtitle = styled.p`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 3rem);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    @media (min-width: 500px) {
      font-size: 18px;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  `,
  StyledMapSubtitle = styled(StyledFooterSubtitle)`
    white-space: nowrap;
    cursor: pointer;
  `,
  StyledCopyStrip = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
  `,
  StyledCopyTitle = styled.p`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 10px;
    @media (min-width: 425px) {
      font-size: 14px;
    }
  `,
  StyledLink = styled.a`
    text-decoration: none;
    color: rgb(234, 234, 234);
    &:hover {
      color: rgb(69, 91, 116);
    }
  `,
  StyledEmail = styled(ExternalButton)`
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 1px;
    font-size: 15px;
    @media (min-width: 400px) {
      letter-spacing: 1.5px;
      font-size: 16px;
    }
    @media (min-width: 500px) {
      font-size: 18px;
      letter-spacing: 1.75px;
      font-weight:600;
    }
  `,
  StyledMovingBox = styled.span`
    display: flex;
    width: calc(100vw - 2rem);
    background-color: rgb(69, 91, 116);
    padding: 1rem;
    flex-direction: column;
    @media (min-width: 775px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  `;
