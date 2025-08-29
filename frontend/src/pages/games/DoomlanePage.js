import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { ExternalLink, Play } from "lucide-react";

const DoomlanePage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="game-page">
      <Header />
      <main className="main-content">
        <div className="game-content">
          <section className="game-hero">
            <div className="game-hero-content">
              <div className="game-info">
                <h1 className="game-title">Doomlane</h1>
                <h2 className="game-subtitle">Survival Racing Game</h2>
                <p className="game-description">
                  Enter the apocalyptic highways where only the fastest survive. Navigate through 
                  dangerous terrain, avoid obstacles, and outrun the approaching doom in this 
                  intense survival racing experience.
                </p>
                
                <div className="game-features">
                  <h3>Game Features</h3>
                  <ul>
                    <li>Post-apocalyptic racing environments</li>
                    <li>Vehicle customization and upgrades</li>
                    <li>Survival mode with endless gameplay</li>
                    <li>Multiple vehicle types and weapons</li>
                    <li>Dynamic weather and hazards</li>
                  </ul>
                </div>

                <div className="platform-links">
                  <h3>Available On</h3>
                  <div className="platform-buttons">
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Steam
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      PlayStation
                    </a>
                    <a href="#" className="platform-btn">
                      <ExternalLink size={16} />
                      Xbox
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="game-media">
                <img 
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg" 
                  alt="Doomlane Game"
                  className="game-image"
                />
                <button className="play-trailer-btn">
                  <Play size={24} />
                  Watch Trailer
                </button>
              </div>
            </div>
          </section>

          <section className="game-awards">
            <h3>Recognition</h3>
            <ul>
              <li>Best Racing Game - Indie Game Awards</li>
              <li>Excellence in Visual Design - Gaming Convention</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default DoomlanePage;