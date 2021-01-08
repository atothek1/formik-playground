import React from "react";
import {
  StyledSwitchContainer,
  StyledSwitchToggle,
  StyledSwitchSlider
} from "./styled";

export function Switch(props) {
  return (
    <StyledSwitchContainer>
      <StyledSwitchToggle {...props} />
      <StyledSwitchSlider />
    </StyledSwitchContainer>
  );
}
