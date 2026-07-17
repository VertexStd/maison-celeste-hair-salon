"use client";

import Image from "next/image";

type BeforeAfterImageProps = {
  src: string;
  alt: string;
  embeddedLabels?: boolean;
};

export function BeforeAfterImage({ src, alt, embeddedLabels = false }: BeforeAfterImageProps) {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1a222d]/5">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/50 z-[1]"
        aria-hidden
      />
      {!embeddedLabels && (
        <div className="absolute inset-0 grid grid-cols-2 pointer-events-none z-[2]">
          <div className="flex items-end p-3 sm:p-4">
            <span className="bg-primary/90 text-white text-[0.6rem] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full backdrop-blur-sm">
              Before
            </span>
          </div>
          <div className="flex items-end justify-end p-3 sm:p-4">
            <span className="bg-gold text-primary text-[0.6rem] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
              After
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
