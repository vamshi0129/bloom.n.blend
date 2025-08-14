import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src="/images/logo_bg.png" alt="Logo" />
        <span>Bloom & Blend</span>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/live" onClick={closeMenu}>
            Live Workshops
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" onClick={closeMenu}>
            Upcoming Workshops
          </NavLink>
        </li>
        <li>
          <NavLink to="/request" onClick={closeMenu}>
            Request a Workshop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
