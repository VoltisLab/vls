"use client";

import Image from "next/image";

type Props = {
  leftTitle: string;
  paragraphs: string[];
  rightTitle: string;
  imgSrc: string;       // e.g. "/img2.jpg"
  imgAlt?: string;
};

export default function AboutBody2({
  leftTitle,
  paragraphs,
  rightTitle,
  imgSrc,
  imgAlt = rightTitle,
}: Props) {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-[60%] px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: text */}
          <div>
            <h2 className="text-[22px]  text-white md:text-base">
              {leftTitle}
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-300">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: title + image */}
          <div>
            <h3 className="text-[22px]  text-white md:text-base">
              {rightTitle}
            </h3>
            <div className="mt-4 overflow-hidden rounded-sm bg-black">
              {/* 16:9 like the reference */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
