import { onDarkText, dark } from "./../../../blog/src/global/colors";
import styled from "styled-components";

export const Wrapper = styled.span`
  margin: 0;
  display: grid;
  min-height: 100%;
  grid-template-areas:
    "nav"
    "main-content";
  grid-template-rows: auto 1fr;
`;

export const Navigation = styled.span`
  grid-area: nav;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${onDarkText};
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${dark};
  .github {
    margin-left: auto;
    padding: 0.4em;
  }
`;

export const Main = styled.main`
  grid-area: main-content;
`;

export const Footer = styled.footer`
  /* grid-row-start, grid-column-start, grid-row-end , and grid-column-end. */
  grid-area: 3 / 1 / 4 / 1;
  background-color: #ddd;
  display: grid;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 0.8em;
  height: 10em;
`;
