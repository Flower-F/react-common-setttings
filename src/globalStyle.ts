import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  ul, li {
    list-style: none;
  }
`;
