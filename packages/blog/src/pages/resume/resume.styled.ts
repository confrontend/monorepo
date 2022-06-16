import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  display: grid;
  min-height: 100%;
  grid-template-areas:
    "summary"
    "details";
  grid-template-rows: auto 1fr;
`;

export const Summary = styled.div`
  grid-area: summary;
  display: flex;
  align-items: center;
  gap: 2em;
`;

export const SummaryImage = styled.img`
  border-radius: 50%;
  width: 8em;
`;

export const SummaryInfo = styled.div`
  border-radius: 50%;
  width: 11em;
  line-height: 2em;
`;

export const Details = styled.div`
  grid-area: details;
  display: flex;
  word-wrap: break-word;
  width: 100%;

  code {
    font-size: 1.5em;
  }

  p {
    font-size: 1.1em;
  }
`;
