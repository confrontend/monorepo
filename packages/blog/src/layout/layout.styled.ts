import styled from "styled-components";

export const Wrapper = styled.span`
  margin: 0;
  display: grid;
  min-height: 100%;
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 6em 3em 1fr 10em; */
  grid-template-areas:
    "header"
    "nav"
    "main-content"
    "footer";
  grid-template-rows: 6em auto 1fr 10em;
`;

export const Title = styled.h1`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  color: #e3e3e3;
  background-image: url("images/black-pattern.png");
  background-size: contain;
`;

export const Navigation = styled.span`
  grid-area: nav;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
`;

export const Main = styled.main`
  padding: 0 3em 0 3em;
  grid-area: main-content;
  height: auto;
  // flex-grow flex-shrink flex-basis
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const Footer = styled.footer`
  grid-area: footer;
  width: 100%;
  padding: 1em;
  text-align: center;
  background-color: #363636;
  color: #979797;
`;
