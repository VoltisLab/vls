import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PenaltyShootoutPage = () => {
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
                  alt="Penalty Shootout - Coming Soon" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Penalty Shootout</h1>
                  <p className="game-subtitle">Intense soccer penalty competition</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">TBA</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(Coming Soon)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Sports</span>
                    <span className="age-rating">4+</span>
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
                  <span className="stat-value">1-2</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">5 min</span>
                  <span className="stat-label">Quick Match</span>
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
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Penalty Shootout</h2>
            <p className="description-text">
              Experience the ultimate pressure of penalty shootouts with realistic physics, dynamic weather conditions, and intense crowd atmosphere. Master the art of precision shooting and goalkeeping in soccer's most dramatic moments.
            </p>
            <p className="description-text">
              Challenge friends in local multiplayer or compete against AI goalkeepers with varying difficulty levels. Every shot matters as you aim for glory in tournaments and championship modes.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚽</div>
                <h3 className="feature-title">Realistic Physics</h3>
                <p className="feature-description">Advanced ball physics with wind effects, spin control, and goalkeeper AI reactions.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Precision Control</h3>
                <p className="feature-description">Intuitive controls for shot power, direction, and curve with haptic feedback.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏟️</div>
                <h3 className="feature-title">Stadium Atmosphere</h3>
                <p className="feature-description">Dynamic crowd reactions and weather conditions that affect gameplay.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3 className="feature-title">Tournament Mode</h3>
                <p className="feature-description">Compete in various championships and unlock new stadiums and customizations.</p>
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

export default PenaltyShootoutPage;