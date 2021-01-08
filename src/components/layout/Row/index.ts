import styled from "styled-components";
import {
  AlignItems,
  JustifyContent,
  flexCell,
  FlexDirection
} from "../../../utils";

interface StyledRowProps {
  readonly alignItems?: AlignItems;
  readonly justifyContent?: JustifyContent;
  readonly padding?: string;
  readonly margin?: string;
  readonly width?: string;
}

const StyledRow = styled.div<StyledRowProps>`
  ${(props) =>
    flexCell(FlexDirection.ROW, props.justifyContent, props.alignItems)}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

StyledRow.defaultProps = {
  padding: undefined,
  margin: undefined
};

export { StyledRow as Row, StyledRowProps as RowProps };
