import styled from "styled-components";
import React from "react";
import { Col, ColProps, Row, RowProps } from "../../layout";
import { basicFieldStyles, fieldBorderStyles } from "../field.mixins";
import { flexCell, FlexDirection } from "../../../utils";

interface StyledSelectProps {
  readonly isOpen: boolean;
  readonly children?: React.ReactNode;
}
interface StyledOptionProps extends RowProps {
  readonly value: string | null;
}
export const StyledOption = styled(Row)<StyledOptionProps>`
  height: 2.4rem;
  position: realtive;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;
export const StyledOptionContainer = styled(Col)<ColProps>`
  ${fieldBorderStyles}
  width: calc(100% - 1.6rem);
  height: auto;
  position: absolute;
  z-index: 1000;
  background-color: white;
  margin-top: 2.4rem;
  ${StyledOption} {
    :hover {
      background-color: aliceblue;
    }
  }
`;
export const StyledSelectContainer = styled(Col)``;
export const StyledSelect = styled.button<StyledSelectProps>`
  ${(props) =>
    flexCell(
      FlexDirection.COL,
      props.isOpen ? "flex-start" : "center",
      "flex-start"
    )}

  ${basicFieldStyles}

  padding-left: 0;
  padding-right: 0;

  background-repeat: no-repeat;
  background-size: 1.2rem;
  background-color: #ffffff;
  background-position: calc(100% - 0.8rem);
  background-image: url("./arrow-down.svg");
`;
