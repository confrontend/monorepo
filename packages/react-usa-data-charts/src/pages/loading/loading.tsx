import * as S from "./login.styled";

export default function Login() {
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
                required
              />
            </S.LoginInputWrapper>
            <S.LoginSubmitInput value="Sign in" type="submit" />
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
