import "./AppNavbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            onClick={() => handleNavLinkClick("home")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/informacion"
            activeClassName="active"
            onClick={() => handleNavLinkClick("informacion")}
          >
            Información
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            activeClassName="active"
            onClick={() => handleNavLinkClick("contacto")}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clases"
            activeClassName="active"
            onClick={() => handleNavLinkClick("clases")}
          >
            Clases
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservas"
            activeClassName="active"
            onClick={() => handleNavLinkClick("reservas")}
          >
            Reservas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
