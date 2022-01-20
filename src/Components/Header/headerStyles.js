import styled from "styled-components";
import { InternalButton } from "../../styles/BaseComponents";
export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 3rem;
    width: 100%;
    display: ${(props) => (props.menuToggle ? "none" : "flex")};
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    ${(props) =>
      props.highlight
        ? `background-color:rgb(69,91,116);
           border-radius-bottom: 50%; 
           box-shadow: 0 0 50px rgb(234,234,234,0.8);`
        : ""};
  `,
  StyledNavBox = styled.nav`
    display: none;
    @media (min-width: 550px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
height:100%;
      display: flex;
    }
  `,
  StyledIconBox = styled.span`
    height: calc(2rem - 1px);
    width: 2rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(69, 91, 116);
    border-bottom: 1px solid rgb(0, 0, 0);
    border-right: 1px solid rgb(0, 0, 0);
    cursor: pointer;
    @media (min-width: 550px) {
      display: none;
    }
  `,
  StyledIconBar = styled.span`
    height: 0.3rem;
    width: 100%;
    margin: 1px;
    background-color: rgb(234, 234, 234);
    border-radius: 50px 50px 50px 50px;
  `,
  StyledTitleBox= styled.div`

  width:100%;
  display:flex;
  align-items:center
  justify-content:flex-start;
  height:100%;
  `,
  StyledTitleLink=styled(InternalButton)`
display:flex;
align-items:center;
  padding: 1rem;
  margin:0.3rem;
font-size:22px;
  border-radius:10px;
  border:1px solid rgb(234,234,234,0);
  &:active{
    border:1px solid rgb(0,0,0,0);
    background-color:rgb(0,0,0,0);
  }
  `,
  StyledLink = styled(InternalButton)`
    font-size: 16px;
          padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    border:none;
    border:1px solid rgb(234,234,234,0);
  `;
