import styled from "styled-components";
import { ExternalButton } from "../../styles/BaseComponents";
export const StyledAbout = styled.section`
    padding: 3rem;
    width: (100vw - 6rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 91, 116);
  `,
  StyledBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
  `,
  StyledText = styled.p`
    text-align: left;
    width: 100%;
    line-height: 1.3;
    letter-spacing: 1px;
    white-space: normal;
    font-size: 20px;
  `,
  StyledContactMe = styled(ExternalButton)`
    text-align: center;

    font-size: 24px;
    letter-spacing: 2px;
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
  `;
