"use client";

import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { Visual } from "./Visual";
import { brand, images } from "@/lib/brand";

const posts = [
  { src: images.ig1, label: "Balayage" },
  { src: images.ig2, label: "Precision Cuts" },
  { src: images.ig3, label: "Highlights" },
  { src: images.ig4, label: "Extensions" },
  { src: images.ig5, label: "Bridal Hair" },
  { src: images.ig6, label: "Atelier Interior" },
];

export function Products() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-white dark:bg-[#161d27]">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Instagram</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Follow the atelier in real time
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.label} delay={(i % 3) * 0.08}>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
                aria-label={`View ${p.label} on Instagram`}
              >
                <Visual src={p.src} alt={p.label} className="aspect-square rounded-lux" />
                <div className="absolute inset-0 rounded-lux bg-primary/0 group-hover:bg-primary/45 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm uppercase tracking-wider flex items-center gap-2">
                    <Instagram size={16} /> {p.label}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
