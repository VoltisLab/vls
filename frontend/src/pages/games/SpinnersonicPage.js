import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SpinnersonicPage = () => {
  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        {/* Back Navigation */}
        <div className="container">
          <Link to="/games" className="back-link">
            <ArrowLeft size={20} />
            Back to Games
          </Link>
        </div>

        {/* Game Banner */}
        <section className="game-banner">
          <div className="container">
            <img 
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
              alt="Spinnersonic" 
              className="game-banner-image"
            />
          </div>
        </section>

        {/* Game Description */}
        <section className="game-description">
          <div className="container">
            <h1 className="game-title">Spinnersonic</h1>
            <div className="game-content">
              <p className="game-text">
                Experience the ultimate fusion of high-speed racing and fidget spinner mechanics in Spinnersonic. 
                This revolutionary game takes the simple joy of spinning and transforms it into an adrenaline-pumping 
                racing experience like no other.
              </p>
              <p className="game-text">
                Master the art of momentum control as you navigate through challenging tracks, using spinner physics 
                to boost your speed, navigate tight corners, and outmaneuver your opponents. Every spin matters, 
                every rotation counts in this innovative racing adventure.
              </p>
              <div className="game-features">
                <h3>Key Features:</h3>
                <ul>
                  <li>Revolutionary spinner-based racing mechanics</li>
                  <li>20+ unique tracks with varying difficulty levels</li>
                  <li>Multiplayer racing with up to 8 players</li>
                  <li>Customizable spinner designs and colors</li>
                  <li>Physics-based gameplay with realistic spin dynamics</li>
                  <li>Championship mode with unlockable content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* App Store Downloads */}
        <section className="game-downloads">
          <div className="container">
            <h2 className="downloads-title">Available on All Platforms</h2>
            <div className="download-buttons">
              <a href="#" className="download-btn app-store">
                <img src="/api/placeholder/160/48" alt="Download on the App Store" />
              </a>
              <a href="#" className="download-btn google-play">
                <img src="/api/placeholder/160/48" alt="Get it on Google Play" />
              </a>
              <a href="#" className="download-btn steam">
                <img src="/api/placeholder/160/48" alt="Available on Steam" />
              </a>
              <a href="#" className="download-btn windows">
                <img src="/api/placeholder/160/48" alt="Download for Windows" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpinnersonicPage;