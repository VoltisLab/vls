import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <div className="logo-dots">
              <span className="dot red"></span>
              <span className="dot orange"></span>
              <span className="dot yellow"></span>
            </div>
          </div>
          <span className="logo-text">Voltis Labs Games</span>
        </Link>
        
        <nav className="navigation">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
          <Link to="/games" className={`nav-link ${isActive("/games") ? "active" : ""}`}>
            Games
          </Link>
          <Link to="/merch" className={`nav-link ${isActive("/merch") ? "active" : ""}`}>
            Merch
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>

        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://voltislabs.com/voltislabsgames" className="social-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Discord">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;