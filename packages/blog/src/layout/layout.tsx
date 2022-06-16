import { Outlet } from "react-router-dom";
import { Navigation } from "@confrontend/ui-components";

import * as S from "./layout.styled";

const navItems = [
  {
    displayName: "blog",
    route: "/blog",
    lazyLoadComponent: () => import("../pages/blog"),
  },
  {
    displayName: "resume",
    route: "/resume",
    lazyLoadComponent: () => import("../pages/resume/resume"),
  },
];

const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Wrapper>
      <S.Navigation>
        <Navigation navMenuItems={navItems} />
      </S.Navigation>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Wrapper>
  );
};

export default Layout;
