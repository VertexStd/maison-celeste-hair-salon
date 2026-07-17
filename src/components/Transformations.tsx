"use client";

import { Reveal } from "./Reveal";
import { BeforeAfterImage } from "./BeforeAfterImage";
import { images } from "@/lib/brand";

const cases = [
  {
    title: "Luxury Haircut",
    service: "Precision Cut & Soft Layering",
    time: "60 min",
    products: "Oribe · Kerastase Discipline",
    specialist: "Isabella Conti",
    result: "Sculpted movement with effortless daily polish.",
    image: images.splitHaircut,
  },
  {
    title: "Balayage",
    service: "Hand-Painted Blonde Balayage",
    time: "3 hrs",
    products: "Redken Shades EQ · Olaplex",
    specialist: "Sofia Marchetti",
    result: "Sunlit dimension with a soft, lived-in glow.",
    image: images.splitBalayage,
  },
  {
    title: "Hair Color Correction",
    service: "Corrective Colour & Gloss",
    time: "4 hrs",
    products: "Wella Koleston · Bond Builder",
    specialist: "Elena Rossi",
    result: "Even, luminous tone restored with fibre integrity.",
    image: images.splitColorCorrection,
    embeddedLabels: true,
  },
  {
    title: "Hair Extensions",
    service: "Nano Bond Length Extensions",
    time: "3.5 hrs",
    products: "Great Lengths · Seamless Blend",
    specialist: "Giulia Ferraro",
    result: "Undetectable length with natural swing and volume.",
    image: images.splitExtensions,
  },
  {
    title: "Keratin Treatment",
    service: "Luxury Keratin Smoothing",
    time: "2.5 hrs",
    products: "Brazilian Blowout · Kerastase",
    specialist: "Chiara Romano",
    result: "Frizz softened, shine elevated, styling simplified.",
    image: images.splitKeratin,
    embeddedLabels: true,
  },
  {
    title: "Hair Botox",
    service: "Deep Reconstruction Ritual",
    time: "2 hrs",
    products: "Hair Botox Protocol · Moisture Seal",
    specialist: "Anna Greco",
    result: "Silky elasticity and mirror shine from root to tip.",
    image: images.splitBotox,
  },
];

export function Transformations() {
  return (
    <section id="transformations" className="py-20 md:py-28 bg-white dark:bg-[#161d27]">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Hair Transformations</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Before &amp; after, told with restraint
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <article className="rounded-lux overflow-hidden border border-borderline dark:border-white/10 bg-cream/30 dark:bg-[#1a222d]">
                <BeforeAfterImage
                  src={c.image}
                  alt={`${c.title} before and after transformation`}
                  embeddedLabels={"embeddedLabels" in c ? c.embeddedLabels : false}
                />
                <div className="p-6">
                  <h3 className="font-display font-medium text-strong text-lg mb-3">{c.title}</h3>
                  <dl className="text-sm space-y-1.5 mb-4">
                    <div>
                      <dt className="inline text-gold">Service · </dt>
                      <dd className="inline">{c.service}</dd>
                    </div>
                    <div>
                      <dt className="inline text-gold">Time · </dt>
                      <dd className="inline">
                        {c.time} · {c.products}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline text-gold">Specialist · </dt>
                      <dd className="inline">{c.specialist}</dd>
                    </div>
                  </dl>
                  <p className="text-sm mb-4">{c.result}</p>
                  <a
                    href="#contact"
                    className="text-[0.78rem] uppercase tracking-wide text-strong inline-flex items-center gap-1.5 hover:text-gold min-h-[44px]"
                  >
                    Book Similar Service →
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
