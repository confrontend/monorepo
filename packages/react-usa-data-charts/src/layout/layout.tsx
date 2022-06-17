import { SignOut as UISignOut } from "@confrontend/ui-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import { getAuth, signOut } from "firebase/auth";

import {
  CacheContextProvider,
  CacheContextType,
} from "../providers/cache.provider";

import * as S from "./layout.styled";
import { FirebaseApp } from "firebase/app";

const Layout = ({ app }: { app: FirebaseApp }) => {
  const [cachedData, setCachedData] = useState({});
  const value: CacheContextType = { cachedData, setCachedData };

  const signOutFn = () => signOut(getAuth(app));

  return (
    <S.Wrapper>
      <S.Title>
        <span>US Financial Statistic 2022 </span>
        {/* fixme: styling */}
        <UISignOut signOutFn={signOutFn} />
      </S.Title>
      <S.Navigation>
        <Navigation />
      </S.Navigation>
      <S.Main>
        <CacheContextProvider value={value}>
          <Outlet />
        </CacheContextProvider>
      </S.Main>
      <S.Footer>
        <small>
          This is a dummy show case project. No copyright is intended.
        </small>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Layout;
