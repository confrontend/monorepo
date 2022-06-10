import styled, { keyframes } from "styled-components";

export const TeaserWrapper = styled.span`
  display: grid;
  grid-template-areas:
    "image"
    "author-and-date"
    "text";
  grid-template-rows: repeat(3, auto);
  max-height: 27em;
  min-height: 27em;
`;

export const ATag = styled.a`
  &:hover {
    color: #c00;
    opacity: 80%;
  }
`;

export const ImgElement = styled.img`
  width: 100%;
  border-radius: 0.5em;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  display: inline-block;
  max-height: 13em;
  min-height: 13em;
`;

export const TitleH3 = styled.h3`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const ImgWrapper = styled.span`
  grid-area: image;
  // TODO make dynamic by passing parameter
  background: linear-gradient(45deg, #aaa, #eee);
  background-size: 200% 200%;
  animation: ${gradient};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  border-radius: 0.5em;
  width: 100%;
  display: inline-block;
  max-height: 13em;
  min-height: 13em;
`;

export const AuthorDate = styled.span`
  grid-area: author-and-date;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: 300;
`;

export const Date = styled.span`
  font-weight: 200;
`;

export const Description = styled.p`
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1.5;
  -webkit-box-orient: vertical;
  font-weight: 200;
  line-height: 1.5em;
`;
