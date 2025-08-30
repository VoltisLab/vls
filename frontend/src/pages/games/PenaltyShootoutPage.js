import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PenaltyShootoutPage = () => {
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

        {/* Game Banner */}
        <section className="game-banner">
          <div className="container">
            <img 
              src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png" 
              alt="Penalty Shootout" 
              className="game-banner-image"
            />
          </div>
        </section>

        {/* Game Description */}
        <section className="game-description">
          <div className="container">
            <h1 className="game-title">Penalty Shootout</h1>
            <div className="game-content">
              <p className="game-text">
                Feel the pressure of the world's biggest soccer moments in Penalty Shootout. Step up to the penalty spot 
                and experience the thrill of deciding championship matches with nothing but skill and nerve.
              </p>
              <p className="game-text">
                Master the art of penalty taking and goalkeeping in this intense soccer simulation. Choose your angle, 
                power, and timing to score the perfect goal, or dive to make spectacular saves as the goalkeeper. 
                Every shot matters in this high-stakes soccer experience.
              </p>
              <div className="game-features">
                <h3>Key Features:</h3>
                <ul>
                  <li>Realistic penalty physics and ball movement</li>
                  <li>Play as both shooter and goalkeeper</li>
                  <li>Multiple stadiums and crowd atmospheres</li>
                  <li>Career mode with team progression</li>
                  <li>Online tournaments and competitions</li>
                  <li>Customizable teams and player appearances</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* App Store Downloads */}
        <section className="game-downloads">
          <div className="container">
            <h2 className="downloads-title">Available on All Platforms</h2>
            <div className="download-buttons">
              <a href="#" className="download-btn app-store">
                <img src="/api/placeholder/160/48" alt="Download on the App Store" />
              </a>
              <a href="#" className="download-btn google-play">
                <img src="/api/placeholder/160/48" alt="Get it on Google Play" />
              </a>
              <a href="#" className="download-btn steam">
                <img src="/api/placeholder/160/48" alt="Available on Steam" />
              </a>
              <a href="#" className="download-btn windows">
                <img src="/api/placeholder/160/48" alt="Download for Windows" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PenaltyShootoutPage;