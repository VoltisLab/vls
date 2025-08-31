import React from 'react';
import { ArrowLeft, Star, Download, Users, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SpellcheckPage = () => {
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
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png" 
                  alt="Spellcheck" 
                  className="game-icon"
                />
                <div className="hero-info">
                  <h1 className="game-title">Spellcheck</h1>
                  <p className="game-subtitle">Word adventure meets puzzle solving</p>
                  
                  <div className="rating-section">
                    <div className="rating-score">
                      <span className="rating-number">4.4</span>
                      <div className="rating-stars">★★★★☆</div>
                    </div>
                    <span className="rating-count">(3.2K reviews)</span>
                  </div>

                  <div className="category-age">
                    <span className="category-badge">Word</span>
                    <span className="age-rating">4+</span>
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
                  <span className="stat-value">40K+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Player</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">6h</span>
                  <span className="stat-label">Campaign</span>
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
              <img src="https://images.unsplash.com/photo-1618736502044-4d4b36210a78?w=400&h=600&fit=crop" alt="Screenshot 1" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop" alt="Screenshot 2" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=600&fit=crop" alt="Screenshot 3" className="screenshot" />
              <img src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop" alt="Screenshot 4" className="screenshot" />
            </div>
          </section>

          {/* Description */}
          <section className="description-section">
            <h2 className="section-title">About Spellcheck</h2>
            <p className="description-text">
              Spellcheck combines the challenge of word games with adventurous storytelling. Journey through mystical realms where your spelling skills determine your fate and vocabulary becomes your most powerful weapon.
            </p>
            <p className="description-text">
              Solve word puzzles to unlock ancient mysteries, battle creatures using letter combinations, and explore a world where language literally has power. Each correctly spelled word brings you closer to mastering the magical arts.
            </p>
            <a href="#" className="read-more">Read More</a>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2 className="section-title">Game Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h3 className="feature-title">Adventure Mode</h3>
                <p className="feature-description">Compelling storyline with 1000+ challenging word puzzles across mystical realms.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Daily Challenges</h3>
                <p className="feature-description">New word challenges every day with rewards and vocabulary learning system.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3 className="feature-title">Achievements</h3>
                <p className="feature-description">Multiple difficulty levels and progression system for all ages and skill levels.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3 className="feature-title">Beautiful Art</h3>
                <p className="feature-description">Stunning fantasy artwork and offline play available for gaming anywhere.</p>
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

export default SpellcheckPage;