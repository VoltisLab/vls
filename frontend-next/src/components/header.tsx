"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Youtube, MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/games", label: "Games" },
    { href: "/merch", label: "Merch" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/n7rtb7og_Group%201244831488.png" 
            alt="Voltis Labs Games" 
            className="h-8 w-auto dark:block hidden"
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/o99zfbv4_yugkuli%3B.jpg" 
            alt="Voltis Labs Games" 
            className="h-8 w-auto dark:hidden block"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://instagram.com/voltislabsgames" 
                aria-label="Instagram"
                className="rounded-full"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Discord" className="rounded-full">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="YouTube" className="rounded-full">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary py-2 border-b border-border last:border-b-0",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://instagram.com/voltislabsgames" 
                  aria-label="Instagram"
                  className="rounded-full"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Discord" className="rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="YouTube" className="rounded-full">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}