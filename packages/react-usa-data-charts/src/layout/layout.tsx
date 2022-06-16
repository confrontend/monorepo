import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import { signOut } from "../firebase";
import {
  CacheContextProvider,
  CacheContextType,
} from "../providers/cache.provider";

import * as S from "./layout.styled";

const Layout = () => {
  const [cachedData, setCachedData] = useState({});
  const value: CacheContextType = { cachedData, setCachedData };

  const signOutFirebase = () => signOut();

  return (
    <S.Wrapper>
      <S.Title>
        <span>US Financial Statistic 2022 </span>
        {/* fixme: styling */}
        <button onClick={signOutFirebase}>Sign out</button>
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
