import styled from "styled-components";
import { Col } from "../../layout";

interface StyledInputProps {
  readonly hasError?: boolean;
}
export const StyledField = styled(Col)<StyledInputProps>`
  padding: 0.8rem;
  ${({ hasError }) => !hasError && "padding-bottom: 2.8rem;"}
`;
