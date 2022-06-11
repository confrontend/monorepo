import styled from "styled-components";

export const NavigationWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  column-gap: 1em;
  padding-left: 3em;
  height: 2.5em;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  box-sizing: border-box;
  a {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 10em;
    &:not(.active):hover {
      box-shadow: 0 1px 0 0 #0384fc;
      cursor: pointer;
    }
`;
