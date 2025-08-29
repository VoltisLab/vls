import React from "react";
import { Button } from "./ui/button";

const CookieConsent = ({ onAccept }) => {
  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <h3 className="cookie-title">We use cookies!</h3>
        <p className="cookie-text">
          We use cookies to personalise content and ads, to provide social media 
          features and to analyse our traffic. Let me choose
        </p>
        <div className="cookie-buttons">
          <Button 
            onClick={onAccept}
            className="accept-button"
          >
            Accept all
          </Button>
          <Button 
            onClick={onAccept}
            variant="outline"
            className="reject-button"
          >
            Reject all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;