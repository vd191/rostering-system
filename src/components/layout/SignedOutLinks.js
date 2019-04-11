import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to='/signup'> Signup </NavLink> 
      <NavLink className="nav-item nav-link" to='/signin'> Login </NavLink> 
    </div>
  );
}

export default SignOutLinks;