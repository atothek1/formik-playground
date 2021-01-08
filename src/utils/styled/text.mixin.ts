import { css } from "styled-components";

export function textNormal(bold = false) {
  return css`
    font-size: 1.6rem;
    ${bold && `font-weight: bold`}
  `;
}
