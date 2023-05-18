import React from "react";
import Nav from "../components/Nav/Nav";
import AppNavBar from "../components/Nav/AppNavBar";
import Info from "../components/AppInfo/AppInfo";
import './BudgetPages.css'
import {Link } from "react-router-dom";


function BudgetPages() {
  return (
    <React.Fragment>
      <Nav>
        <AppNavBar>
          <Link to={"/"}>
            Home
          </Link>
          <Link to={"/info"}>
            Informacion
          </Link>
          <Link to={"/biografia"}>
            Biografia
          </Link>
          <Link to={"/clases"}>
           Clases
          </Link>
          <Link to={"/reserva"}>
           Reservas
          </Link>
        </AppNavBar>
      </Nav>
    </React.Fragment>
  );
}

export default BudgetPages;
