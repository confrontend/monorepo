import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "@hamed/ui-components";

import * as S from "./layout.styled";

const navItems = [
  {
    displayName: "resume",
    route: "/resume",
    lazyLoadComponent: () => import("../pages/resume"),
  },
  {
    displayName: "blog",
    route: "/blog",
    lazyLoadComponent: () => import("../pages/blog"),
  },
];

const Layout = () => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <Navigation navMenuItems={navItems} />
      </S.Navigation>
      <S.Main>
        <Outlet />
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
