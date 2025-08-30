import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

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
          <img 
            src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/n7rtb7og_Group%201244831488.png" 
            alt="Voltis Labs Games" 
            className="logo-image"
          />
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
          <a href="https://instagram.com/voltislabsgames" className="social-link" aria-label="Instagram">
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