import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DoomlanePage = () => {
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
              alt="Doomlane" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Doomlane</h1>
              <p className="game-subtitle">Fast-paced survival racing</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">6</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">8m</span>
                  <span className="stat-label">Race Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.2★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15K+</span>
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
                  <strong>Doomlane</strong> throws you into high-octane survival racing where speed kills and 
                  only the fastest survive. Navigate through apocalyptic landscapes filled with deadly obstacles, 
                  rival racers, and environmental hazards.
                </p>
                <p className="game-text">
                  Master vehicle combat, power-up management, and split-second decision making as you race through 
                  collapsing cities, toxic wastelands, and dangerous industrial zones. Every race is a fight for 
                  survival where crossing the finish line means staying alive.
                </p>
                <p className="game-text">
                  Upgrade your vehicles, unlock devastating weapons, and climb the ranks in this intense 
                  multiplayer racing experience that combines speed with strategy in a post-apocalyptic world.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Intense 6-player survival races</li>
                    <li>Vehicle combat and weapon systems</li>
                    <li>Post-apocalyptic environments</li>
                    <li>Extensive vehicle customization</li>
                    <li>Multiple game modes and challenges</li>
                    <li>Dynamic weather and hazards</li>
                    <li>Ranking and tournament system</li>
                    <li>Cross-platform multiplayer racing</li>
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
              <p className="download-subtitle">Doomlane is in development - join the racing revolution waitlist</p>
              
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
                  <div className="download-status">Early Access</div>
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

export default DoomlanePage;