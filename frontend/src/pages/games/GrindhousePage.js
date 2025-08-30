import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GrindhousePage = () => {
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
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png" 
              alt="Grindhouse" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Grindhouse</h1>
              <p className="game-subtitle">Experimental action adventure</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Player</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12h</span>
                  <span className="stat-label">Campaign</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.1★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">35K+</span>
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
                  <strong>Grindhouse</strong> is an experimental action adventure that pushes the boundaries of 
                  conventional gaming. Dive into a world of surreal environments, unconventional mechanics, 
                  and narrative experimentation.
                </p>
                <p className="game-text">
                  Experience a unique blend of action, exploration, and puzzle-solving in environments that 
                  defy logic and expectation. Each area presents new gameplay mechanics and artistic styles 
                  that challenge your preconceptions about what games can be.
                </p>
                <p className="game-text">
                  Perfect for players seeking something truly different, Grindhouse offers an avant-garde 
                  gaming experience that prioritizes creativity and artistic expression over traditional 
                  game design conventions.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Experimental gameplay mechanics</li>
                    <li>Surreal artistic environments</li>
                    <li>Non-linear narrative structure</li>
                    <li>Multiple art styles and themes</li>
                    <li>Innovative puzzle design</li>
                    <li>Atmospheric sound design</li>
                    <li>Hidden secrets and easter eggs</li>
                    <li>Artistic achievement system</li>
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
              <p className="download-subtitle">Experience the experimental art of gaming with Grindhouse</p>
              
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

export default GrindhousePage;