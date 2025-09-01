import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GrindhousePage = () => {
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
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
                  alt="Grindhouse" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Grindhouse</h1>
                  <p className="game-subtitle">Experimental action adventure</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">4.6</span>
                      <div className="rating-stars">★★★★★</div>
                    </div>
                    <span className="rating-count">(1.5K reviews)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Action</span>
                    <span className="age-rating">17+</span>
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
                  <span className="stat-value">25K+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">1-4</span>
                  <span className="stat-label">Players</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">8h</span>
                  <span className="stat-label">Campaign</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">$9.99</span>
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
              <img src="https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Grindhouse</h2>
            <p className="description-text">
              Grindhouse delivers an experimental action adventure that pushes the boundaries of traditional gaming. Combining visceral combat with deep narrative choices, this mature gaming experience offers uncompromised artistic vision.
            </p>
            <p className="description-text">
              Navigate through gritty environments where every decision matters. The game features innovative mechanics that challenge conventional gameplay while maintaining accessibility for newcomers to the genre.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚔️</div>
                <h3 className="feature-title">Visceral Combat</h3>
                <p className="feature-description">Experimental combat system with dynamic environmental interactions and tactical depth.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎭</div>
                <h3 className="feature-title">Mature Narrative</h3>
                <p className="feature-description">Complex storyline with meaningful choices that affect both character development and world state.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h3 className="feature-title">Co-op Play</h3>
                <p className="feature-description">Support for up to 4 players in local and online cooperative adventure modes.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Artistic Vision</h3>
                <p className="feature-description">Unique visual style inspired by cult cinema and underground art movements.</p>
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
                  <div className="platform-status">iOS 15.0+</div>
                </div>
              </a>
              <a href="#" className="download-option">
                <div className="platform-icon" style={{background: '#34A853'}}>🤖</div>
                <div className="platform-info">
                  <div className="platform-name">Google Play</div>
                  <div className="platform-status">Android 9.0+</div>
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

export default GrindhousePage;