import styled from "styled-components";
import background from "../assets/background.jpg";
export const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: ${(props) => (props.menuToggle ? "hidden" : "auto")};
`;
