import React from 'react';
import { ArrowLeft, Users, Clock, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CreaksPage = () => {
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
              src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/ri4qnibm_Creaks%20Box.jpg" 
              alt="Creaks" 
              className="game-banner-image"
            />
            <div className="game-hero-overlay">
              <h1 className="game-title">Creaks</h1>
              <p className="game-subtitle">Mind-bending puzzle adventure with mysterious creatures</p>
              
              <div className="game-stats">
                <div className="stat-item">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Player</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">8h</span>
                  <span className="stat-label">Story Mode</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">4.7★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">75K+</span>
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
                  <strong>Creaks</strong> invites you into a mysterious mansion filled with shifting floors, 
                  peculiar creatures, and mind-bending puzzles. Explore hand-drawn environments where nothing 
                  is quite what it seems and every shadow hides a secret.
                </p>
                <p className="game-text">
                  Discover the truth behind the mansion's strange inhabitants as you solve increasingly complex 
                  puzzles that blend mechanical ingenuity with artistic storytelling. Each room presents new 
                  challenges that will test your perception, logic, and ability to think outside the box.
                </p>
                <p className="game-text">
                  From the award-winning creators comes this atmospheric puzzle adventure that combines stunning 
                  hand-drawn art with innovative gameplay mechanics. Uncover the mansion's secrets and confront 
                  the mysterious creatures that call it home.
                </p>
              </div>
              
              <div className="game-sidebar">
                <div className="features-card">
                  <h3 className="features-title">Epic Features</h3>
                  <ul className="features-list">
                    <li>Mind-bending puzzle mechanics</li>
                    <li>Beautiful hand-drawn artwork</li>
                    <li>Atmospheric sound design</li>
                    <li>Mysterious creature transformations</li>
                    <li>Award-winning storytelling</li>
                    <li>Multiple difficulty modes</li>
                    <li>Hidden secrets to discover</li>
                    <li>Original soundtrack by acclaimed composer</li>
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
              <h2 className="download-title">Coming Soon!</h2>
              <p className="download-subtitle">Creaks is in development - wishlist now to be notified when it launches</p>
              
              <div className="download-grid">
                <a href="#" className="download-card">
                  <span className="download-icon">📱</span>
                  <div className="download-platform">App Store</div>
                  <div className="download-status">Coming Soon</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🤖</span>
                  <div className="download-platform">Google Play</div>
                  <div className="download-status">Coming Soon</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">🎮</span>
                  <div className="download-platform">Steam</div>
                  <div className="download-status">Wishlist Now</div>
                </a>
                <a href="#" className="download-card">
                  <span className="download-icon">💻</span>
                  <div className="download-platform">Windows</div>
                  <div className="download-status">Coming Soon</div>
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

export default CreaksPage;