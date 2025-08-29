import React from "react";

const GameCard = ({ game }) => {
  const handleCardClick = () => {
    // Mock navigation - in real app this would navigate to game detail page
    console.log(`Navigating to ${game.title} page`);
  };

  return (
    <div className="game-card" onClick={handleCardClick}>
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
  );
};

export default GameCard;