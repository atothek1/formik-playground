import styled from "styled-components";
import {
  AlignItems,
  JustifyContent,
  flexCell,
  FlexDirection
} from "../../../utils";

interface StyledColProps {
  readonly alignItems?: AlignItems;
  readonly justifyContent?: JustifyContent;
  readonly padding?: string;
  readonly margin?: string;
}

const StyledCol = styled.div<StyledColProps>`
  ${(props) =>
    flexCell(FlexDirection.COL, props.justifyContent, props.alignItems)}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

StyledCol.defaultProps = {
  padding: undefined,
  margin: undefined
};

export { StyledCol as Col, StyledColProps as ColProps };
