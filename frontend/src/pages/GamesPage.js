import React, { useState } from "react";
import { Search, Filter, Grid, List, Star, Download, Gamepad2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import ScrollToTop from "../components/ScrollToTop";
import { allGames } from "../data/mockGames";

const GamesPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [controllerSupportOnly, setControllerSupportOnly] = useState(false);

  const categories = ["All", "Racing", "Strategy", "Word", "Action", "Puzzle", "Sports"];

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    const matchesControllerFilter = !controllerSupportOnly || game.controllerSupport;
    return matchesSearch && matchesCategory && matchesControllerFilter;
  });

  const getGameRating = (title) => {
    const ratings = {
      "Spinnersonic": "4.9",
      "Triangle Chess": "4.7", 
      "Spellcheck": "4.4",
      "Grindhouse": "4.6",
      "Creaks": "TBA",
      "Doomlane": "TBA",
      "Tacticx": "TBA",
      "8 Ball Pool": "TBA",
      "Penalty Shootout": "TBA"
    };
    return ratings[title] || "4.5";
  };

  const getDownloadCount = (title) => {
    const downloads = {
      "Spinnersonic": "100K+",
      "Triangle Chess": "50K+", 
      "Spellcheck": "40K+",
      "Grindhouse": "Soon",
      "Creaks": "Soon",
      "Doomlane": "Soon",
      "Tacticx": "Soon",
      "8 Ball Pool": "Soon",
      "Penalty Shootout": "Soon"
    };
    return downloads[title] || "New";
  };

  return (
    <div className="games-page">
      <Header />
      <main className="main-content">
        <div className="store-container">
          {/* Store Header */}
          <div className="store-header">
            <div className="store-title-section">
              <h1 className="store-title">Games</h1>
              <p className="store-subtitle">Discover amazing games from Voltis Labs</p>
            </div>
            
            {/* Search and Filters */}
            <div className="store-controls">
              <div className="search-section">
                <div className="search-bar">
                  <Search size={20} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="filter-controls">
                <div className="controller-filter">
                  <label className="controller-toggle">
                    <input
                      type="checkbox" 
                      checked={controllerSupportOnly}
                      onChange={(e) => setControllerSupportOnly(e.target.checked)}
                      className="controller-checkbox"
                    />
                    <div className="controller-toggle-slider">
                      <Gamepad2 size={14} />
                    </div>
                    <span className="controller-label">Controller Support</span>
                  </label>
                </div>

                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="view-controls">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <span className="results-count">
              {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </span>
          </div>

          {/* Games Grid */}
          <div className={`games-store-grid ${viewMode}`}>
            {filteredGames.map((game, index) => (
              <div key={index} className="store-game-card">
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="store-game-link">
                  <div className="store-game-image-container">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="store-game-image"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1697851429014-8b5f5fb76313';
                      }}
                    />
                    <div className="game-overlay">
                      <div className="quick-info">
                        <div className="rating-badge">
                          <Star size={12} fill="currentColor" />
                          <span>{getGameRating(game.title)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="store-game-info">
                    <h3 className="store-game-title">{game.title}</h3>
                    <p className="store-game-description">{game.description}</p>
                    
                    <div className="store-game-meta">
                      <div className="download-count">
                        <Download size={14} />
                        <span>{getDownloadCount(game.title)}</span>
                      </div>
                      <div className="game-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{getGameRating(game.title)}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🎮</div>
              <h3>No games found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default GamesPage;