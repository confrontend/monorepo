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
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000;
  button {
    margin-left: 1em;
    padding: 0.4em;
  }
`;

export const Main = styled.main`
 
  @media (min-width: 450px) {
    padding: 4em 8em 4em 8em;
  }

  grid-area: main-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 4em;
  align-items: start;
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
