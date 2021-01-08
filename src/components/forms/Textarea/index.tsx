import { Field } from "formik";
import styled from "styled-components";
import { basicFieldStyles } from "../field.mixins";

const StyledTextarea = styled(Field).attrs({ component: "textarea" })`
  ${basicFieldStyles}

  resize: none;
  height: calc(2.8rem * 3);
`;

export { StyledTextarea as Textarea };
