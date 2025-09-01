import { GameSlider } from "@/components/game-slider"
import { GameGrid } from "@/components/game-grid"
import { sliderGames, featuredGames } from "@/data/games"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Main Game Slider */}
      <GameSlider games={sliderGames} />
      
      {/* Featured Games Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Games</h2>
          <p className="text-muted-foreground text-base">
            Discover our collection of innovative gaming experiences
          </p>
        </div>
        <GameGrid games={featuredGames} />
      </section>
      
      <ScrollToTop />
    </div>
  )
}