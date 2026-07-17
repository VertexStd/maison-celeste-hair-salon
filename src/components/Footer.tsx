"use client";

import { useState } from "react";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { brand } from "@/lib/brand";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-[#171F2B] text-white/60 pt-16 md:pt-20">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 pb-14">
          <div>
            <a href="#hero" className="font-display text-2xl text-white mb-3 block leading-none">
              {brand.name}
            </a>
            <p className="text-[0.8rem] uppercase tracking-[0.18em] text-gold-soft mb-4">
              Luxury Hair Salon
            </p>
            <p className="text-[0.85rem] leading-relaxed max-w-[280px] mb-5">
              {brand.tagline} A luxury destination for cuts, colour, treatments, extensions, and
              bridal artistry.
            </p>
            <div className="flex gap-3">
              <Social href={brand.instagram} label="Instagram">
                <Instagram size={14} />
              </Social>
              <Social href={brand.facebook} label="Facebook">
                <Facebook size={14} />
              </Social>
              <Social href={brand.tiktok} label="TikTok">
                <span className="text-[10px] font-semibold tracking-tight">TT</span>
              </Social>
            </div>
          </div>
          <FooterCol
            title="Hair Services"
            links={[
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Experts", "#experts"],
              ["Packages", "#packages"],
            ]}
          />
          <FooterCol
            title="Explore"
            links={[
              ["Transformations", "#transformations"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
              ["Instagram", "#instagram"],
            ]}
          />
          <div>
            <h5 className="text-[0.75rem] uppercase tracking-wide text-gold-soft mb-5">
              Newsletter
            </h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                e.currentTarget.reset();
              }}
              className="flex border-b border-white/25"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent border-0 py-2.5 text-[0.88rem] text-white focus:outline-none min-h-[44px]"
              />
              <button type="submit" className="text-gold text-[0.8rem] uppercase tracking-wide shrink-0">
                {subscribed ? "Joined ✓" : "Join"}
              </button>
            </form>
            <div className="mt-6 text-[0.82rem] space-y-1.5">
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.address}</p>
              <p className="pt-2 text-white/45">{brand.hours}</p>
            </div>
          </div>
        </div>
        <div className="hairline" />
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-[0.78rem]">
          <span>
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </span>
          <a
            href="#hero"
            aria-label="Back to top"
            className="w-[42px] h-[42px] border border-white/20 rounded-full flex items-center justify-center transition-colors hover:border-gold hover:bg-gold"
          >
            <ArrowUp size={15} className="text-gold" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-[36px] h-[36px] border border-white/18 rounded-full flex items-center justify-center transition-colors hover:border-gold hover:bg-gold hover:text-white"
    >
      {children}
    </a>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h5 className="text-[0.75rem] uppercase tracking-wide text-gold-soft mb-5">{title}</h5>
      <ul>
        {links.map(([label, href]) => (
          <li key={label} className="mb-3 text-[0.88rem]">
            <a href={href} className="hover:text-gold-soft transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
