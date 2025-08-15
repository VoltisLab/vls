"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;      // "/img1.jpg"
  caption?: string; // "Creaks Box"
};

type Props = {
  slides: Slide[];
  intervalMs?: number; // default 3000
};

export default function ShowcaseSlider({ slides, intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const count = slides.length;

  // autoplay
  useEffect(() => {
    start();
    return stop; // cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count, intervalMs]);

  const start = () => {
    stop();
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
  };

  const stop = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const goto = (i: number) => setIndex(i % count);

  if (count === 0) return null;

  return (
    <section
      className="w-[70%]  px-2 py-2 md:px-3 md:py-3   "
      onMouseEnter={stop}
      onMouseLeave={start}
      aria-roledescription="carousel"
    >
      <div className="relative mx-auto aspect-[21/9] w-full max-w-full overflow-hidden rounded-sm">
        {/* Slide */}
        <div className="relative h-full w-full">
          <Image
            key={slides[index].src}
            src={slides[index].src}
            alt={slides[index].caption ?? `Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
          {/* Caption bottom-left */}
          {slides[index].caption && (
            <div className="absolute bottom-3 left-3 rounded bg-black/30 px-3 py-2 text-sm text-white md:bottom-4 md:left-4 md:text-base">
              {slides[index].caption}
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="mx-auto mt-4 flex w-full max-w-[1200px] items-center justify-center gap-3 pb-4">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group"
            >
              <span
                className={[
                  "block h-2 w-2 rounded-full transition",
                  active ? "bg-[#ff3b00] scale-[1.1]" : "bg-neutral-500 group-hover:bg-neutral-300",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
