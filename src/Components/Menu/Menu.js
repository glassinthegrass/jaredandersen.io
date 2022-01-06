import React from "react";
import styled from "styled-components";
import me from "../../public/aboutme.png";
import portfolio from "../../public/portfolio.png";
import experience from "../../public/experience.png";

export const Menu = ({ menuToggle, handleNavigation, handleMenu }) => {
    const handleClick=(id)=>{
        handleMenu();
        handleNavigation(id)
    }

  let display = (
    <StyledMenuBox menuToggle={menuToggle}>
      <MenuAside>
        <Box onClick={() => handleClick("about")}>
          <Icon src={me} />
          <Button>About me</Button>
        </Box>
        <Box onClick={() => handleClick("portfolio")}>
          <Icon src={portfolio} />
          <Button>Portfolio</Button>
        </Box>
        <Box onClick={() => handleClick("experience")}>
          <Icon src={experience} />
          <Button>Experience</Button>
        </Box>
      </MenuAside>
      <Hidden onClick={handleMenu}></Hidden>
    </StyledMenuBox>
  );

  return display;
};
const StyledMenuBox = styled.div`
  width: 100vw;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  display: ${(props) => (props.menuToggle ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MenuAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  background-color: rgb(100, 100, 100);
`;
const Hidden = styled.aside`
  width: 100%;
  height: 100%;
  background-color: rgb(234, 234, 234, 0.7);
`;
const Button = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0.3rem;
  text-align: left;
  cursor:pointer;
  `;
  const Box = styled.span`
  
  display: flex;
  width: calc(100% - 2rem);
  justify-content: center;
  align-items: center;
  padding: 1rem;

  `;
  const Icon = styled.img`
  height: 2rem;
`;
