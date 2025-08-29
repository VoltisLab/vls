import React, { useState } from "react";
import Header from "../components/Header";
import GameGrid from "../components/GameGrid";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { allGames } from "../data/mockGames";

const GamesPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="games-page">
      <Header />
      <main className="main-content">
        <GameGrid games={allGames} />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default GamesPage;