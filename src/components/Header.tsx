"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { brand } from "@/lib/brand";

const leftLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#experts", label: "Experts" },
];

const rightLinks = [
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

const allLinks = [...leftLinks, ...rightLinks];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkTone = scrolled
    ? "text-primary/70 dark:text-white/70 hover:text-gold"
    : "text-white/75 hover:text-white";

  const logoTone = scrolled ? "text-primary dark:text-white" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-cream/92 dark:bg-[#121820]/92 backdrop-blur-xl shadow-glass py-3.5"
          : "bg-transparent py-5 md:py-6"
      )}
    >
      {scrolled && (
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
          aria-hidden
        />
      )}

      {/* Desktop — editorial split nav, brand truly centered */}
      <div className="hidden lg:block relative max-w-container mx-auto px-8 xl:px-10">
        <a
          href="#hero"
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[1.9rem] tracking-[0.06em] leading-none transition-colors duration-300 z-10",
            logoTone
          )}
        >
          {brand.name}
        </a>

        <div className="flex items-center justify-between min-h-[48px]">
          <nav className="flex items-center gap-9 xl:gap-11" aria-label="Primary">
            {leftLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.7rem] uppercase tracking-[0.22em] font-medium transition-colors duration-300",
                  linkTone
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-8 xl:gap-10">
            <nav className="flex items-center gap-9 xl:gap-11" aria-label="Secondary">
              {rightLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-[0.7rem] uppercase tracking-[0.22em] font-medium transition-colors duration-300",
                    linkTone
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div
              className={cn(
                "flex items-center gap-3 pl-4 ml-1 border-l",
                scrolled ? "border-primary/10 dark:border-white/15" : "border-white/20"
              )}
            >
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle dark mode"
                className={cn(
                  "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300",
                  scrolled
                    ? "border-borderline/80 text-primary dark:border-white/20 dark:text-white hover:border-gold hover:text-gold"
                    : "border-white/35 text-white hover:border-white hover:bg-white/10"
                )}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center min-h-[42px] rounded-full px-6 text-[0.68rem] uppercase tracking-[0.18em] font-medium transition-all duration-300",
                  scrolled
                    ? "bg-primary text-white dark:bg-gold dark:text-primary hover:bg-gold hover:text-primary"
                    : "border border-white/60 text-white hover:bg-white hover:text-primary"
                )}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet bar */}
      <div className="lg:hidden max-w-container mx-auto px-5 sm:px-7 flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className={cn(
            "font-display text-[1.6rem] sm:text-[1.75rem] tracking-[0.05em] leading-none transition-colors duration-300 relative z-[130]",
            open ? "text-primary dark:text-white" : logoTone
          )}
        >
          {brand.name}
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2.5 relative z-[130]">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(
              "inline-flex items-center justify-center min-h-[40px] rounded-full px-4 sm:px-5 text-[0.65rem] uppercase tracking-[0.16em] font-medium transition-all duration-300",
              open || scrolled
                ? "bg-primary text-white dark:bg-gold dark:text-primary"
                : "border border-white/55 text-white hover:bg-white hover:text-primary"
            )}
          >
            Book
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
              open || scrolled ? "text-primary dark:text-white" : "text-white"
            )}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "w-11 h-11 rounded-full flex items-center justify-center transition-colors",
              open || scrolled ? "text-primary dark:text-white" : "text-white"
            )}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden fixed inset-0 z-[120] transition-[opacity,visibility] duration-500",
          open
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        )}
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
      >
        <div className="absolute inset-0 bg-cream dark:bg-[#121820]" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(200,169,106,0.22), transparent 55%), radial-gradient(ellipse at 90% 100%, rgba(248,233,236,0.18), transparent 50%)",
          }}
          aria-hidden
        />

        <nav
          className={cn(
            "relative h-full flex flex-col justify-center px-8 sm:px-12 pt-20 pb-10 transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          aria-label="Mobile"
        >
          <p className="eyebrow mb-8 sm:mb-10 text-gold">Navigate</p>
          <ul className="flex flex-col">
            {allLinks.map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${90 + i * 50}ms` : "0ms" }}
                className={cn(
                  "transition-all duration-500",
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                )}
              >
                <a
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-3.5 border-b border-primary/10 dark:border-white/10"
                >
                  <span className="font-display text-[clamp(1.9rem,8vw,2.85rem)] text-primary dark:text-white leading-none tracking-wide group-hover:text-gold transition-colors">
                    {l.label}
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-gold/65 ml-auto">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:items-center transition-all duration-500",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{ transitionDelay: open ? "360ms" : "0ms" }}
          >
            <a
              href="#contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center min-h-[52px] rounded-full bg-primary text-white dark:bg-gold dark:text-primary px-8 text-[0.7rem] uppercase tracking-[0.18em] font-medium hover:bg-gold hover:text-primary dark:hover:bg-white transition-colors"
            >
              Book an Appointment
            </a>
            <p className="text-sm text-primary/50 dark:text-white/40 sm:ml-1 tracking-wide">
              {brand.phone}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
