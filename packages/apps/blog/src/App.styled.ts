import { dark, onDarkText } from "./global/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${onDarkText};
    background-color: ${dark};
    overflow-x: hidden;
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
  }

  a {
    //fixme: make it customizable in external ui package
    color: ${onDarkText} !important;
    text-decoration: none;
    color: unset;
  }
`;
