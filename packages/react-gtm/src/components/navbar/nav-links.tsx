import { MenuItem } from "../../globals/enums";
import { NavLink } from "react-router-dom";

/**
 * Menu items of the navigation bar.
 * @returns JSX Element of the Teaser component
 */
export default function NavLinks(): JSX.Element {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        {MenuItem.home}
      </NavLink>
      <NavLink
        to={MenuItem.technology}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        {MenuItem.technology}
      </NavLink>
      <NavLink
        to={MenuItem.business}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        {MenuItem.business}
      </NavLink>
      <NavLink
        to={MenuItem.science}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        {MenuItem.science}
      </NavLink>
    </>
  );
}
