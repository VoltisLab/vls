"use client";

import Link from "next/link";
import { FaCookieBite } from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Video Policy", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "Bluesky", href: "#" },
    { label: "Discord", href: "#" },
    { label: "YouTube", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#1f1f1f] py-4">
      <div className="flex max-w-full text-xs flex-col items-center justify-end px-4 gap-3 text-neutral-400 md:flex-row md:gap-28">
        {/* Left */}
        <div className="flex items-center gap-1">
          <span>Copyright © Amanita Design</span>
          <span>|</span>
          <span>All Rights Reserved.</span>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {links.map((link, idx) => (
            <div key={idx} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </Link>
              {idx < links.length - 1 && <span className="mx-1 text-neutral-500">|</span>}
            </div>
          ))}
        </div>

        {/* Right Icon */}
        <button
          aria-label="Cookie settings"
          className="text-neutral-400 transition hover:text-white"
        >
          <FaCookieBite size={20} />
        </button>
      </div>
    </footer>
  );
}
