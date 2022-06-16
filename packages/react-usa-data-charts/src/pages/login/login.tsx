import { MouseEvent, useRef } from "react";
import { signIn } from "../../firebase";
import * as S from "./login.styled";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInFirebase = (e: MouseEvent<HTMLInputElement>) =>
    signIn(e, emailRef, passwordRef);

  return (
    <S.LoginWrapper>
      <S.LoginBoxWrapper>
        <h1>Welcome!</h1>
        <S.LoginBox>
          <S.LoginFrom>
            <S.LoginInputWrapper>
              <label htmlFor="uname">Username</label>
              <input
                type="text"
                name="uname"
                ref={emailRef}
                placeholder="Type in your username"
                required
              />
            </S.LoginInputWrapper>
            <S.LoginInputWrapper>
              <label htmlFor="uname">Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Type in your password"
                ref={passwordRef}
                required
              />
            </S.LoginInputWrapper>
            <S.LoginSubmitInput
              value="Sign in"
              type="submit"
              onClick={signInFirebase}
            />
          </S.LoginFrom>
          <S.LoginParagraph>
            <small>
              Please contact developer for a test user and password.
            </small>
          </S.LoginParagraph>
        </S.LoginBox>
      </S.LoginBoxWrapper>
      <S.LoginSide />
    </S.LoginWrapper>
  );
}
