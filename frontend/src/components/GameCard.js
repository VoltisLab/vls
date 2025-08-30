import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={game.link} className="game-card-link">
      <div className="game-card">
        <div className="game-image-container">
          <img 
            src={game.image} 
            alt={game.title} 
            className="game-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1697851429014-8b5f5fb76313';
            }}
          />
        </div>
        <div className="game-info">
          <h3 className="game-title">{game.title}</h3>
          <p className="game-description">{game.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;