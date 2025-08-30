import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TacticxPage = () => {
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

        {/* Game Hero Section */}
        <section className="game-hero">
          <div className="container">
            <img 
              src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg" 
              alt="Tacticx" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Tacticx</h1>
              <p className="game-subtitle">Strategic multiplayer tactics game</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">4</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">30m</span>
                  <span className="stat-label">Match Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.3★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">20K+</span>
                  <span className="stat-label">Players</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Description */}
        <section className="game-content-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Game Overview</h2>
            </div>
            
            <div className="game-description-grid">
              <div className="game-description-content">
                <p className="game-text">
                  <strong>Tacticx</strong> is a deep strategic multiplayer experience that challenges your tactical 
                  thinking and resource management skills. Command armies, build bases, and outmaneuver opponents 
                  in this competitive strategy game.
                </p>
                <p className="game-text">
                  Every decision matters as you balance economic growth, military expansion, and technological 
                  advancement. Adapt your strategy based on your opponents' moves and changing battlefield 
                  conditions in real-time multiplayer matches.
                </p>
                <p className="game-text">
                  Master multiple factions, each with unique units and abilities, as you climb through ranked 
                  seasons and compete in tournaments for ultimate strategic supremacy.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Deep 4-player strategic gameplay</li>
                    <li>Multiple unique factions and units</li>
                    <li>Real-time multiplayer matches</li>
                    <li>Ranked competitive seasons</li>
                    <li>Base building and resource management</li>
                    <li>Tournament and league system</li>
                    <li>Spectator mode and replays</li>
                    <li>Cross-platform competitive play</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="download-section">
          <div className="container">
            <div className="download-content">
              <h2 className="download-title">Coming Soon!</h2>
              <p className="download-subtitle">Tacticx is in development - prepare for strategic warfare</p>
              
              <div className="download-grid">
                <a href="#" className="download-card">
                  <span className="download-icon">📱</span>
                  <div className="download-platform">App Store</div>
                  <div className="download-status">Coming Soon</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🤖</span>
                  <div className="download-platform">Google Play</div>
                  <div className="download-status">Coming Soon</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🎮</span>
                  <div className="download-platform">Steam</div>
                  <div className="download-status">Wishlist Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">💻</span>
                  <div className="download-platform">Windows</div>
                  <div className="download-status">Closed Beta</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TacticxPage;