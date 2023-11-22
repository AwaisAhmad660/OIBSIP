import React from 'react'
import "./nav.css";
import logo from "../images/logo.png";
 const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a className="btn" href="login.html">
                <i className="fa fa-user text-sky-500"></i>
                <span className=" text-primary">Log In</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger Button */}
        <button className="hamburger-button">
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </button>
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a className="btn" href="#">
                {" "}
                <i className="fas fa-user" /> Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
