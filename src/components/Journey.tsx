"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consultation",
    text: "We listen — lifestyle, style goals, past colour history, and the look you want to wake up to.",
  },
  {
    n: "02",
    title: "Hair Analysis",
    text: "Texture, density, scalp health, and integrity are assessed so every recommendation is precise.",
  },
  {
    n: "03",
    title: "Personalized Recommendation",
    text: "Cut, colour, treatment, or extension plan — designed around your face, wardrobe, and calendar.",
  },
  {
    n: "04",
    title: "Hair Service",
    text: "Master craftsmanship with premium products, bond protection, and unhurried technique.",
  },
  {
    n: "05",
    title: "Styling & Finishing",
    text: "Polished form, movement, and shine — refined until every angle feels intentional.",
  },
  {
    n: "06",
    title: "Hair Care Advice",
    text: "Home rituals, product guidance, and timing for your next visit — clear and practical.",
  },
  {
    n: "07",
    title: "Follow-up Support",
    text: "We remain available after you leave. Questions, tweaks, and care — handled with care.",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-20 md:py-28 section-alt">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Our Hair Transformation Process</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Seven considered steps to exceptional hair
          </h2>
        </Reveal>
        <div ref={ref} className="relative max-w-2xl">
          <div className="absolute left-[29px] top-2 bottom-2 w-px bg-borderline dark:bg-white/15">
            <motion.div
              style={{ height: fillHeight }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-gold to-gold-soft"
            />
          </div>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="relative pl-[76px] pb-12 last:pb-0"
            >
              <div className="absolute left-4 top-0.5 w-[27px] h-[27px] rounded-full bg-cream dark:bg-[#1a222d] border border-borderline dark:border-white/20 flex items-center justify-center font-display text-[0.78rem] z-[2]">
                {step.n}
              </div>
              <h3 className="font-display font-medium text-strong text-xl mb-2">{step.title}</h3>
              <p className="text-[0.92rem] leading-relaxed max-w-[480px]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
