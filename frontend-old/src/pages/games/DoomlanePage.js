import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DoomlanePage = () => {
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
                  alt="Doomlane - Coming Soon" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Doomlane</h1>
                  <p className="game-subtitle">Fast-paced survival racing</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">TBA</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(Coming Soon)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Racing</span>
                    <span className="age-rating">12+</span>
                    <div className="controller-support">
                      <Gamepad2 size={16} />
                      <span>Controller Support</span>
                    </div>
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
                  <span className="stat-value">1-8</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">3 min</span>
                  <span className="stat-label">Quick Race</span>
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
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Doomlane</h2>
            <p className="description-text">
              Doomlane combines high-octane racing with intense survival mechanics. Navigate through apocalyptic landscapes where speed is your salvation and every decision could be your last. Race against time, opponents, and the environment itself.
            </p>
            <p className="description-text">
              Master vehicle customization, resource management, and split-second decision making as you compete in the most dangerous racing circuits ever conceived. Survive the wasteland and emerge victorious.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏎️</div>
                <h3 className="feature-title">Survival Racing</h3>
                <p className="feature-description">High-speed racing combined with resource management and environmental hazards.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3 className="feature-title">Vehicle Customization</h3>
                <p className="feature-description">Extensive modification system for armor, weapons, and performance upgrades.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">Apocalyptic Tracks</h3>
                <p className="feature-description">Race through diverse post-apocalyptic environments with dynamic weather and hazards.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚔️</div>
                <h3 className="feature-title">Combat Racing</h3>
                <p className="feature-description">Engage in vehicular combat while maintaining racing line and speed.</p>
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

export default DoomlanePage;