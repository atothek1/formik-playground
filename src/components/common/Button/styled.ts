import styled, { css } from "styled-components";

export const buttonStyle = css`
  height: 3.2rem;
  width: auto;
  border-radius: 0.4rem;
  background-color: #78bed6;
  text-align: center;
  border: 0;
  outline: none;
  color: white;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  :disabled {
    background-color: lightgrey;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyle}
`;
