"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Use the booking form below, WhatsApp, or call the atelier. We usually confirm appointments within one business day.",
  },
  {
    q: "How long does a hair colour appointment take?",
    a: "Most colour services take 90–150 minutes. Balayage and corrective colour may require 2.5–4 hours depending on complexity.",
  },
  {
    q: "What is balayage and how long does it last?",
    a: "Balayage is a freehand highlighting technique that creates soft, sunlit dimension. Results typically grow out beautifully for 3–4 months between refreshes.",
  },
  {
    q: "Are hair extensions damaging?",
    a: "When installed and maintained by specialists using quality methods (tape, nano, or keratin bond), extensions can be worn safely. We assess hair integrity before recommending any system.",
  },
  {
    q: "How often should I book a keratin treatment?",
    a: "Most clients refresh keratin every 10–16 weeks depending on hair type, wash frequency, and product care at home.",
  },
  {
    q: "What is hair botox?",
    a: "Hair botox is a deep reconstruction treatment that infuses moisture and protein into the fibre — ideal for depleted, dull, or chemically stressed hair.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Please give at least 24 hours’ notice to reschedule or cancel without charge. Late cancellations may forfeit a deposit on longer colour or bridal bookings.",
  },
  {
    q: "Do you offer complimentary hair consultations?",
    a: "Yes. New colour, extension, and bridal clients receive a dedicated consultation so we can design the right plan before your service.",
  },
  {
    q: "Which products do you use?",
    a: "We work with premium professional houses including Kerastase, Redken, Olaplex, Oribe, and Wella — selected for performance and hair health.",
  },
  {
    q: "Is parking available near the salon?",
    a: "Yes — street parking and nearby garages surround Via Montenapoleone in the heart of Milan’s fashion district.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Digital and printable gift cards are available for any service amount, package, or membership.",
  },
  {
    q: "How does the VIP Hair Club membership work?",
    a: "Members receive monthly service credits, priority booking, stylist preference, and exclusive discounts on treatments and extensions.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mx-auto mb-14 md:mb-16 text-center">
          <div className="eyebrow">Good to Know</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal className="max-w-3xl mx-auto">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-borderline dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex justify-between items-center py-5 sm:py-6 text-left font-display text-base sm:text-lg text-strong min-h-[56px]"
                >
                  {item.q}
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 ml-5 transition-transform duration-300",
                      open && "rotate-45 text-gold"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed max-w-xl pb-6">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
