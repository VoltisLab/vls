import { ArrowLeft, Star, Download, Users, Clock, Trophy, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function SpellcheckPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back Navigation */}
      <Link 
        href="/games" 
        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Games</span>
      </Link>

      {/* App Store Hero Section */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Game Icon */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png"
                  alt="Spellcheck"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Game Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Spellcheck</h1>
                <p className="text-xl text-muted-foreground">Word adventure meets puzzle solving</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">4.4</span>
                  <div className="flex text-yellow-400">
                    {"★★★★☆".split("").map((star, i) => (
                      <span key={i} className="text-lg">{star}</span>
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground">(40K+ downloads)</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Word</Badge>
                <Badge variant="secondary">4+</Badge>
                <Badge variant="secondary">In-App Purchases</Badge>
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className="flex-shrink-0 space-y-2">
              <Link href="https://play.google.com/store/apps/details?id=com.spellcheck.app&hl=en_GB" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Google Play
                </Button>
              </Link>
              <Link href="https://apps.apple.com/gb/app/spellcheck/id6748904396" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  App Store
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold">4.4</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1-2</div>
              <div className="text-sm text-muted-foreground">Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5 min</div>
              <div className="text-sm text-muted-foreground">Quick Game</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm text-muted-foreground">Price</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Screenshots */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Screenshots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop", 
              "https://images.unsplash.com/photo-1594736797933-d0beb7a7fcd9?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=600&fit=crop"
            ].map((src, index) => (
              <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Spellcheck</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Embark on a magical word adventure where spelling prowess meets puzzle-solving skills. 
            Spellcheck combines the best of word games with engaging adventure elements and challenging puzzles.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Navigate through enchanted worlds, solve word-based puzzles, and discover hidden secrets as you 
            improve your vocabulary and spelling skills in this educational yet entertaining gaming experience.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Game Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "📝",
                title: "Word Adventure",
                description: "Journey through magical worlds solving word-based challenges and puzzles."
              },
              {
                icon: "🧩", 
                title: "Puzzle Solving",
                description: "Combine spelling skills with logic puzzles for a unique gaming experience."
              },
              {
                icon: "📚",
                title: "Vocabulary Building", 
                description: "Learn new words and improve spelling through engaging gameplay mechanics."
              },
              {
                icon: "🏆",
                title: "Achievements",
                description: "Unlock rewards and achievements as you progress through the adventure."
              }
            ].map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Options */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Download Now</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.spellcheck.app&hl=en_GB" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white">
                  🤖
                </div>
                <div>
                  <div className="font-medium">Google Play</div>
                  <div className="text-sm text-muted-foreground">Available Now</div>
                </div>
              </div>
            </Link>
            <Link href="https://apps.apple.com/gb/app/spellcheck/id6748904396" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                  📱
                </div>
                <div>
                  <div className="font-medium">App Store</div>
                  <div className="text-sm text-muted-foreground">Available Now</div>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Developer Info */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/logo-light.png"
                alt="Voltis Labs"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Voltis Labs Games</h3>
              <p className="text-muted-foreground mb-3">Game Developer</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Voltis Labs Games specializes in creating innovative gaming experiences that blend 
                traditional mechanics with modern twists. Our games focus on accessibility, engaging 
                gameplay, and community-driven features.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <ScrollToTop />
    </div>
  )
}