import { loginBoxWidth } from "../../styles/variables";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
`;

export const LoginSide = styled.div`
  background-image: url("images/login-side.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
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
  background-color: #be0118;
  color: #fff;
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
    border-radius: 0.5em;
    padding: 1em;
    font-size: 1em;
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
  border-radius: 0.5em;
  background-color: #0384fc;
  &:hover {
    cursor: pointer;
    background-color: #ef5350;
  }
`;

export const LoginParagraph = styled.p`
  padding: 0.2em 0.5em 0.2em 0.5em;
  color: #eee;
  word-wrap: break-word;
  width: ${loginBoxWidth};
`;
