import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const SpellcheckPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Spellcheck</h1>
                <h2 className="game-subtitle">Word Adventure Game</h2>
                <p className="game-description">
                  Spell Smarter, Play Harder! Embark on a magical word adventure where spelling accuracy 
                  determines your fate. Battle monsters, solve puzzles, and explore mystical realms using 
                  the power of words and quick thinking.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Story-driven word adventure</li>
                    <li>Spell-based combat system</li>
                    <li>Vocabulary building mechanics</li>
                    <li>Multiple difficulty levels</li>
                    <li>Educational and entertaining gameplay</li>
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
                <div 
                  className="game-image spellcheck-bg"
                  style={{
                    backgroundColor: '#0f0f0f',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    color: '#ffffff',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  SPELLCHECK
                </div>
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
              <li>Educational Game of the Year - Learning Games Awards</li>
              <li>Best Indie Word Game - Mobile Gaming Summit</li>
            </ul>
          </section>

          <section className="merch-section">
            <h3>Spellcheck Merchandise</h3>
            <div className="merch-item">
              <img src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png" alt="Spellcheck Merch" />
              <div>
                <h4>Spellcheck Word Guide Book</h4>
                <p>Official strategy guide with advanced word lists</p>
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

export default SpellcheckPage;