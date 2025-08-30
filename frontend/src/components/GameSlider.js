import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GameSlider = ({ games }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % games.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [games.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleSlideClick = (game) => {
    console.log(`Navigating to ${game.title} page`);
  };

  return (
    <div className="game-slider">
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {games.map((game, index) => (
            <div 
              key={index} 
              className="slider-item"
              onClick={() => handleSlideClick(game)}
            >
              <img 
                src={game.image} 
                alt={game.title} 
                className="slider-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1697851429014-8b5f5fb76313';
                }}
              />
              <div className="slider-overlay">
                <div className="slider-content">
                  <h2 className="slider-title">{game.title}</h2>
                  <p className="slider-description">{game.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button className="slider-nav prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

        {/* Dots indicator */}
        <div className="slider-dots">
          {games.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;