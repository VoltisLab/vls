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
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Games</h2>
          <p className="text-muted-foreground text-lg">
            Discover our collection of innovative gaming experiences
          </p>
        </div>
        <GameGrid games={featuredGames} />
      </section>
      
      <ScrollToTop />
    </div>
  )
}