import React from "react";
import Logo from "../../assets/Rejlers_logo.png";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const NavbarAdmin = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo of Rejlers"/>
      </div>
      <div className="rightSide">
        <Link to="/Home"> Home</Link>
        <Link to="/carList"> Cars</Link>
        <Link to="/employeeList"> Employees</Link>
        <Link to="/orderList"> Orders</Link>
      </div>
    </div>
  );
};

export default NavbarAdmin;