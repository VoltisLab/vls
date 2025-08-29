import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GamesPage from "./pages/GamesPage";
import MerchPage from "./pages/MerchPage";
import ContactPage from "./pages/ContactPage";

// Game Pages
import SpinnersonicPage from "./pages/games/SpinnersonicPage";
import TriangleChessPage from "./pages/games/TriangleChessPage";
import SpellcheckPage from "./pages/games/SpellcheckPage";
import DoomlanePage from "./pages/games/DoomlanePage";
import TacticxPage from "./pages/games/TacticxPage";
import GringhousePage from "./pages/games/GringhousePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Individual Game Routes */}
          <Route path="/games/spinnersonic" element={<SpinnersonicPage />} />
          <Route path="/games/triangle-chess" element={<TriangleChessPage />} />
          <Route path="/games/spellcheck" element={<SpellcheckPage />} />
          <Route path="/games/doomlane" element={<DoomlanePage />} />
          <Route path="/games/tacticx" element={<TacticxPage />} />
          <Route path="/games/gringhouse" element={<GringhousePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;