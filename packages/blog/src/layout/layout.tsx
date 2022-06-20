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
  return (
    <S.Wrapper>
      <S.Navigation>
        <Navigation
          navMenuItems={navItems}
          rightSideItems={
            <a
              href="https://github.com/Confrontend"
              target="_blank"
              rel="noreferrer"
            >
              <img src="GitHub-Mark-Light-32px.png" alt="my github" />
            </a>
          }
        />
      </S.Navigation>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Wrapper>
  );
};

export default Layout;
