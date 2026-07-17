"use client";

import { Instagram, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { Visual } from "./Visual";
import { images } from "@/lib/brand";

const artists = [
  {
    name: "Isabella Conti",
    role: "Master Hair Stylist",
    years: "16 years",
    specialty: "Precision cutting · Soft layering",
    certs: "Vidal Sassoon · L’Oréal Professionnel",
    src: images.artist1,
  },
  {
    name: "Marco Bellini",
    role: "Creative Director",
    years: "18 years",
    specialty: "Editorial form · Runway styling",
    certs: "Tony & Guy Academy · Fashion Week Artist",
    src: images.artist5,
  },
  {
    name: "Elena Rossi",
    role: "Senior Color Specialist",
    years: "14 years",
    specialty: "Corrective colour · Gloss systems",
    certs: "Redken Certified · Wella Master Color",
    src: images.artist2,
  },
  {
    name: "Sofia Marchetti",
    role: "Balayage Expert",
    years: "12 years",
    specialty: "Hand-painted light · Babylights",
    certs: "Balayage Master · Olaplex Certified",
    src: images.artist3,
  },
  {
    name: "Giulia Ferraro",
    role: "Hair Extension Specialist",
    years: "11 years",
    specialty: "Nano · Tape · Keratin bonds",
    certs: "Great Lengths · Nano Tip Certified",
    src: images.artist6,
  },
  {
    name: "Chiara Romano",
    role: "Keratin Specialist",
    years: "10 years",
    specialty: "Smoothing · Bond rebuilding",
    certs: "Brazilian Blowout · Kerastase Expert",
    src: images.artist4,
  },
  {
    name: "Lucia Bianchi",
    role: "Bridal Hair Artist",
    years: "13 years",
    specialty: "Updos · Hollywood waves",
    certs: "Bridal Couture · European Styling Guild",
    src: images.artist7,
  },
  {
    name: "Anna Greco",
    role: "Scalp Care Expert",
    years: "9 years",
    specialty: "Scalp detox · Hair spa rituals",
    certs: "Trichology Diploma · Davines Certified",
    src: images.artist8,
  },
];

export function Experts() {
  return (
    <section id="experts" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Meet Our Experts</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            The artists behind every transformation
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {artists.map((a, i) => (
            <Reveal key={a.name} delay={(i % 4) * 0.08}>
              <article className="group h-full flex flex-col">
                <Visual
                  src={a.src}
                  alt={a.name}
                  className="aspect-[3/3.8] mb-5 transition-shadow duration-500 group-hover:shadow-soft"
                />
                <h3 className="font-display font-medium text-strong text-lg mb-0.5">{a.name}</h3>
                <div className="text-[0.72rem] uppercase tracking-wide text-gold mb-1">{a.role}</div>
                <p className="text-[0.78rem] text-strong/70 mb-1">{a.years} experience</p>
                <p className="text-sm font-medium text-strong mb-1">{a.specialty}</p>
                <p className="text-[0.82rem] leading-relaxed mb-4 opacity-80 flex-1">{a.certs}</p>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label={`${a.name} on Instagram`}
                      className="w-[34px] h-[34px] border border-borderline dark:border-white/15 rounded-full flex items-center justify-center transition-all hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <Instagram size={13} />
                    </a>
                    <a
                      href="#"
                      aria-label={`${a.name} on LinkedIn`}
                      className="w-[34px] h-[34px] border border-borderline dark:border-white/15 rounded-full flex items-center justify-center transition-all hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <Linkedin size={13} />
                    </a>
                  </div>
                  <a
                    href="#contact"
                    className="text-[0.72rem] uppercase tracking-wide text-strong hover:text-gold min-h-[34px] inline-flex items-center"
                  >
                    Book →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
