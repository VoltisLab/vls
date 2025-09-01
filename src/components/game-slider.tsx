"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SliderGame } from "@/types/game"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GameSliderProps {
  games: SliderGame[]
}

export function GameSlider({ games }: GameSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || games.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % games.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [games.length, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (!games.length) return null

  return (
    <div className="relative w-full mb-16">
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-xl mx-[-1rem] md:mx-0">
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${games.length * 100}%`
          }}
        >
          {games.map((game, index) => (
            <Link 
              key={index} 
              href={game.link}
              className="relative flex-shrink-0 w-full h-full cursor-pointer group"
              style={{ width: `${100 / games.length}%` }}
            >
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h2 className="text-xl md:text-2xl font-semibold mb-1 tracking-tight">
                  {game.title}
                </h2>
                <p className="text-sm md:text-base opacity-90 max-w-2xl">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation arrows */}
        {games.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full w-12 h-12 z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full w-12 h-12 z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Dots indicator */}
        {games.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {games.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}