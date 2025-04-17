import { Link, NavLink } from "react-router";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "border-b border-orange-400" : ""
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <Link to="/sobre">Sobre 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
