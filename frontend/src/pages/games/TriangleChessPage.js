import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TriangleChessPage = () => {
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
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png" 
                  alt="Triangle Chess" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Triangle Chess</h1>
                  <p className="game-subtitle">Revolutionary chess on a triangular board</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">4.7</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(1.8K reviews)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Strategy</span>
                    <span className="age-rating">12+</span>
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
                  <span className="stat-value">50K+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">15 min</span>
                  <span className="stat-label">Avg Game</span>
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
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1611195974226-ef16ab19e4ad?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1609635200503-9bcb1ad09c94?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Triangle Chess</h2>
            <p className="description-text">
              Triangle Chess reinvents the classic strategy game with a revolutionary triangular board that changes everything you know about chess. Master new piece movements, discover fresh tactical possibilities, and experience chess like never before.
            </p>
            <p className="description-text">
              With 91 hexagonal squares arranged in a triangle, every piece gains new strategic potential. The game maintains chess fundamentals while introducing innovative mechanics that challenge even grandmasters.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">♟️</div>
                <h3 className="feature-title">Revolutionary Board</h3>
                <p className="feature-description">91 hexagonal squares in a triangular formation create endless strategic possibilities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3 className="feature-title">Deep Strategy</h3>
                <p className="feature-description">New piece movements and tactical combinations challenge players of all skill levels.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">Online Play</h3>
                <p className="feature-description">Play against opponents worldwide with built-in matchmaking and ranking system.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3 className="feature-title">Learn Mode</h3>
                <p className="feature-description">Interactive tutorials and AI analysis help you master triangle chess strategies.</p>
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

export default TriangleChessPage;