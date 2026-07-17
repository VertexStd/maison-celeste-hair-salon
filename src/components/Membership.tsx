"use client";

import { Reveal } from "./Reveal";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Luxury Hair Makeover",
    price: "320",
    period: "package",
    featured: false,
    features: [
      "Consultation & hair analysis",
      "Precision cut or restyle",
      "Gloss or tone refinement",
      "Luxury blow dry finish",
    ],
  },
  {
    name: "Balayage Package",
    price: "280",
    period: "package",
    featured: false,
    features: [
      "Hand-painted balayage",
      "Bond-protecting treatment",
      "Custom gloss toner",
      "Styling & aftercare kit guide",
    ],
  },
  {
    name: "Color & Treatment Package",
    price: "260",
    period: "package",
    featured: false,
    features: [
      "Root touch-up or full colour",
      "Deep conditioning ritual",
      "Scalp detox add-on option",
      "Shine seal finish",
    ],
  },
  {
    name: "Bridal Hair Package",
    price: "450",
    period: "package",
    featured: true,
    features: [
      "Trial styling session",
      "Wedding-day hairstyle",
      "Touch-up kit guidance",
      "Preferred artist priority",
    ],
  },
  {
    name: "Hair Extension Package",
    price: "580",
    period: "from",
    featured: false,
    features: [
      "Consultation & strand match",
      "Application (tape or nano)",
      "Blend cut & styling",
      "First maintenance booking",
    ],
  },
  {
    name: "Monthly Hair Membership",
    price: "149",
    period: "per month",
    featured: false,
    features: [
      "One luxury blow dry monthly",
      "15% off colour services",
      "Priority booking window",
      "Complimentary scalp ritual quarterly",
    ],
  },
  {
    name: "VIP Hair Club",
    price: "299",
    period: "per month",
    featured: true,
    features: [
      "Monthly cut or colour credit",
      "Dedicated stylist preference",
      "20% off treatments & extensions",
      "Private evening appointment slots",
    ],
  },
];

export function Membership() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-primary text-white/85">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mx-auto mb-14 md:mb-16 text-center">
          <div className="eyebrow text-gold-soft">Hair Packages</div>
          <h2 className="font-display font-medium text-white mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Curated packages for every chapter of beauty
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative p-7 md:p-8 flex flex-col rounded-lux border transition-transform duration-500 hover:-translate-y-1",
                  plan.featured
                    ? "bg-[#283345] border-gold/40"
                    : "bg-[#232d3d] border-white/10"
                )}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-gold text-primary text-[0.65rem] uppercase tracking-wide font-semibold px-3.5 py-1.5 rounded-bl-lux rounded-tr-lux">
                    Most Loved
                  </div>
                )}
                <h3 className="font-display font-medium text-white text-xl mb-1.5 pr-16">
                  {plan.name}
                </h3>
                <div className="font-display text-gold-soft text-[2rem] my-4">
                  <sup className="text-base font-sans">€</sup>
                  {plan.price}
                  <span className="block text-[0.75rem] font-sans text-white/55 mt-1">
                    {plan.period}
                  </span>
                </div>
                <ul className="mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm py-2.5 border-t border-white/10 first:border-t-0 flex gap-2.5 text-white/80"
                    >
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "text-center rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-medium transition-all min-h-[48px] flex items-center justify-center",
                    plan.featured
                      ? "bg-gold text-primary hover:brightness-95"
                      : "border border-white/45 text-white hover:bg-white/10"
                  )}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
