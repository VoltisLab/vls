import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TriangleChessPage = () => {
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
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png" 
              alt="Triangle Chess" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Triangle Chess</h1>
              <p className="game-subtitle">Revolutionary chess on a triangular board</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">3</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">45m</span>
                  <span className="stat-label">Avg Game</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.8★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">50K+</span>
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
                  <strong>Triangle Chess</strong> revolutionizes the classic game of chess by introducing a triangular board 
                  that supports three players simultaneously. This innovative approach creates entirely new strategic 
                  possibilities and tactical challenges that will test even master-level players.
                </p>
                <p className="game-text">
                  Experience chess like never before with dynamic alliances, triple-threat scenarios, and complex 
                  multi-directional gameplay. Every move affects two opponents, creating a constantly shifting 
                  battlefield where traditional chess knowledge meets innovative strategy.
                </p>
                <p className="game-text">
                  Whether you're a chess grandmaster or a casual player, Triangle Chess offers fresh challenges 
                  and exciting gameplay that will keep you coming back for more. Master new opening strategies, 
                  learn three-way endgames, and climb the global leaderboards.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Revolutionary 3-player triangular board</li>
                    <li>All-new piece movements and captures</li>
                    <li>Advanced AI with multiple difficulty levels</li>
                    <li>Online multiplayer with matchmaking</li>
                    <li>Tournament mode with prizes</li>
                    <li>Interactive tutorials and strategy guides</li>
                    <li>Beautiful 3D graphics and animations</li>
                    <li>Cross-platform progression sync</li>
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
              <h2 className="download-title">Ready to Play?</h2>
              <p className="download-subtitle">Download Triangle Chess now and experience the future of strategy gaming</p>
              
              <div className="download-grid">
                <a href="#" className="download-card">
                  <span className="download-icon">📱</span>
                  <div className="download-platform">App Store</div>
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🤖</span>
                  <div className="download-platform">Google Play</div>
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🎮</span>
                  <div className="download-platform">Steam</div>
                  <div className="download-status">Coming Soon</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">💻</span>
                  <div className="download-platform">Windows</div>
                  <div className="download-status">Beta Access</div>
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

export default TriangleChessPage;