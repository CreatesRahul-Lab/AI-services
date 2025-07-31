import React, { useState } from "react";
import "./Navbar.css";
import ServicesMenu from "./ServicesMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          
          <span>
            AI<span className="dot">.Services</span>
          </span>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {menuOpen && <ServicesMenu />}
    </>
  );
};

export default Navbar;
