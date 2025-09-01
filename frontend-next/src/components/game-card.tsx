import Image from "next/image"
import Link from "next/link"
import { Game } from "@/types/game"
import { Card, CardContent } from "@/components/ui/card"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={game.link} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card border-border">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://images.unsplash.com/photo-1697851429014-8b5f5fb76313'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {game.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}