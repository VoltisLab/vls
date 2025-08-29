import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const GringhousePage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Gringhouse</h1>
                <h2 className="game-subtitle">Experimental Action Adventure</h2>
                <p className="game-description">
                  Dive into an experimental world where reality bends and action knows no bounds. 
                  Gringhouse pushes the boundaries of conventional gaming with its unique mechanics, 
                  surreal environments, and innovative gameplay that defies categorization.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Experimental gameplay mechanics</li>
                    <li>Surreal visual and audio design</li>
                    <li>Non-linear narrative structure</li>
                    <li>Physics-based puzzle solving</li>
                    <li>Immersive atmospheric experience</li>
                  </ul>
                </div>

                <div className="platform-links">
                  <h3>Available On</h3>
                  <div className="platform-buttons">
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Steam (Early Access)
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Itch.io
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="game-media">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
                  alt="Gringhouse Game"
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
              <li>Innovation Award - Experimental Games Festival</li>
              <li>Best Art Direction - Indie Game Showcase</li>
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

export default GringhousePage;