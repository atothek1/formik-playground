import { Field } from "formik";
import styled from "styled-components";
import { basicFieldStyles } from "../field.mixins";

const StyledTextinput = styled(Field)`
  ${basicFieldStyles};
`;

export { StyledTextinput as Textinput };
