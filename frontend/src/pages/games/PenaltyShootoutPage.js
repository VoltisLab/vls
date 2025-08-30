import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PenaltyShootoutPage = () => {
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
              alt="Penalty Shootout" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Penalty Shootout</h1>
              <p className="game-subtitle">Intense soccer penalty competition</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">10m</span>
                  <span className="stat-label">Match Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.5★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">30K+</span>
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
                  <strong>Penalty Shootout</strong> captures the heart-stopping tension of soccer's most dramatic moments. 
                  Experience the pressure of deciding championship matches where every shot matters and nerves of steel 
                  are your greatest weapon.
                </p>
                <p className="game-text">
                  Master both sides of the penalty box - place your shots with precision as the striker, or read your 
                  opponent's intentions as the goalkeeper. With realistic physics and multiple stadiums, each penalty 
                  feels authentic and intense.
                </p>
                <p className="game-text">
                  Compete in tournaments, climb through divisions, and customize your teams as you work your way to 
                  becoming the ultimate penalty specialist. Every save and every goal brings you closer to soccer glory.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Realistic penalty physics and ball trajectory</li>
                    <li>Play as both shooter and goalkeeper</li>
                    <li>Multiple stadiums with unique atmospheres</li>
                    <li>Career mode with team progression</li>
                    <li>Online tournaments and competitions</li>
                    <li>Customizable teams and player kits</li>
                    <li>Dynamic weather and pitch conditions</li>
                    <li>Achievement system and leaderboards</li>
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
              <p className="download-subtitle">Penalty Shootout is in development - join the waitlist for exclusive updates</p>
              
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
                  <div className="download-status">Alpha Testing</div>
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

export default PenaltyShootoutPage;