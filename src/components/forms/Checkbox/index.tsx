import { Field } from "formik";
import styled from "styled-components";
import { basicFieldStyles } from "../field.mixins";

const StyledCheckbox = styled(Field).attrs({ type: "checkbox" })`
  ${basicFieldStyles}
  height: 1.6rem;
  width: 1.6rem;

  padding-left: 0;
  padding-right: 0;

  margin-top: 0.4rem;
  margin-bottom: 0.4rem;

  :checked {
    outline: none;
    appearance: none;
    background-position: center;
    background-size: contain;
    background-repeat: none;
    background-image: url("./checkmark.svg");
  }
`;

export { StyledCheckbox as Checkbox };
