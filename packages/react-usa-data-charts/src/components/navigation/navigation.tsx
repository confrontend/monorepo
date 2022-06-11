import { NavLink } from "react-router-dom";
import { navMenuItems } from "./navigation-items";
import * as S from "./navigation.styled";

/**
 * Navigation bar with lazy-loading capability.
 * On Mouse Enter or Focus, the components get lazy-loaded.
 * @returns Navigation JSX Element
 */
export default function Navigation() {
  return (
    <S.NavigationWrapper>
      {navMenuItems.map((item) => (
        <NavLink
          to={item.to}
          key={item.displayName}
          onMouseEnter={item.loadComponent}
          onFocus={item.loadComponent}
          style={({ isActive }) =>
            isActive || (location.pathname === "/" && item.to === "/tax")
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
    </S.NavigationWrapper>
  );
}
