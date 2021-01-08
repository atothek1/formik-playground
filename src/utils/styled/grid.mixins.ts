import { css } from "styled-components";
import { AlignItems, FlexDirection, JustifyContent } from "./types";

export function flexContainer(asRow = false) {
  return css`
    display: flex;
    flex-direction: ${asRow ? "row" : "column"};
    width: 100%;
    height: 100%;
  `;
}

export function flexCell(
  direction: FlexDirection,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems
) {
  return css`
    ${flexContainer()};
    flex-direction: ${direction};
    ${direction === FlexDirection.ROW && "height: auto;"}
    ${justifyContent && "justify-content: " + justifyContent};
    ${alignItems && "align-items: " + alignItems};
  `;
}
