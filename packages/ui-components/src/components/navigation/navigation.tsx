/* eslint-disable no-restricted-globals */
import { NavLink } from "react-router-dom";
import { INavigation } from "./navigation.types";
import * as S from "./navigation.styled";

type NavigationProps = {
  navMenuItems: INavigation[];
  rightSideItems?: React.ReactNode;
};

/**
 * Navigation bar with lazy-loading capability.
 * On Mouse Enter or Focus, the components get lazy-loaded.
 * @returns Navigation JSX Element
 */
const Navigation = ({ navMenuItems, rightSideItems }: NavigationProps) => {
  
  return (
    <S.NavigationWrapper>
      {navMenuItems.map((item, index) => (
        <NavLink
          to={item.route}
          key={item.displayName}
          onMouseEnter={item.lazyLoadComponent}
          onFocus={item.lazyLoadComponent}
          style={({ isActive }) =>
            isActive ||
            location.pathname === item.route ||
            (location.pathname === "/" && index === 0)
              ? {
                  borderBottom: " 3px solid #0384fc",
                  marginBottom: "-3px",
                }
              : { color: "#000000" }
          }
        >
          <span>{item.displayName}</span>
        </NavLink>
      ))}
      {rightSideItems && (
        <S.ItemRightWrapper>{rightSideItems}</S.ItemRightWrapper>
      )}
    </S.NavigationWrapper>
  );
};

export default Navigation;
