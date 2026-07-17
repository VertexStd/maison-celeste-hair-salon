"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function Visual({
  src, icon: Icon, label, alt = "", dark = false, className = "", priority = false, onClick, noOverlay = false,
}: {
  src?: string; icon?: LucideIcon; label?: string; alt?: string; dark?: boolean;
  className?: string; priority?: boolean; onClick?: () => void; noOverlay?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={cn(
        "relative overflow-hidden rounded-lux",
        !src && (dark ? "bg-gradient-to-br from-[#2b3648] via-primary to-[#3a4a5f]" : "bg-gradient-to-br from-nude via-blush to-[#EDE4D4]"),
        onClick && "cursor-pointer group",
        className
      )}
    >
      {src ? (
        <Image src={src} alt={alt || label || ""} fill sizes="(max-width:768px) 100vw, 50vw" priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
      ) : Icon ? (
        <div className="absolute inset-0 flex items-center justify-center opacity-45 group-hover:scale-110 transition-transform">
          <Icon size={40} strokeWidth={1.2} className={dark ? "text-gold-soft" : "text-primary"} />
        </div>
      ) : null}
      {src && !noOverlay && <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-60 pointer-events-none" />}
      {label && <span className={cn("absolute left-5 bottom-4 z-10 font-display italic text-[0.95rem]", src || dark ? "text-white/90" : "text-primary/80")}>{label}</span>}
    </div>
  );
}
