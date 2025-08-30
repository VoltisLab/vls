import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import GameSlider from "../components/GameSlider";
import GameGrid from "../components/GameGrid";
import { sliderGames, featuredGames } from "../data/mockGames";
import { useCookieConsent } from "../hooks/useCookieConsent";

const HomePage = () => {
  const { showCookieConsent, handleAccept } = useCookieConsent();

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        {/* Main Game Slider */}
        <GameSlider games={sliderGames} />
        
        {/* Featured Games Grid */}
        <div className="featured-games-section">
          <GameGrid games={featuredGames} />
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={handleAccept} />
      )}
    </div>
  );
};

export default HomePage;