import React  from "react";
import Logo from "../../assets/Rejlers_logo.png";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
 

const Navbar = () => {



  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo of Rejlers" />
      </div>
      <div className="rightSide">
        <Link to="/Home"> Hem</Link>
        <Link to="/bookingList"> Se dina bokningar</Link>
        <Link to="/bookingDetails"> Övriga kommande bokningar</Link>
        <Link to="/admin"> Admin</Link>
        <Link to="/logout">Logga ut</Link>
      </div>
    </div>
  );
};

export default Navbar;