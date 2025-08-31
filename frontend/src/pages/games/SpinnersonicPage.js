import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SpinnersonicPage = () => {
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
                  src="https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/9pj2qbjo_Frame%202.jpg" 
                  alt="Spinnersonic" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Spinnersonic</h1>
                  <p className="game-subtitle">High-speed racing with fidget spinner mechanics</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">4.9</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(2.1K reviews)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Racing</span>
                    <span className="age-rating">9+</span>
                  </div>
                </div>
                
                <button className="primary-download">
                  <Download size={18} style={{marginRight: '8px'}} />
                  Get
                </button>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-card">
                  <span className="stat-value">100K+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">8</span>
                  <span className="stat-label">Max Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">5 min</span>
                  <span className="stat-label">Quick Race</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Free</span>
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
            <h2 className="section-title">About Spinnersonic</h2>
            <p className="description-text">
              Spinnersonic revolutionizes racing games by combining high-speed competition with innovative fidget spinner mechanics. Master the art of spin control as you race through dynamic tracks filled with loops, jumps, and physics-defying challenges.
            </p>
            <p className="description-text">
              Experience the ultimate fusion of relaxation and adrenaline as you control momentum through precise spinning techniques. Each track is designed to test your reflexes and strategic thinking.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏎️</div>
                <h3 className="feature-title">Innovative Racing</h3>
                <p className="feature-description">Revolutionary spinner-based racing physics that create a unique gameplay experience.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎮</div>
                <h3 className="feature-title">Multiplayer Racing</h3>
                <p className="feature-description">Race against up to 8 players online in real-time competitive matches.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Customization</h3>
                <p className="feature-description">100+ customizable spinner designs and racing tracks to master.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3 className="feature-title">Championships</h3>
                <p className="feature-description">Compete in seasonal championships and climb global leaderboards.</p>
              </div>
            </div>
          </section>

          {/* Download Options */}
          <section className="download-section">
            <h2 className="section-title">Download Options</h2>
            <div className="download-options">
              <a href="#" className="download-option">
                <div className="platform-icon" style={{background: '#007AFF'}}>📱</div>
                <div className="platform-info">
                  <div className="platform-name">App Store</div>
                  <div className="platform-status">iOS 14.0+</div>
                </div>
              </a>
              <a href="#" className="download-option">
                <div className="platform-icon" style={{background: '#34A853'}}>🤖</div>
                <div className="platform-info">
                  <div className="platform-name">Google Play</div>
                  <div className="platform-status">Android 8.0+</div>
                </div>
              </a>
              <a href="#" className="download-option">
                <div className="platform-icon" style={{background: '#1B2838'}}>🎮</div>
                <div className="platform-info">
                  <div className="platform-name">Steam</div>
                  <div className="platform-status">Windows/Mac/Linux</div>
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

export default SpinnersonicPage;