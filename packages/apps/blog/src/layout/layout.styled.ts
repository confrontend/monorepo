import styled from "styled-components";
import { dark } from "../global/colors";

export const Wrapper = styled.span`
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
  background-color: ${dark};
`;

export const Main = styled.main`
  @media (min-width: 600px) {
    padding: 4em 8em 4em 8em;
    word-break: break-word;
  }

  @media (max-width: 599px) {
    padding: 1em 1em 1em 1em;
    word-break: break-word;
  }
`;
