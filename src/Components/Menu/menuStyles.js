import styled,{keyframes} from "styled-components";
export const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding: 0.3rem;
    text-align: left;
  `,
  ButtonBox = styled.span`
    display: flex;
    width: calc(100% - 2rem);
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
  `,
  Icon = styled.img`
    height: 2rem;
  `,
  showMenu = keyframes`
    from {
      margin-left: -10rem;
    }
    to {
      margin-left: 0;
    }
  `,
  showAside = keyframes`
    from {
      background-color: rgb(234, 234, 234, 0);
    }
    to {
      background-color: rgb(234, 234, 234, 0.7);
    }
  `,
  MenuBox = styled.div`
    width: 100vw;
    height: 100%;
    position: sticky;
    top: 0;
    z-index: 3;
    display: ${(props) => (props.menuToggle ? "flex" : "none")};
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  MenuAside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 100%;
    background-color: rgb(100, 100, 100);
    animation: ${showMenu} 0.25s ease-in 0s 1;
  `,
  FadedAside = styled.aside`
    width: 100%;
    height: 100%;
    background-color: rgb(234, 234, 234, 0.7);
    animation: ${showAside} 0.25s ease-in 0s 1;
  `;
