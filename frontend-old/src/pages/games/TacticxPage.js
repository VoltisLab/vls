import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TacticxPage = () => {
  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="container">
          {/* Back Navigation */}
          <Link to="/games" className="back-link">
            <ArrowLeft size={20} />
            Back to Games
          </Link>

          {/* App Store Hero Section */}
          <section className="game-hero">
            <div className="app-store-hero">
              <div className="hero-top">
                <img 
                  src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg" 
                  alt="Tacticx - Coming Soon" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Tacticx</h1>
                  <p className="game-subtitle">Strategic multiplayer tactics game</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">TBA</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(Coming Soon)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Strategy</span>
                    <span className="age-rating">12+</span>
                  </div>
                </div>
                
                <button className="primary-download" style={{background: '#666', cursor: 'not-allowed'}}>
                  <Download size={18} style={{marginRight: '8px'}} />
                  Coming Soon
                </button>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-card">
                  <span className="stat-value">TBA</span>
                  <span className="stat-label">Release Date</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">2-8</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">30 min</span>
                  <span className="stat-label">Avg Match</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">TBA</span>
                  <span className="stat-label">Price</span>
                </div>
              </div>
            </div>
          </section>

          {/* Screenshots */}
          <section className="screenshots-section">
            <h2 className="section-title">Screenshots</h2>
            <div className="screenshots-container">
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1611195974226-ef16ab19e4ad?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1609635200503-9bcb1ad09c94?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Tacticx</h2>
            <p className="description-text">
              Tacticx brings deep strategic gameplay to the modern multiplayer arena. Command your forces with precision, outmaneuver opponents through tactical brilliance, and dominate the battlefield with superior strategy and resource management.
            </p>
            <p className="description-text">
              Experience real-time tactical combat where every decision matters. Build your army, manage resources, and execute complex strategies in matches that reward tactical thinking over quick reflexes.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚔️</div>
                <h3 className="feature-title">Strategic Combat</h3>
                <p className="feature-description">Deep tactical gameplay with unit positioning, terrain advantages, and resource management.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">Multiplayer Battles</h3>
                <p className="feature-description">Compete against up to 8 players in ranked matches and competitive tournaments.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏗️</div>
                <h3 className="feature-title">Base Building</h3>
                <p className="feature-description">Construct and upgrade your base while defending against enemy attacks and raids.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Campaign Mode</h3>
                <p className="feature-description">Master tactics through challenging single-player campaigns and AI scenarios.</p>
              </div>
            </div>
          </section>

          {/* Download Options */}
          <section className="download-section">
            <h2 className="section-title">Coming Soon To</h2>
            <div className="download-options">
              <a href="#" className="download-option" style={{opacity: 0.6, cursor: 'not-allowed'}}>
                <div className="platform-icon" style={{background: '#007AFF'}}>📱</div>
                <div className="platform-info">
                  <div className="platform-name">App Store</div>
                  <div className="platform-status">Coming Soon</div>
                </div>
              </a>
              <a href="#" className="download-option" style={{opacity: 0.6, cursor: 'not-allowed'}}>
                <div className="platform-icon" style={{background: '#34A853'}}>🤖</div>
                <div className="platform-info">
                  <div className="platform-name">Google Play</div>
                  <div className="platform-status">Coming Soon</div>
                </div>
              </a>
              <a href="#" className="download-option" style={{opacity: 0.6, cursor: 'not-allowed'}}>
                <div className="platform-icon" style={{background: '#1B2838'}}>🎮</div>
                <div className="platform-info">
                  <div className="platform-name">Steam</div>
                  <div className="platform-status">Coming Soon</div>
                </div>
              </a>
            </div>
          </section>

          {/* Developer Info */}
          <section className="developer-section">
            <div className="developer-header">
              <img src="https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/logo-light.png" alt="Voltis Labs" className="developer-logo" />
              <div>
                <div className="developer-name">Voltis Labs Games</div>
                <div className="developer-title">Game Developer</div>
              </div>
            </div>
            <p className="description-text">
              Voltis Labs Games specializes in creating innovative gaming experiences that blend traditional mechanics with modern twists. Our games focus on accessibility, engaging gameplay, and community-driven features.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TacticxPage;