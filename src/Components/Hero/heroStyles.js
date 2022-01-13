import styled from "styled-components";
export const StyledHero = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  StyledBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
  `,
  StyledName = styled.h1`
    font-size: 60px;
    width: 100%;
    line-height: 1.1;
    white-space: normal;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 50px;
    }
  `,
  StyledTitle = styled(StyledName)`
    font-size: 20px;
    width: calc(100% - 1rem);
    padding: 0.5rem;
  `,
  StyledPic = styled.img`
    width: 250px;
    height: 250px;
    margin-top: -90px;
    margin-left: -50px;
    @media (max-width: 400px) {
      width: 325px;
      height: 325px;
      margin-top: -120px;
      margin-left: -70px;
    }
  `,
  StyledCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 400px) {
      width: 125px;
      height: 125px;
    }
  `,
  StyledSpace = styled.span`
    width: 100%;
    height: ${(props) => props.height ?? 1}rem;
  `;
