"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { brand } from "@/lib/brand";

const links = [
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#experts", label: "Experts" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-cream/90 dark:bg-primary/90 backdrop-blur-xl py-3.5 shadow-glass"
          : "py-5"
      )}
    >
      <div className="max-w-container mx-auto px-6 sm:px-7 flex items-center justify-between">
        <a
          href="#hero"
          className={cn(
            "font-display text-[1.65rem] tracking-wide transition-colors leading-none",
            scrolled ? "text-primary dark:text-white" : "text-white"
          )}
        >
          {brand.name}
        </a>
        <nav
          className={cn(
            "md:flex md:items-center md:gap-8 fixed md:static inset-y-0 right-0 h-screen md:h-auto w-[min(340px,88vw)] md:w-auto bg-cream dark:bg-[#1a222d] md:bg-transparent flex-col md:flex-row justify-center md:justify-normal items-start md:items-center px-10 md:px-0 gap-7 transition-transform duration-500 z-[110]",
            open ? "translate-x-0 flex" : "translate-x-full hidden md:flex"
          )}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-[0.8rem] uppercase tracking-[0.14em] transition-colors text-primary dark:text-white/90 hover:text-gold",
                !scrolled && "md:text-white/90"
              )}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
              scrolled
                ? "border-borderline text-primary dark:border-white/20 dark:text-white"
                : "border-white/40 text-white"
            )}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(
              "inline-flex items-center justify-center min-h-[44px] rounded-full px-7 py-2.5 text-xs uppercase tracking-wider font-medium transition-all",
              scrolled
                ? "bg-primary text-white dark:bg-gold dark:text-primary hover:bg-gold hover:text-primary"
                : "border border-white/55 text-white hover:bg-white hover:text-primary"
            )}
          >
            Book Now
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden z-[120]">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              open || scrolled ? "text-primary dark:text-white" : "text-white"
            )}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="w-11 h-11 flex items-center justify-center"
          >
            {open ? (
              <X className="text-primary dark:text-white" />
            ) : (
              <Menu className={scrolled ? "text-primary dark:text-white" : "text-white"} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-primary/40 z-[105] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
