import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">Hostez</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-right">
        <i className="fas fa-search"></i>
        <i className="fas fa-globe"></i>
        <button className="register-button">Register</button>
      </div>
    </nav>
  );
}

export default Navigation;
