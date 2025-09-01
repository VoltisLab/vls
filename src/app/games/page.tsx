"use client"

import { useState } from "react"
import { Search, Grid, List, Star, Download, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { allGames, categories, getGameRating, getDownloadCount } from "@/data/games"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [controllerSupportOnly, setControllerSupportOnly] = useState(false)

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
    const matchesControllerFilter = !controllerSupportOnly || game.controllerSupport
    return matchesSearch && matchesCategory && matchesControllerFilter
  })

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Store Header */}
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Games</h1>
        <p className="text-base text-muted-foreground">
          Discover amazing games from Voltis Labs
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="space-y-6 mb-8">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Controller Support Filter */}
        <div className="flex justify-center">
          <label className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={controllerSupportOnly}
                onChange={(e) => setControllerSupportOnly(e.target.checked)}
                className="sr-only"
              />
              <div
                className={cn(
                  "w-12 h-6 rounded-full border-2 transition-all duration-300 flex items-center",
                  controllerSupportOnly
                    ? "bg-primary border-primary"
                    : "bg-card border-border"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded-full bg-background transition-all duration-300 flex items-center justify-center",
                    controllerSupportOnly
                      ? "translate-x-6"
                      : "translate-x-1"
                  )}
                >
                  <Gamepad2 className="h-2.5 w-2.5 text-foreground" />
                </div>
              </div>
            </div>
            <span className="text-sm font-medium">Controller Support</span>
          </label>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Button
              key={category}  
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* View Controls */}
        <div className="flex justify-center">
          <div className="flex border border-border rounded-lg overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm">
          {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Games Grid/List */}
      <div
        className={cn(
          "gap-4 mb-12",
          viewMode === "grid"
            ? "grid grid-cols-2 lg:grid-cols-3"
            : "flex flex-col space-y-4"
        )}
      >
        {filteredGames.map((game, index) => (
          <Link key={index} href={game.link} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card border-border">
              <div className="relative">
                <div className={cn(
                  "relative overflow-hidden",
                  viewMode === "grid" ? "aspect-square sm:aspect-video" : "aspect-[2/1]"
                )}>
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes={viewMode === "grid" ? "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw" : "100vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Game Overlay Info */}
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {getGameRating(game.title)}
                    </Badge>
                    {game.controllerSupport && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground border-0 p-1">
                        <Gamepad2 className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base leading-tight text-card-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {game.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Download className="h-3 w-3" />
                      <span>{getDownloadCount(game.title)}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{getGameRating(game.title)}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center space-y-4 py-12">
          <div className="text-6xl">🎮</div>
          <h3 className="text-xl font-semibold">No games found</h3>
          <p className="text-muted-foreground text-sm">
            Try adjusting your search or filters
          </p>
        </div>
      )}
      
      <ScrollToTop />
    </div>
  )
}