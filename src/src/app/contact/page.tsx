import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Mail, MessageCircle, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with the Voltis Labs Games team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us how we can help you..."
                rows={4}
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other ways to reach us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">contact@voltislabs.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Instagram</h3>
                <p className="text-sm text-muted-foreground">@voltislabsgames</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Discord</h3>
                <p className="text-sm text-muted-foreground">Join our community server</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ScrollToTop />
    </div>
  )
}