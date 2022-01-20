import styled from "styled-components";
import { ExternalButton, InternalButton } from "../../styles/BaseComponents";

export const StyledAbout = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(69, 91, 116);
  `,
  StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 80%;
  `,
  StyledText = styled.p`
    text-align: left;
    width: 100%;
    letter-spacing: 1px;
    white-space: normal;
    font-size: 18px;
  `,
  StyledContactMe = styled(InternalButton)`
    text-align: center;
    font-size: 18px;
    letter-spacing: 2px;
    margin: 0.5rem;
    padding: 0.5rem 2rem;
  `,
  StyledLink = styled(ExternalButton)`
    padding-left: 0;
    padding-right: 0;
    font-weight: normal;
    letter-spacing: 1.5px;
  `,
  StyledTitle = styled(StyledText)`
    padding: 1rem;
    width: calc(100% - 2rem);
    font-size:22px;
  `;
