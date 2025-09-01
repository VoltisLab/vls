import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CreaksPage = () => {
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
                  alt="Creaks - Coming Soon" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Creaks</h1>
                  <p className="game-subtitle">Mind-bending puzzle adventure with mysterious creatures</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">4.7</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(Coming Soon)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Puzzle</span>
                    <span className="age-rating">9+</span>
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
                  <span className="stat-value">1</span>
                  <span className="stat-label">Player</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">8h</span>
                  <span className="stat-label">Story Mode</span>
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
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Creaks</h2>
            <p className="description-text">
              Creaks invites you into a mysterious mansion filled with shifting floors, peculiar creatures, and mind-bending puzzles. Explore hand-drawn environments where nothing is quite what it seems and every shadow hides a secret.
            </p>
            <p className="description-text">
              Discover the truth behind the mansion's strange inhabitants as you solve increasingly complex puzzles that blend mechanical ingenuity with artistic storytelling. Each room presents new challenges that will test your perception, logic, and ability to think outside the box.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🧩</div>
                <h3 className="feature-title">Mind-Bending Puzzles</h3>
                <p className="feature-description">Unique puzzle mechanics that challenge conventional thinking and perception.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Hand-Drawn Art</h3>
                <p className="feature-description">Beautiful hand-drawn artwork that brings the mysterious mansion to life.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👻</div>
                <h3 className="feature-title">Mysterious Creatures</h3>
                <p className="feature-description">Encounter strange beings that transform and interact with the environment.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏚️</div>
                <h3 className="feature-title">Atmospheric World</h3>
                <p className="feature-description">Immersive sound design and atmospheric storytelling create an unforgettable experience.</p>
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

export default CreaksPage;