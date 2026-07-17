"use client";

import { Reveal } from "./Reveal";
import {
  Sparkles,
  BadgeCheck,
  Palette,
  Gem,
  MessageCircle,
  Leaf,
  Wand2,
  HeartHandshake,
  CalendarHeart,
  Award,
} from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Master Hair Stylists",
    text: "Seasoned artists trained in precision cutting, couture styling, and modern European techniques.",
  },
  {
    icon: HeartHandshake,
    title: "Luxury Experience",
    text: "A calm, private atelier where every appointment feels considered, unhurried, and exclusive.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Color Experts",
    text: "Specialists in balayage, corrective color, and luminous grey coverage with lasting integrity.",
  },
  {
    icon: Gem,
    title: "Premium Hair Products",
    text: "House-selected formulas from leading luxury brands chosen for health, shine, and longevity.",
  },
  {
    icon: MessageCircle,
    title: "Personalized Consultations",
    text: "Face shape, lifestyle, and hair history guide every recommendation — never a one-size finish.",
  },
  {
    icon: Leaf,
    title: "Healthy Hair Philosophy",
    text: "Beauty begins with integrity. We protect the hair fiber while elevating colour and form.",
  },
  {
    icon: Wand2,
    title: "Latest Hair Techniques",
    text: "Bond rebuilding, soft balayage, nano extensions, and advanced keratin systems — refined.",
  },
  {
    icon: Palette,
    title: "Relaxing Luxury Environment",
    text: "Marble light, soft acoustics, and elegant stations designed for quiet transformation.",
  },
  {
    icon: CalendarHeart,
    title: "Flexible Scheduling",
    text: "Early evenings, bridal blocks, and VIP windows when your calendar demands precision.",
  },
  {
    icon: Award,
    title: "Outstanding Customer Care",
    text: "Thoughtful aftercare, warm hospitality, and follow-up that feels personal — never transactional.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Why Céleste</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Craftsmanship you can feel in every strand
          </h2>
          <p className="mt-5 leading-[1.75]">
            We deliver an exceptional luxury hair experience through world-class stylists, premium
            products, personalized consultations, and outstanding customer service.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-borderline dark:bg-white/10 border border-borderline dark:border-white/10 rounded-lux overflow-hidden">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-cream dark:bg-[#1a222d] hover:bg-white dark:hover:bg-[#222b38] transition-colors p-8 md:p-10"
              >
                <item.icon size={24} strokeWidth={1.4} className="text-gold mb-5" />
                <h3 className="font-medium text-strong mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
