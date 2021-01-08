import { Field } from "formik";
import styled from "styled-components";

export const StyledSwitchSlider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 2.4rem;
  :before {
    position: absolute;
    content: "";
    height: 2rem;
    width: 2rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const StyledSwitchToggle = styled(Field).attrs({ type: "checkbox" })`
  outline: none;
  appearance: none;
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${StyledSwitchSlider} {
    background-color: #2196f3;
  }
  :checked + ${StyledSwitchSlider}:before {
    transform: translateX(2.4rem);
  }
  :focus + ${StyledSwitchSlider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

export const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  height: 2.4rem;
  width: 4.8rem;
`;
