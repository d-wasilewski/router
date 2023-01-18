import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let activeClassName = "active";
  const [first, setfirst] = useState(0);
  setfirst(2);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
