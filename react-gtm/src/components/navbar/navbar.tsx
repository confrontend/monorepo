import { useState } from "react";
import NavLinks from "./nav-links";
import * as S from "./navbar.styled";

/**
 * Container component for navigation links.
 * It consists of site Logo and nav links to pages
 * Also handle responsive behavior of navigation bar.
 * @returns JSX Element of the Navbar component
 */
export default function Navbar(): JSX.Element {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <S.NavWrapper>
        <S.LogoWrapper>
          <S.Menu onClick={showMobileMenu} />
          <S.Logo>NEWS</S.Logo>
        </S.LogoWrapper>
        <S.NavLinkWrapper>
          <NavLinks />
        </S.NavLinkWrapper>
      </S.NavWrapper>
      <S.MobileMenuWrapper isMobileMenuVisible={isMobileMenuVisible}>
        <NavLinks />
      </S.MobileMenuWrapper>
    </>
  );
}
