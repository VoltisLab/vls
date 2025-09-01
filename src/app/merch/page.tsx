import { Card, CardContent } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function MerchPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Merchandise</h1>
        <p className="text-base text-muted-foreground">
          Show your love for Voltis Labs Games
        </p>
      </div>

      <Card>
        <CardContent className="p-12 text-center space-y-6">
          <div className="text-8xl">🛍️</div>
          <h2 className="text-2xl font-semibold">Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working on some amazing merchandise for our fans. 
            Stay tuned for awesome apparel, collectibles, and more!
          </p>
        </CardContent>
      </Card>
      
      <ScrollToTop />
    </div>
  )
}