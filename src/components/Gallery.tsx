"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { Visual } from "./Visual";
import { images } from "@/lib/brand";

const gallery = [
  { src: images.haircut, label: "Luxury Haircuts", big: true },
  { src: images.balayage, label: "Balayage" },
  { src: images.coloring, label: "Hair Coloring" },
  { src: images.highlights, label: "Highlights", tall: true },
  { src: images.extensions, label: "Hair Extensions" },
  { src: images.bridal, label: "Bridal Hairstyles" },
  { src: images.keratin, label: "Hair Treatments", big: true },
  { src: images.interior, label: "Salon Interior" },
  { src: images.styling, label: "Hair Styling" },
  { src: images.stylist, label: "Professional Stylists" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-20 md:py-28 section-alt">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Luxury Hair Gallery</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Editorial craftsmanship, captured in light
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] gap-3 sm:gap-3.5">
            {gallery.map((img, i) => (
              <Visual
                key={img.label}
                src={img.src}
                label={img.label}
                alt={img.label}
                onClick={() => setActive(i)}
                className={img.tall ? "row-span-2" : img.big ? "col-span-2" : ""}
              />
            ))}
          </div>
        </Reveal>
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-primary/92 z-[200] flex items-center justify-center p-6 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white text-sm uppercase tracking-wide flex items-center gap-2 min-h-[44px]"
            >
              Close <X size={16} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-[min(860px,92vw)] aspect-[16/11]"
              onClick={(e) => e.stopPropagation()}
            >
              <Visual
                src={gallery[active].src}
                label={gallery[active].label}
                alt={gallery[active].label}
                className="w-full h-full rounded-lux"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
