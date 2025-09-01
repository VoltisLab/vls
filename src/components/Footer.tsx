import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex flex-col space-y-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a 
                href="https://voltislabs.com" 
                className="hover:text-primary transition-colors"
              >
                Voltis Labs
              </a>
              <span className="text-muted-foreground/50">·</span>
              <Link 
                href="/privacy" 
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/50">·</span>
              <Link 
                href="/cookies" 
                className="hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a 
                href="https://instagram.com/voltislabsgames" 
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <span className="text-muted-foreground/50">·</span>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
              >
                Discord
              </a>
              <span className="text-muted-foreground/50">·</span>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Copyright © Voltis Labs Games · All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}