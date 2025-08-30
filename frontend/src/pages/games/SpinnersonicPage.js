import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
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

        {/* Game Hero Section */}
        <section className="game-hero">
          <div className="container">
            <img 
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
              alt="Spinnersonic" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Spinnersonic</h1>
              <p className="game-subtitle">High-speed racing with fidget spinner mechanics</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">8</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">5m</span>
                  <span className="stat-label">Quick Race</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.9★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">100K+</span>
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
                  <strong>Spinnersonic</strong> revolutionizes racing games by combining high-speed competition with 
                  innovative fidget spinner mechanics. Master the art of spin control as you race through dynamic 
                  tracks filled with loops, jumps, and physics-defying challenges.
                </p>
                <p className="game-text">
                  Experience the ultimate fusion of relaxation and adrenaline as you control momentum through precise 
                  spinning techniques. Each track is designed to test your reflexes, strategic thinking, and ability 
                  to maintain perfect spin balance while competing against up to 8 players online.
                </p>
                <p className="game-text">
                  Whether you're seeking quick arcade-style races or deep championship campaigns, Spinnersonic delivers 
                  an addictive racing experience that's both ADHD-friendly and competitively intense. Customize your 
                  spinners, unlock new tracks, and climb the global leaderboards.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Revolutionary spinner-based racing physics</li>
                    <li>20+ unique tracks with varying challenges</li>
                    <li>8-player online multiplayer races</li>
                    <li>100+ customizable spinner designs</li>
                    <li>ADHD-friendly satisfying feedback systems</li>
                    <li>Championship mode with season rewards</li>
                    <li>Real-time physics simulation</li>
                    <li>Cross-platform progression and matchmaking</li>
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
              <h2 className="download-title">Start Racing Now!</h2>
              <p className="download-subtitle">Download Spinnersonic and experience the most addictive racing game of 2024</p>
              
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
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">💻</span>
                  <div className="download-platform">Windows</div>
                  <div className="download-status">Available Now</div>
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

export default SpinnersonicPage;