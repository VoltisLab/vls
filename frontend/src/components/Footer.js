import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://voltislabs.com" className="footer-link">Voltis Labs</a>
          <span className="separator">·</span>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="separator">·</span>
          <a href="https://instagram.com/voltislabsgames" className="footer-link">Instagram</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">Discord</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">YouTube</a>
        </div>
        <div className="copyright">
          Copyright © Voltis Labs Games · All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;