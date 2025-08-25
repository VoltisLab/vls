"use client";
import Image from "next/image";

type Props = {
  src: string; 
  title: string; 
  subtitle?: string; 
};

export default function AmanitaCard({ src, title, subtitle }: Props) {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <article className="group">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-sm bg-[#1b1b1b]">
        {/* 16:9 like the reference */}
        <div className="relative aspect-[16/9]">
          {src === '' ? (
            // Coming Soon placeholder
            <div className="w-full h-full bg-black flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Coming Soon</span>
            </div>
          ) : (
            // Regular image
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-110"
              priority={false}
            />
          )}
        </div>
      </div>
      {/* Text */}
      <div className="mt-2 text-center border-b pb-2 pt-2 border-[#2b2b2b]">
        <h3 className="text-base font-semibold leading-tight text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-xs leading-snug text-neutral-400">
            {truncateText(subtitle, 40)}
          </p>
        )}
      </div>
    </article>
  );
}