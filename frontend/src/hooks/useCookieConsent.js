import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAccept = () => {
    setShowCookieConsent(false);
  };

  return { showCookieConsent, handleAccept };
};