import { onDarkText, dark } from "../../../blog/src/global/colors";
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
  display: flex;
  position: sticky;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  top: 0;
  z-index: 1; 
  background-color: ${dark};
  margin-bottom: 1em;
  padding: 1em 2em 1em 2em;
  .github {
    margin-left: auto;
  }
  border-bottom: 0.1em solid #323742;
`;

export const Main = styled.main`
  grid-area: main-content;
  padding: 0 2em 0 2em;
`;
