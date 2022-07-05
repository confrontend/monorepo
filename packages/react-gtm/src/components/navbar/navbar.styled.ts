import styled, { css } from "styled-components";

const logoWidth = "10em";
const navBarHeight = "2.5em";
const mobileWidth = "768px";

export const NavWrapper = styled.span`
  background: #000;
  display: grid;
  grid-template-columns: 22em 1fr;
  background-color: #000;
`;

export const NavLinkWrapper = styled.nav`
  @media (max-width: ${mobileWidth}) {
    display: none;
  }
  /* TODO fix styling on mobile view */
  @media (min-width: ${mobileWidth}) {
    height: ${navBarHeight};
    // Compensating for logo width to keep links in center
    margin-left: -${logoWidth};
    display: flex;
    justify-content: center;
    align-items: center;

    /* Basic styles for nav links */
    a {
      display: flex;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
      height: 100%;
      text-decoration: none;
    }

    /* Specific styles for non-active links */
    .link {
      color: white;
    }

    /* Specific styles for active links */
    .link-active {
      color: #fff;
      background: #c00;
    }
  }
`;

export const LogoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  height: ${navBarHeight};
  line-height: ${navBarHeight};
  width: ${logoWidth};
  justify-content: flex-end;
`;

export const Logo = styled.span`
  text-align: center;
  color: #fff;
  font-weight: bolder;
`;

export const Menu = styled.span`
  @media (max-width: ${mobileWidth}) {
    background-image: url("images/menu.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 4em;
    height: ${navBarHeight};
    cursor: pointer;
  }
  @media (min-width: ${mobileWidth}) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.span<{ isMobileMenuVisible: boolean }>`
  @media (min-width: ${mobileWidth}) {
    display: none;
  }

  @media (max-width: ${mobileWidth}) {
    display: flex;
    width: 100%;
    color: #eee;
    height: 1.5em;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;

    ${({ isMobileMenuVisible }) => css`
      ${!isMobileMenuVisible &&
      css`
        display: none;
      `}
    `}
  }
`;
