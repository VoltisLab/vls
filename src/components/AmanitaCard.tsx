"use client";

import Image from "next/image";

type Props = {
  src: string;            // e.g. "/img1.jpg"
  title: string;          // e.g. "Phonopolis"
  subtitle?: string;      // e.g. "A hand-crafted adventure game"
};

export default function AmanitaCard({ src, title, subtitle }: Props) {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-sm bg-[#1b1b1b]">
        {/* 16:9 like the reference */}
        <div className="relative aspect-[16/9]">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-110"
            priority={false}
          />
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 text-center">
        <h3 className="text-base font-semibold leading-tight text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-xs leading-snug text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Subtle divider like the screenshot */}
      <div className="mt-5 h-[0.5px] w-full bg-neutral-800/80" />
    </article>
  );
}
