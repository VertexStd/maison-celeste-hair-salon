"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand, images } from "@/lib/brand";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      <Image
        src={images.hero}
        alt="Luxury Maison Céleste hair salon interior with elegant styling stations"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/72 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/25" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute rounded-full blur-2xl animate-float opacity-70"
          style={{
            width: 380,
            height: 380,
            top: "10%",
            right: "-6%",
            background: "radial-gradient(circle, rgba(200,169,106,0.42), transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-float opacity-50"
          style={{
            width: 280,
            height: 280,
            bottom: "18%",
            left: "8%",
            animationDelay: "-5s",
            background: "radial-gradient(circle, rgba(248,233,236,0.25), transparent 70%)",
          }}
        />
      </div>
      <div className="relative z-[2] max-w-container mx-auto w-full px-6 sm:px-7 pt-32 pb-24 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3rem,9vw,6rem)] leading-[0.92] text-white tracking-wide mb-5"
        >
          {brand.name}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="eyebrow text-gold-soft mb-6"
        >
          {brand.tagline}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-medium text-white leading-[1.08] mb-6 max-w-[760px] text-[clamp(1.75rem,4vw,3.1rem)]"
        >
          Where Exceptional Hair Meets{" "}
          <em className="italic text-gold-soft">Timeless Elegance.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="text-white/78 max-w-[480px] leading-[1.75] mb-10 text-[1.02rem]"
        >
          Experience bespoke hair services designed around your unique style. From precision cuts
          and luxury coloring to premium treatments and bridal styling, we create beautiful hair
          with exceptional craftsmanship.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-white text-primary px-8 py-3.5 text-sm uppercase tracking-wider font-medium transition-all hover:bg-gold hover:-translate-y-0.5"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center min-h-[48px] rounded-full border border-white/50 text-white px-8 py-3.5 text-sm uppercase tracking-wider font-medium transition-all hover:bg-white/10"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
