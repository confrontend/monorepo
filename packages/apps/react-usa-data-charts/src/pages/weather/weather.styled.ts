import styled from "styled-components";

export const CityWrapper = styled.div`
  overflow-wrap: break-word;
  font-size: 0.75em;

  span {
    padding: 0.5em;
    margin: 0.1em;
    border: 1px solid #ccc;
    border-radius: 2em;
    display: inline-block;
    &:hover {
      border: 1px solid #555;
    }
  }
`;

export const MapWrapper = styled.span``;

export const ButtonsWrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  text-align: center;
`;
