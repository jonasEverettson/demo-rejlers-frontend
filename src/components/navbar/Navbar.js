import React from "react";
import Logo from "../../assets/Rejlers_logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";
import { useAuth } from "../security/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo of Rejlers" />
      </div>
      <div className="rightSide">
        {!isAuthenticated && <Link to="/login">Logga in</Link>}
        {isAuthenticated && (
          <>
            <Link to="/Home"> Hem</Link>
            <Link to="/bookingList"> Se dina bokningar</Link>
            <Link to="/bookingDetails"> Övriga kommande bokningar</Link>
            <Link to="/admin"> Admin</Link>
            <Link to="/logout">Logga ut</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
