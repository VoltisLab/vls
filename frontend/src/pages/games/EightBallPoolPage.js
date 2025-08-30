import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
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

        {/* Game Hero Section */}
        <section className="game-hero">
          <div className="container">
            <img 
              src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg" 
              alt="8 Ball Pool" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">8 Ball Pool</h1>
              <p className="game-subtitle">Classic billiards with modern twists</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15m</span>
                  <span className="stat-label">Avg Game</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.6★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">25K+</span>
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
                  <strong>8 Ball Pool</strong> brings the classic game of billiards to life with stunning 3D graphics 
                  and realistic physics. Experience the precision and strategy of pool in a modern, competitive 
                  environment designed for both casual and professional players.
                </p>
                <p className="game-text">
                  Master the perfect cue action, learn advanced techniques like spin control and bank shots, 
                  and compete against players from around the world. With multiple game modes and customizable 
                  cues, every match offers new challenges and opportunities to improve your skills.
                </p>
                <p className="game-text">
                  Whether you're breaking balls in quick matches or grinding through tournaments for exclusive 
                  rewards, 8 Ball Pool delivers authentic billiards action with the convenience of online play. 
                  Climb the rankings and prove you're the ultimate pool champion.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Realistic 3D physics and ball movement</li>
                    <li>Multiple game modes (8-ball, 9-ball, tournaments)</li>
                    <li>Online multiplayer with global matchmaking</li>
                    <li>100+ customizable cues and table designs</li>
                    <li>Daily challenges and seasonal events</li>
                    <li>Practice mode with AI opponents</li>
                    <li>Leaderboards and ranking systems</li>
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
              <h2 className="download-title">Coming Soon!</h2>
              <p className="download-subtitle">8 Ball Pool is in development - sign up for early access notifications</p>
              
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

export default EightBallPoolPage;