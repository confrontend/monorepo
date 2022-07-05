import { SignOut as UISignOut, Navigation } from "@confrontend/ui-components";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { getAuth, signOut } from "firebase/auth";
import * as S from "./layout.styled";
import { FirebaseApp } from "firebase/app";

/**
 * Layout of the Application.
 */
const Layout = ({ app }: { app: FirebaseApp }): JSX.Element => {
  const signOutFn = () => signOut(getAuth(app));
  return (
    <S.Wrapper>
      <S.Navigation>
        <Navbar />
        <S.SignOutWrapper>
          <UISignOut signOutFn={signOutFn} />
        </S.SignOutWrapper>
      </S.Navigation>
      <S.Main>
        {/* <CacheContextProvider value={value}> */}
        <Outlet />
        {/* </CacheContextProvider> */}
      </S.Main>
      <S.Footer>
        This is a dummy show case project. No copyright is intended.
      </S.Footer>
    </S.Wrapper>
  );
};

export default Layout;
