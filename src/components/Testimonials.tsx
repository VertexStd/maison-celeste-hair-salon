"use client";

import { Reveal } from "./Reveal";
import { Visual } from "./Visual";
import { images } from "@/lib/brand";

const testimonials = [
  {
    quote:
      "My balayage looks like sunlight caught in silk. Soft, dimensional, and still beautiful weeks later — exactly the luxury I hoped for.",
    name: "Alessia F.",
    service: "Balayage",
    story: "From flat colour to luminous, low-maintenance light.",
    src: images.client1,
  },
  {
    quote:
      "On my wedding morning, Lucia created a soft updo that held through ceremony, portraits, and dancing. Elegant without feeling overdone.",
    name: "Chiara L.",
    service: "Bridal Hairstyling",
    story: "Trial to aisle — refined, romantic, and lasting.",
    src: images.client2,
  },
  {
    quote:
      "After years of heat damage, the keratin and scalp ritual changed everything. My hair feels healthy, glossy, and finally manageable.",
    name: "Marta R.",
    service: "Keratin Treatment",
    story: "Frizz calmed, shine restored, styling simplified.",
    src: images.client3,
  },
  {
    quote:
      "The nano extensions are invisible. Length, volume, and movement that look entirely like my own hair — discreet and expensive in the best way.",
    name: "Sofia B.",
    service: "Hair Extensions",
    story: "Seamless length with natural swing and confidence.",
    src: images.client4,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Client Stories</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Trusted by those who notice every detail
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex gap-5 sm:gap-6 overflow-x-auto pb-3 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="shrink-0 w-[min(340px,85vw)] sm:w-[380px] snap-start rounded-lux bg-white dark:bg-[#1a222d] border border-borderline dark:border-white/10 p-8 sm:p-9 shadow-glass hover:-translate-y-1 transition-transform"
              >
                <div className="text-gold tracking-[3px] mb-4" aria-label="5 star rating">
                  ★★★★★
                </div>
                <p className="font-display italic text-strong text-lg leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm opacity-75 mb-6">{t.story}</p>
                <div className="flex items-center gap-3.5">
                  <Visual src={t.src} alt={t.name} className="w-[48px] h-[48px] rounded-full shrink-0" />
                  <div>
                    <strong className="block text-sm text-strong">{t.name}</strong>
                    <span className="text-[0.72rem] uppercase tracking-wide text-gold">
                      {t.service}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
