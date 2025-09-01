import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function CookiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What Are Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device 
              when you visit a website. They are widely used to make websites work more efficiently 
              and provide information to website owners.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to improve your experience on our website, remember your preferences, 
              and analyze how our website is used to help us improve our services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Managing Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies in various ways. Most web browsers allow you 
              to refuse to accept cookies and to delete cookies that have already been stored.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <ScrollToTop />
    </div>
  )
}