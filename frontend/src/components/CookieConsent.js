import React from "react";

const CookieConsent = ({ onAccept }) => {
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    onAccept();
  };

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <h3 className="cookie-title">We use cookies!</h3>
        <p className="cookie-text">
          We use cookies to personalise content and ads, to provide social media 
          features and to analyse our traffic. Let me choose
        </p>
        <div className="cookie-buttons">
          <button 
            onClick={handleAccept}
            className="accept-button"
          >
            Accept all
          </button>
          <button 
            onClick={handleReject}
            className="reject-button"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;