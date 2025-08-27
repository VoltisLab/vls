"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useState } from 'react';

// React Icons imports
import { FaFacebookF, FaInstagram, FaXTwitter, FaDiscord, FaYoutube } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

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
    <div className="w-full bg-[#0B0B0B] sticky top-0 z-50">
      <header className="w-full md:max-w-[75vw] px-5 mx-auto">
        <div className="flex h-16 items-center justify-between md:h-20 md:gap-24">
          {/* Left: Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 relative">
            <Image
              src='/logo.png'
              alt='Logo'
              width={80}
              height={50}
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

          {/* Mobile: Right side - Social Icons + Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Social Icons - before hamburger */}
            <div className="flex items-center gap-3">
              <Social href="#" label="Facebook">
                <FaFacebookF className="h-5 w-5 text-neutral-400 transition hover:text-white" />
              </Social>
              <Social href="https://instagram.com/voltislabsgames" label="Instagram">
                <FaInstagram className="h-5 w-5 text-neutral-400 transition hover:text-white" />
              </Social>
              <Social href="#" label="Discord">
                <FaDiscord className="h-5 w-5 text-neutral-400 transition hover:text-white" />
              </Social>
              <Social href="#" label="YouTube">
                <FaYoutube className="h-5 w-5 text-neutral-400 transition hover:text-white" />
              </Social>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-8 h-8 gap-1.5"
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
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black/50 transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {/* Mobile Menu Panel - 70% width */}
        <div className={cn(
          "fixed top-0 right-0 h-full w-[70%] bg-[#0B0B0B] shadow-xl transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-neutral-800 transition"
              aria-label="Close menu"
            >
              <IoClose className="h-6 w-6 text-neutral-400 hover:text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col h-full gap-8 pb-20">
            {/* Mobile Navigation */}
            <nav className="flex flex-col justify-start items-start p-5 gap-6">
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
          </div>
        </div>
      </div>
    </div>
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