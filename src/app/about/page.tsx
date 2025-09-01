import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">About Voltis Labs Games</h1>
        <p className="text-xl text-muted-foreground">
          Creating innovative gaming experiences for players worldwide
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At Voltis Labs Games, we believe in pushing the boundaries of interactive entertainment. 
              Our team is dedicated to crafting unique gaming experiences that blend innovative mechanics 
              with compelling storytelling, creating worlds that players can truly immerse themselves in.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl">🎮</div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We constantly explore new technologies and gameplay mechanics
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">🤝</div>
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Our players are at the heart of everything we create
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">✨</div>
                <h3 className="font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Every game we release meets our high standards for excellence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ScrollToTop />
    </div>
  )
}