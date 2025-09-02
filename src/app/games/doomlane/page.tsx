import { ArrowLeft, Star, Download, Users, Clock, Trophy, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DoomlanePage() {
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
                  src="https://customer-assets.emergentagent.com/job_preview-this-site/artifacts/n582xjg4_Background.jpg"
                  alt="Doomlane - Coming Soon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs bg-black/50 px-2 py-1 rounded">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Doomlane</h1>
                <p className="text-xl text-muted-foreground">Fast-paced survival racing</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">TBA</span>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-lg">{star}</span>
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground">(Coming Soon)</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Racing</Badge>
                <Badge variant="secondary">12+</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <Gamepad2 className="h-3 w-3 mr-1" />
                  Controller Support
                </Badge>
              </div>
            </div>
            
            {/* Download Button */}
            <div className="flex-shrink-0">
              <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed">
                <Download className="h-4 w-4 mr-2" />
                Coming Soon
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold">TBA</div>
              <div className="text-sm text-muted-foreground">Release Date</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1-8</div>
              <div className="text-sm text-muted-foreground">Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3 min</div>
              <div className="text-sm text-muted-foreground">Quick Race</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">TBA</div>
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
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop", 
              "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=400&h=600&fit=crop"
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
          <CardTitle>About Doomlane</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Doomlane combines high-octane racing with intense survival mechanics. Navigate through 
            apocalyptic landscapes where speed is your salvation and every decision could be your last. 
            Race against time, opponents, and the environment itself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Master vehicle customization, resource management, and split-second decision making as you 
            compete in the most dangerous racing circuits ever conceived. Survive the wasteland and 
            emerge victorious.
          </p>
          <Button variant="link" className="p-0 h-auto text-primary">
            Read More
          </Button>
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
                icon: "🏎️",
                title: "Survival Racing",
                description: "High-speed racing combined with resource management and environmental hazards."
              },
              {
                icon: "🔧", 
                title: "Vehicle Customization",
                description: "Extensive modification system for armor, weapons, and performance upgrades."
              },
              {
                icon: "🌍",
                title: "Apocalyptic Tracks", 
                description: "Race through diverse post-apocalyptic environments with dynamic weather and hazards."
              },
              {
                icon: "⚔️",
                title: "Combat Racing",
                description: "Engage in vehicular combat while maintaining racing line and speed."
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
          <CardTitle>Coming Soon To</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { platform: "App Store", icon: "📱", color: "bg-blue-500" },
              { platform: "Google Play", icon: "🤖", color: "bg-green-500" },
              { platform: "Steam", icon: "🎮", color: "bg-gray-700" }
            ].map((platform, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border opacity-60">
                <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center text-white`}>
                  {platform.icon}
                </div>
                <div>
                  <div className="font-medium">{platform.platform}</div>
                  <div className="text-sm text-muted-foreground">Coming Soon</div>
                </div>
              </div>
            ))}
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