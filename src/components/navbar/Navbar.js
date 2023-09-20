import React from "react";
import Logo from "../../assets/Rejlers_logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";
import { useAuth } from "../security/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const role = authContext.employee?.role;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="navbar flex flex-col md:flex-row h-screen md:h-auto">
      <div className="leftSide w-full md:w-auto h-32 md:h-screen flex items-center justify-center">
        <Link to="/Home">
        <img src={Logo} alt="logo of Rejlers" className="h-16 md:h-auto" />
        </Link>
      </div>
      <div className="rightSide flex flex-col md:flex-row md:items-center md:justify-around w-full md:w-auto">
        {!isAuthenticated && <Link to="/login" className="my-2 md:my-0">Logga in</Link>}
        {isAuthenticated && (
          <>
            <Link to="/Home" className="my-2 md:my-0"> Hem</Link>
            <Link to="/bookingList" className="my-2 md:my-0"> Se dina bokningar</Link>
            <Link to="/bookingDetails" className="my-2 md:my-0"> Övriga kommande bokningar</Link>
            {role === 'ADMIN' && <Link to="/admin" className="my-2 md:my-0"> Admin</Link>}
            <Link to="/logout" className="my-2 md:my-0">Logga ut</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
