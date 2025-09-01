import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const PrivacyPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="privacy-page">
      <Header />
      <main className="main-content">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <div className="privacy-last-updated">Last updated: December 2024</div>
          
          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            </section>

            <section className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our games and services, process transactions, and communicate with you.</p>
            </section>

            <section className="privacy-section">
              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </section>

            <section className="privacy-section">
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section className="privacy-section">
              <h2>5. Cookies</h2>
              <p>We use cookies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>
            </section>

            <section className="privacy-section">
              <h2>6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@voltislabsgames.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default PrivacyPage;