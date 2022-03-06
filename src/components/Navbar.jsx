import React from "react";
import "./styles/Navbar.scss";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="flex">
          <div className="Logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="/">ABOUT US</a>
            </li>
            <li>
              <a href="/">STORIES</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
            <li>
              <a href="/">LOG IN</a>
            </li>
            <li className="p_btn">
              <a href="/" className="si_btn">
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sub_nav_lis">
        <div className="container">
          <ul>
            <li>
              <a href="/">MARKETPLACE</a>
            </li>
            <li>
              <a href="/">WHOLESALE CENTER</a>
            </li>
            <li>
              <a href="/">SELLER CENTER</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <li>
              <a href="/">INTERNSHIPS</a>
            </li>
            <li>
              <a href="/">EVENTS</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
