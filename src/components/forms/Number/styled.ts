import styled from "styled-components";
import { basicFieldStyles } from "../field.mixins";
import { Row } from "../../layout";

export const StyledNumberInput = styled.input`
  ${basicFieldStyles};
  appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

interface StyledNumberButtonProps {
  readonly type: "inc" | "dec";
}
export const StyledNumberButton = styled.div<StyledNumberButtonProps>`
  width: 2.4rem;
  height: 1.2rem;
  text-align: center;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  background-color: white;
  margin-left: -4px;
  user-select: none;

  ${(props) =>
    props.type === "inc" &&
    `
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  border-top-right-radius: 0.4rem;

  `}
  ${(props) =>
    props.type === "dec" &&
    `
  border-bottom: 1px solid #dedede;
  border-bottom-right-radius: 0.4rem;
  `}
`;

export const StyledNumber = styled(Row)``;
