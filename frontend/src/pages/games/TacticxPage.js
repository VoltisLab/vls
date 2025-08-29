import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const TacticxPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Tac ticx</h1>
                <h2 className="game-subtitle">Strategic Multiplayer Game</h2>
                <p className="game-description">
                  Master the art of tactical warfare in this deep strategy game. Command your forces, 
                  plan your moves, and outsmart opponents in intense multiplayer battles that reward 
                  strategic thinking and quick decision-making.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Turn-based strategic gameplay</li>
                    <li>Multiple unit types and abilities</li>
                    <li>Ranked competitive multiplayer</li>
                    <li>Campaign mode with story</li>
                    <li>Map editor and custom scenarios</li>
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
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg" 
                  alt="Tac ticx Game"
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
              <li>Best Strategy Game - Mobile Gaming Awards</li>
              <li>Player's Choice Award - Strategy Gaming Summit</li>
            </ul>
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

export default TacticxPage;