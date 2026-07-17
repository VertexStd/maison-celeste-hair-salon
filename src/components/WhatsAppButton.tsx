"use client";

import { brand } from "@/lib/brand";

export function WhatsAppButton() {
  return (
    <>
      <a
        href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Hello Maison Céleste — I'd like to book a hair appointment.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[5.5rem] right-5 sm:bottom-7 sm:right-7 z-[90] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_26px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden>
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5.3.7.9 2.3 1 2.4.1.2.1.4 0 .6-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.9-1c.2-.3.5-.2.8-.1l1.8.9c.3.1.5.2.6.3.1.2.1.9-.1 1.6z" />
        </svg>
      </a>
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-[90] sm:hidden inline-flex items-center justify-center min-h-[48px] px-5 rounded-full bg-primary text-white text-xs uppercase tracking-wider font-medium shadow-soft"
      >
        Book
      </a>
    </>
  );
}
