import styled from "styled-components";
import { flexContainer } from "../../../utils";

interface StyledGridProps {
  readonly padding?: string;
  readonly margin?: string;
  readonly asRow?: boolean;
}

const StyledGrid = styled.div<StyledGridProps>`
  ${(props) => flexContainer(props.asRow)}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

StyledGrid.defaultProps = {
  padding: undefined,
  margin: undefined,
  asRow: false
};

export { StyledGrid as Grid, StyledGridProps as GridProps };
