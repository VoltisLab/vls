import React from "react";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-dots">
              <span className="dot red"></span>
              <span className="dot orange"></span>
              <span className="dot yellow"></span>
            </div>
          </div>
          <span className="logo-text">Amanita Design</span>
        </div>
        
        <nav className="navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/games" className="nav-link active">Games</a>
          <a href="/merch" className="nav-link">Merch</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
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