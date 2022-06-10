import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

import * as S from "./layout.styled";

/**
 * Layout of the Application.
 */
const Layout = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <Navbar />
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
