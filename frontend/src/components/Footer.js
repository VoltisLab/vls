import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          Copyright © Voltis Labs Games · All Rights Reserved
        </div>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="separator">·</span>
          <a href="/video-policy" className="footer-link">Video Policy</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">Facebook</a>
          <span className="separator">·</span>
          <a href="https://voltislabs.com/voltislabsgames" className="footer-link">Instagram</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">Bluesky</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">Discord</a>
          <span className="separator">·</span>
          <a href="#" className="footer-link">YouTube</a>
          <span className="separator">·</span>
          <a href="https://voltislabs.com" className="footer-link">Voltis Labs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;