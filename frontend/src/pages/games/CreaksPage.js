import React from 'react';
import { ArrowLeft, Download, Star, Trophy, Gamepad2, Users, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreaksPage = () => {
  return (
    <div className="game-page">
      {/* Hero Section */}
      <section className="game-hero">
        <div className="container">
          <Link to="/games" className="back-link">
            <ArrowLeft size={20} />
            Back to Games
          </Link>
          
          <div className="game-hero-content">
            <div className="game-hero-text">
              <h1 className="game-title">Creaks</h1>
              <p className="game-subtitle">Mind-bending puzzle adventure with mysterious creatures</p>
              
              <div className="game-features">
                <div className="feature">
                  <Gamepad2 size={20} />
                  <span>Puzzle Adventure</span>
                </div>
                <div className="feature">
                  <Users size={20} />
                  <span>Single Player</span>
                </div>
                <div className="feature">
                  <Clock size={20} />
                  <span>8+ hours</span>
                </div>
              </div>
              
              <div className="game-actions">
                <button className="download-button">
                  <Download size={20} />
                  Download Game
                </button>
              </div>
            </div>
            
            <div className="game-hero-image">
              <img src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/ri4qnibm_Creaks%20Box.jpg" alt="Creaks" />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="game-platforms">
        <div className="container">
          <h2>Available Platforms</h2>
          <div className="platforms-grid">
            <div className="platform-card">
              <h3>Steam</h3>
              <p>PC & Mac</p>
              <span className="price">$19.99</span>
            </div>
            <div className="platform-card">
              <h3>App Store</h3>
              <p>iOS</p>
              <span className="price">$14.99</span>
            </div>
            <div className="platform-card">
              <h3>Google Play</h3>
              <p>Android</p>
              <span className="price">$14.99</span>
            </div>
            <div className="platform-card">
              <h3>Nintendo Switch</h3>
              <p>Console</p>
              <span className="price">$24.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="game-features-section">
        <div className="container">
          <h2>Game Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>Mind-Bending Puzzles</h3>
              <p>Solve intricate puzzles that challenge your perception and logic skills in beautifully crafted environments.</p>
            </div>
            <div className="feature-card">
              <Star className="feature-icon" />
              <h3>Mysterious Creatures</h3>
              <p>Discover and interact with strange beings that inhabit the mysterious mansion's hidden passages.</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3>Hand-Drawn Art</h3>
              <p>Experience stunning hand-drawn animations and artwork that brings the creepy mansion to life.</p>
            </div>
            <div className="feature-card">
              <Trophy className="feature-icon" />
              <h3>Atmospheric Sound</h3>
              <p>Immerse yourself in the haunting soundtrack and carefully designed audio that enhances every moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="game-awards">
        <div className="container">
          <h2>Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <Trophy className="award-icon" />
              <div>
                <h3>Best Indie Game 2020</h3>
                <p>Independent Games Festival</p>
              </div>
            </div>
            <div className="award-card">
              <Star className="award-icon" />
              <div>
                <h3>Excellence in Visual Art</h3>
                <p>Game Developers Choice Awards</p>
              </div>
            </div>
            <div className="award-card">
              <Gamepad2 className="award-icon" />
              <div>
                <h3>Players' Choice</h3>
                <p>Steam Awards 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="game-merch">
        <div className="container">
          <h2>Creaks Merchandise</h2>
          <div className="merch-grid">
            <div className="merch-item">
              <div className="merch-image">
                <img src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/ri4qnibm_Creaks%20Box.jpg" alt="Creaks T-Shirt" />
              </div>
              <h3>Creaks T-Shirt</h3>
              <p className="merch-price">$24.99</p>
            </div>
            <div className="merch-item">
              <div className="merch-image">
                <img src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/ri4qnibm_Creaks%20Box.jpg" alt="Creaks Poster" />
              </div>
              <h3>Art Print Collection</h3>
              <p className="merch-price">$19.99</p>
            </div>
            <div className="merch-item">
              <div className="merch-image">
                <img src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/ri4qnibm_Creaks%20Box.jpg" alt="Creaks Soundtrack" />
              </div>
              <h3>Original Soundtrack</h3>
              <p className="merch-price">$9.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreaksPage;