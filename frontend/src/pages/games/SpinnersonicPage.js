import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const SpinnersonicPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Spinnersonic</h1>
                <h2 className="game-subtitle">High-Speed Racing Game</h2>
                <p className="game-description">
                  Race, Spin and Soar to Glory! Experience the ultimate fusion of fidget spinner mechanics 
                  and high-speed racing. Master the art of momentum, collect power-ups, and dominate the leaderboards 
                  in this addictive, ADHD-friendly racing adventure.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Unique spinner-based racing mechanics</li>
                    <li>ADHD-friendly design with satisfying feedback</li>
                    <li>Multiple racing modes and tracks</li>
                    <li>Customizable spinners and upgrades</li>
                    <li>Global leaderboards and competitions</li>
                  </ul>
                </div>

                <div className="platform-links">
                  <h3>Available On</h3>
                  <div className="platform-buttons">
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Steam
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      iOS App Store
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Google Play
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Web Version
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="game-media">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
                  alt="Spinnersonic Game"
                  className="game-image"
                />
                <button className="play-trailer-btn">
                  <Play size={24} />
                  Watch Trailer
                </button>
              </div>
            </div>
          </section>

          <section className="game-awards">
            <h3>Recognition</h3>
            <ul>
              <li>Featured on Voltis Labs Launch 2025</li>
              <li>Top Racing Game - Indie Games Festival</li>
            </ul>
          </section>

          <section className="merch-section">
            <h3>Spinnersonic Merchandise</h3>
            <div className="merch-item">
              <img src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" alt="Spinnersonic Merch" />
              <div>
                <h4>Official Spinnersonic Fidget Spinner</h4>
                <p>High-quality metal spinner with game mechanics</p>
                <a href="/merch" className="merch-link">Go to Store</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default SpinnersonicPage;