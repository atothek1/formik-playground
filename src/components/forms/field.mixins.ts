import { css } from "styled-components";

export const fieldBorderStyles = css`
  border: solid 0.1rem #dedede;
  border-radius: 0.4rem;
`;

export const basicFieldStyles = css`
  ${fieldBorderStyles}

  outline: none;
  appearance: none;

  height: 2.4rem;
  width: 100%;

  background-color: #ffffff;

  padding-left: 0.8rem;
  padding-right: 0.8rem;

  :focus {
    border: solid 0.1rem #78bed6;
  }
  :disabled {
    background-color: lightgrey;
  }
`;
