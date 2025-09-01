import { Game } from "@/types/game"
import { GameCard } from "@/components/game-card"

interface GameGridProps {
  games: Game[]
}

export function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  )
}