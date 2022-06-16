import { dark, onDarkText } from "./global/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${onDarkText};
    background-color: ${dark};
    overflow-x: hidden;
  }
  a{
    //fixme: make it customizable in external ui package
    color: ${onDarkText} !important;
  }
`;
