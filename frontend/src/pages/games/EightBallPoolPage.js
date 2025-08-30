import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EightBallPoolPage = () => {
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
              alt="8 Ball Pool" 
              className="game-banner-image"
            />
          </div>
        </section>

        {/* Game Description */}
        <section className="game-description">
          <div className="container">
            <h1 className="game-title">8 Ball Pool</h1>
            <div className="game-content">
              <p className="game-text">
                Experience the classic game of billiards like never before in 8 Ball Pool. Perfect your aim, master the physics, 
                and compete against players from around the world in this modern take on the timeless pool game.
              </p>
              <p className="game-text">
                Whether you're a casual player or a seasoned pro, 8 Ball Pool offers multiple game modes, stunning graphics, 
                and realistic ball physics that will keep you coming back for more. Challenge friends, join tournaments, 
                and climb the global leaderboards.
              </p>
              <div className="game-features">
                <h3>Key Features:</h3>
                <ul>
                  <li>Realistic 3D physics and ball movement</li>
                  <li>Multiple game modes including 8-ball and 9-ball</li>
                  <li>Online multiplayer with global matchmaking</li>
                  <li>Customizable cues and table designs</li>
                  <li>Tournament mode with prizes</li>
                  <li>Practice mode to perfect your skills</li>
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

export default EightBallPoolPage;