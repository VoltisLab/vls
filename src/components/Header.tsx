"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useState } from 'react';

// React Icons imports
import { FaFacebookF, FaInstagram, FaXTwitter, FaDiscord, FaYoutube } from "react-icons/fa6";
import { GiButterfly } from "react-icons/gi";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Games", href: "/games" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#0B0B0B] flex items-center">
        <div className="mx-auto flex h-16 md:max-w-6xl items-center justify-between px-4 md:h-20 md:gap-24">
          {/* Left: Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 relative">
            <Image
              src='/logo.png'
              alt='Logo'
              width={30}
              height={30}
            />
          </Link>

          {/* Desktop: Middle - Social Icons */}
          <div className="hidden items-center gap-3 md:flex">
            <Social href="#" label="Facebook">
              <FaFacebookF className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Instagram">
              <FaInstagram className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="X">
              <FaXTwitter className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Butterfly">
              <GiButterfly className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Discord">
              <FaDiscord className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="YouTube">
              <FaYoutube className="h-5 w-5 text-neutral-400 transition hover:text-white" />
            </Social>
          </div>

          {/* Desktop: Right - Nav */}
          <nav className="hidden items-center gap-3 md:flex">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[17px] font-semibold transition",
                    active
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile: Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-8 h-8 gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={cn(
              "block w-6 h-0.5 bg-neutral-400 transition-all duration-300",
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            )} />
            <span className={cn(
              "block w-6 h-0.5 bg-neutral-400 transition-all duration-300",
              isMenuOpen ? "opacity-0" : ""
            )} />
            <span className={cn(
              "block w-6 h-0.5 bg-neutral-400 transition-all duration-300",
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            )} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-[#0B0B0B] transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Mobile Navigation */}
          <nav className="flex flex-col items-center gap-6">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    "text-2xl font-semibold transition",
                    active
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-6 mt-8">
            <Social href="#" label="Facebook" onClick={toggleMenu}>
              <FaFacebookF className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Instagram" onClick={toggleMenu}>
              <FaInstagram className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="X" onClick={toggleMenu}>
              <FaXTwitter className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Butterfly" onClick={toggleMenu}>
              <GiButterfly className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="Discord" onClick={toggleMenu}>
              <FaDiscord className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
            <Social href="#" label="YouTube" onClick={toggleMenu}>
              <FaYoutube className="h-6 w-6 text-neutral-400 transition hover:text-white" />
            </Social>
          </div>
        </div>
      </div>
    </>
  );
}

function Social({
  href,
  label,
  children,
  onClick,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center"
    >
      {children}
    </Link>
  );
}

/* ---------- Mushroom Logo (SVG) ---------- */
function MushroomLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-label="Amanita logo"
      role="img"
    >
      {/* red cap */}
      <path d="M7 20c3.5-9 30.5-9 34 0" fill="#ff3b30" />
      {/* white dots */}
      <circle cx="16" cy="16" r="2.4" fill="white" />
      <circle cx="23" cy="13.5" r="2" fill="white" />
      <circle cx="30" cy="16" r="2.2" fill="white" />
      {/* cap shading */}
      <path d="M7 20c3.5-9 30.5-9 34 0" fill="none" stroke="black" strokeOpacity=".08" />
      {/* stem */}
      <rect x="21" y="20" width="6" height="10" rx="2.5" fill="#f7f7f7" />
      {/* base shadow */}
      <ellipse cx="24" cy="33" rx="7" ry="2.2" fill="black" opacity=".18" />
      {/* outline circle */}
      <circle cx="24" cy="24" r="23.5" fill="none" stroke="black" opacity=".08" />
    </svg>
  );
}