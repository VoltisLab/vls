import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const CookiesPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="cookies-page">
      <Header />
      <main className="main-content">
        <div className="privacy-container">
          <h1 className="privacy-title">Cookie Policy</h1>
          <p className="privacy-last-updated">Last updated: January 2024</p>
          
          <div className="privacy-content">
            <section className="privacy-section">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="privacy-section">
              <h2>How We Use Cookies</h2>
              <p>
                Voltis Labs Games uses cookies to enhance your browsing experience and provide personalized content. 
                We use cookies for the following purposes:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Preference Cookies:</strong> These cookies remember your choices and settings to provide a more personalized experience.</li>
                <li><strong>Marketing Cookies:</strong> We may use these to show you relevant advertisements based on your interests.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Types of Cookies We Use</h2>
              <p>
                <strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser.
              </p>
              <p>
                <strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period or until you delete them.
              </p>
              <p>
                <strong>First-Party Cookies:</strong> These are set by our website directly.
              </p>
              <p>
                <strong>Third-Party Cookies:</strong> These are set by external services we use, such as analytics providers.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You can control and manage cookies in several ways:
              </p>
              <ul>
                <li>Most browsers allow you to view, manage, and delete cookies through their settings.</li>
                <li>You can set your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
                <li>You can use our cookie consent banner to manage your preferences on our website.</li>
                <li>Please note that disabling certain cookies may affect the functionality of our website.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Advertising Partners:</strong> For relevant advertisement delivery</li>
              </ul>
              <p>
                These third parties have their own cookie policies, and we recommend reviewing them for more information.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated policy on our website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@voltislabs.com<br />
                <strong>Website:</strong> <a href="https://voltislabs.com" target="_blank" rel="noopener noreferrer">voltislabs.com</a>
              </p>
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

export default CookiesPage;