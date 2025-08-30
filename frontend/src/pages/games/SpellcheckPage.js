import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SpellcheckPage = () => {
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
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png" 
              alt="Spellcheck" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Spellcheck</h1>
              <p className="game-subtitle">Word adventure meets puzzle solving</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Player</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">6h</span>
                  <span className="stat-label">Campaign</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.4★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">40K+</span>
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
                  <strong>Spellcheck</strong> combines the challenge of word games with adventurous storytelling. 
                  Journey through mystical realms where your spelling skills determine your fate and vocabulary 
                  becomes your most powerful weapon.
                </p>
                <p className="game-text">
                  Solve word puzzles to unlock ancient mysteries, battle creatures using letter combinations, 
                  and explore a world where language literally has power. Each correctly spelled word brings 
                  you closer to mastering the magical arts.
                </p>
                <p className="game-text">
                  Perfect for word game enthusiasts and adventure lovers alike, Spellcheck offers hundreds of 
                  challenging levels that will test both your vocabulary and strategic thinking abilities.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Adventure mode with compelling storyline</li>
                    <li>1000+ challenging word puzzles</li>
                    <li>Multiple difficulty levels for all ages</li>
                    <li>Daily challenges with rewards</li>
                    <li>Vocabulary learning system</li>
                    <li>Beautiful fantasy artwork</li>
                    <li>Offline play available</li>
                    <li>Achievement and progression system</li>
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
              <h2 className="download-title">Available Now!</h2>
              <p className="download-subtitle">Start your word adventure today and master the art of spelling magic</p>
              
              <div className="download-grid">
                <a href="#" className="download-card">
                  <span className="download-icon">📱</span>
                  <div className="download-platform">App Store</div>
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🤖</span>
                  <div className="download-platform">Google Play</div>
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🎮</span>
                  <div className="download-platform">Steam</div>
                  <div className="download-status">Available Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">💻</span>
                  <div className="download-platform">Windows</div>
                  <div className="download-status">Available Now</div>
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

export default SpellcheckPage;