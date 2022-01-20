import React, { useEffect } from "react";
import { StyledResume,StyledSpace,StyledFrame } from "./experienceStyles";
import resume from "../../assets/JaredAndersen-Resume.pdf";
export const Experience = () => {
  useEffect(() => {
    const x = document.querySelector(`#experience`);
    x.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <StyledResume >
      <StyledSpace id="experience"/>
      <StyledFrame src={resume} />
    </StyledResume>
  );
};
