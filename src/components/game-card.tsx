import Image from "next/image"
import Link from "next/link"
import { Game } from "@/types/game"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card border-border">
      <Link href={game.link} className="group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      <CardContent className="p-4 space-y-3">
        <Link href={game.link} className="group">
          <h3 className="font-semibold text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {game.description}
          </p>
        </Link>
        
        {/* Store Links */}
        {game.storeLinks && (
          <div className="flex gap-2 pt-2">
            {game.storeLinks.googlePlay && (
              <Link href={game.storeLinks.googlePlay} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="text-xs">
                  📱 Google Play
                </Button>
              </Link>
            )}
            {game.storeLinks.appStore && (
              <Link href={game.storeLinks.appStore} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="text-xs">
                  🍎 App Store
                </Button>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}