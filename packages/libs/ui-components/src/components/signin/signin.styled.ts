import styled from "styled-components";

export const loginBoxWidth = "25em";

export const LoginWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  background-color: #2CA58D;
`;

export const LoginBoxWrapper = styled.div`
  h1 {
    height: 3em;
  }
 
`;

export const LoginBox = styled.div`
  border-radius: 0.5em;
  padding: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 25em;
  width: ${loginBoxWidth};
  background-color: #fff;
  color: #111;
`;

export const LoginFrom = styled.form`
  /* height: 10em; */
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 2em 0;

  label {
    padding-bottom: 0.5em;
    font-weight: bold;
  }

  input {
    height: 2.5em;
    border: 0;
    border-radius: 1em;
    padding: 1em;
    font-size: 1em;
    background-color: #ddd;
  }
`;

export const LoginSubmitInput = styled.input`
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  height: 2.5em;
  border: 0;
  padding: 0.5em;
  width: 100%;
  border-radius: 1em;
  background-color: #333;
  &:hover {
    cursor: pointer;
    background-color: #0384fc;
  }
`;

export const LoginParagraph = styled.p`
  padding: 0.3em 0.5em 0.2em 0.5em;
  color: #eee;
  word-wrap: break-word;
  width: ${loginBoxWidth};
  color: #999;
`;
