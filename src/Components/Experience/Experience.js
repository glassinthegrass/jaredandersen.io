import React, { useEffect } from "react";
import styled from "styled-components";
import resume from "../../public/JaredAndersen-Resume.pdf";
export const Experience = () => {
  useEffect(() => {
    const x = document.querySelector(`#resume`);
    x.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <StyledResume>
      <Space id="resume"></Space>
      <Framed src={resume} />
    </StyledResume>
  );
};
const StyledResume = styled.div`
  width: 100vw;
  height: 100vh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.span`
  height: 3rem;
  width: 100%;
`;
const Framed = styled.iframe`
  width: 100%;
  height: 100%;
  background-color:rgb(234,234,234);
`;
