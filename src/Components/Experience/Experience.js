import React from "react";
import { StyledResume,StyledSpace,StyledFrame } from "./experienceStyles";
import resume from "../../assets/JaredAndersen-Resume.pdf";
export const Experience = () => (
    <StyledResume >
      <StyledSpace id="experience"/>
      <StyledFrame src={resume} />
    </StyledResume>
  );
