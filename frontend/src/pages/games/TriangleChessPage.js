import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const TriangleChessPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Triangle Chess</h1>
                <h2 className="game-subtitle">Revolutionary Strategy Game</h2>
                <p className="game-description">
                  Experience chess like never before on a triangular board. This innovative take on the 
                  classic strategy game introduces new tactical possibilities, piece movements, and 
                  strategic depth that will challenge even the most experienced players.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Triangular board with 91 hexagonal spaces</li>
                    <li>Traditional chess pieces with adapted movements</li>
                    <li>AI opponents of varying difficulties</li>
                    <li>Online multiplayer matches</li>
                    <li>Tournament mode and rankings</li>
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
                  </div>
                </div>
              </div>
              
              <div className="game-media">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png" 
                  alt="Triangle Chess Game"
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
              <li>Innovation Award - Strategy Games Convention</li>
              <li>Best Board Game Adaptation - Digital Games Awards</li>
            </ul>
          </section>

          <section className="merch-section">
            <h3>Triangle Chess Merchandise</h3>
            <div className="merch-item">
              <img src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png" alt="Triangle Chess Merch" />
              <div>
                <h4>Physical Triangle Chess Set</h4>
                <p>Premium wooden board with magnetic pieces</p>
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

export default TriangleChessPage;