import React, { useState } from "react";
import Header from "./Header";
import GameGrid from "./GameGrid";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { gamesData } from "../data/mockGames";

const GamesPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="games-page">
      <Header />
      <main className="main-content">
        <GameGrid games={gamesData} />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default GamesPage;