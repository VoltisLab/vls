import React from "react";
import GameCard from "./GameCard";

const GameGrid = ({ games }) => {
  return (
    <div className="game-grid-container">
      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;