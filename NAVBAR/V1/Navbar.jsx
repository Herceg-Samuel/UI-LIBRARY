import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <div id="title">Remind</div>
          <div className="nav">
            <a href="Home">Home</a>
            <a href="Services">Services</a>
            <a href="About">About</a>
            <a href="Contact">Contact</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
