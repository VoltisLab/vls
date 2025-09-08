import { GameSlider } from "@/components/game-slider"
import { GameGrid } from "@/components/game-grid"
import { sliderGames, featuredGames } from "@/data/games"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div>
      {/* Main Game Slider - Full width on mobile */}
      <div className="md:container md:mx-auto md:max-w-7xl md:px-4 md:py-8">
        <GameSlider games={sliderGames} />
      </div>
      
      {/* Featured Games Grid */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
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
    </div>
  )
}