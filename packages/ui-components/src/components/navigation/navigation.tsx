import { NavLink } from "react-router-dom";
import { INavigation } from "./navigation.types";
import * as S from "./navigation.styled";

/**
 * Navigation bar with lazy-loading capability.
 * On Mouse Enter or Focus, the components get lazy-loaded.
 * @returns Navigation JSX Element
 */
const Navigation = ({ navMenuItems }: { navMenuItems: INavigation[] }) => {
  return (
    <S.NavigationWrapper>
      {navMenuItems.map((item) => (
        <NavLink
          to={item.route}
          key={item.displayName}
          onMouseEnter={item.lazyLoadComponent}
          onFocus={item.lazyLoadComponent}
          style={({ isActive }) =>
            // eslint-disable-next-line no-restricted-globals
            isActive || location.pathname === item.route
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
};

export default Navigation;
