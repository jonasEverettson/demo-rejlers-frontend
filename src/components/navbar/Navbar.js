import React from "react";
import Logo from "../../assets/Rejlers_logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

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
        {/* <a href="/" onClick={handleLogout}>
          Logga ut
        </a> */}
        {<Link to="/logout">Logga ut</Link>}
      </div>
    </div>
  );
};

export default Navbar;
