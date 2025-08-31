import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Youtube, MessageCircle, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            className="logo-image logo-dark"
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/o99zfbv4_yugkuli%3B.jpg" 
            alt="Voltis Labs Games" 
            className="logo-image logo-light"
          />
        </Link>
        
        <nav className="navigation desktop-nav">
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

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="header-actions">
          <ThemeToggle />
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-navigation">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/games" 
              className={`mobile-nav-link ${isActive("/games") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Games
            </Link>
            <Link 
              to="/merch" 
              className={`mobile-nav-link ${isActive("/merch") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Merch
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;