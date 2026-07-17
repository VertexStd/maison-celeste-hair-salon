"use client";

import { Reveal } from "./Reveal";
import { Visual } from "./Visual";
import { images } from "@/lib/brand";

const services = [
  {
    src: images.haircut,
    title: "Luxury Haircut",
    desc: "Precision cutting tailored to face shape, texture, and lifestyle — finished with soft movement and polished form.",
    duration: "45–75 min",
    price: "€85",
  },
  {
    src: images.balayage,
    title: "Balayage",
    desc: "Hand-painted luminosity that melts through the hair for a sunlit, low-maintenance, couture finish.",
    duration: "2.5–3.5 hrs",
    price: "€220",
  },
  {
    src: images.coloring,
    title: "Hair Coloring",
    desc: "Full colour, gloss, root refinement, or fashion tones executed with bond-protecting systems.",
    duration: "90–150 min",
    price: "€140",
  },
  {
    src: images.extensions,
    title: "Hair Extensions",
    desc: "Tape, nano, and keratin bond methods for seamless length and volume — discreet, luxurious, and lasting.",
    duration: "2–4 hrs",
    price: "€380",
  },
  {
    src: images.keratin,
    title: "Keratin Treatment",
    desc: "Smoothing therapy that softens frizz, restores shine, and leaves hair refined for weeks.",
    duration: "2–3 hrs",
    price: "€250",
  },
  {
    src: images.botox,
    title: "Hair Botox",
    desc: "Deep reconstruction for depleted fibres — glassy shine, silk touch, and renewed elasticity.",
    duration: "90–120 min",
    price: "€180",
  },
  {
    src: images.blowdry,
    title: "Luxury Blow Dry",
    desc: "Salon polish with volume, softness, and lasting hold — ready for dinners, boards, and evenings out.",
    duration: "45–60 min",
    price: "€55",
  },
  {
    src: images.bridal,
    title: "Bridal Hairstyling",
    desc: "Trial-to-aisle artistry: updos, Hollywood waves, and soft romantic form timed to your ceremony.",
    duration: "90–150 min",
    price: "€280",
  },
  {
    src: images.scalp,
    title: "Scalp Treatment",
    desc: "Detox, balance, and revitalize the scalp foundation that healthy, luminous hair depends on.",
    duration: "45–60 min",
    price: "€75",
  },
  {
    src: images.spa,
    title: "Luxury Hair Spa",
    desc: "A restorative ritual of moisture therapy, protein care, and scalp massage in quiet luxury.",
    duration: "60–90 min",
    price: "€110",
  },
];

export function Treatments() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-[#161d27]">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Featured Services</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Cuts, colour, treatments &amp; bridal artistry
          </h2>
          <p className="mt-5 leading-[1.75]">
            From precision haircuts and bespoke coloring to balayage, extensions, keratin, and bridal
            styling — every service is tailored to you.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="group h-full flex flex-col rounded-lux overflow-hidden border border-borderline dark:border-white/10 bg-cream/40 dark:bg-[#1a222d] transition-all duration-500 hover:shadow-soft hover:-translate-y-1">
                <Visual src={s.src} alt={s.title} className="aspect-[4/3] rounded-none" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between text-[0.72rem] uppercase tracking-wide text-gold mb-3">
                    <span>{s.duration}</span>
                    <span>From {s.price}</span>
                  </div>
                  <h3 className="font-display font-medium text-strong text-xl mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-primary text-white px-6 py-2.5 text-[0.78rem] uppercase tracking-wider transition-all hover:bg-gold hover:text-primary self-start"
                  >
                    Book Now
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
