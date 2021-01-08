import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  * {
    box-sizing: border-box;
  }
  html { 
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  body {
    height: 100vh;
    font-size: 1.2rem;
    #root {
      height: 100%;
    }
  }
  p, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
`;

export { GlobalStyle };
