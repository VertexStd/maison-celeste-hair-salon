"use client";

import { useForm } from "react-hook-form";
import { Reveal } from "./Reveal";
import { brand, serviceOptions, stylists } from "@/lib/brand";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  stylist: string;
  date: string;
  message: string;
};

const inputClass =
  "w-full border-0 border-b border-borderline dark:border-white/20 bg-transparent py-3 px-0.5 text-[0.95rem] text-strong focus:outline-none focus:border-gold transition-colors";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400));
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-[#161d27]">
      <div className="max-w-container mx-auto px-6 sm:px-7">
        <Reveal className="max-w-xl mb-14 md:mb-16">
          <div className="eyebrow">Book Your Visit</div>
          <h2 className="font-display font-medium text-strong mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
            Reserve your luxury appointment
          </h2>
          <p className="mt-5 leading-[1.75]">
            We usually confirm appointments within one business day.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16">
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Required" })}
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    type="tel"
                    placeholder="+39 ..."
                    {...register("phone", { required: "Required" })}
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  {...register("email", { required: "Required" })}
                  className={inputClass}
                />
              </Field>
              <Field label="Preferred Hair Service" error={errors.service?.message}>
                <select
                  {...register("service", { required: "Required" })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Stylist" error={errors.stylist?.message}>
                <select
                  {...register("stylist", { required: "Required" })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a stylist
                  </option>
                  {stylists.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date">
                <input type="date" {...register("date")} className={inputClass} />
              </Field>
              <Field label="Message">
                <textarea
                  rows={4}
                  placeholder="Tell us about your hair goals..."
                  {...register("message")}
                  className={inputClass}
                />
              </Field>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 min-h-[52px] rounded-full bg-primary text-white py-4 text-sm uppercase tracking-wider font-medium transition-all hover:bg-gold hover:text-primary disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Book Appointment"}
                </button>
                <a
                  href={`tel:${brand.phoneHref}`}
                  className="flex-1 min-h-[52px] rounded-full border border-primary dark:border-white/30 text-strong py-4 text-sm uppercase tracking-wider font-medium transition-all hover:bg-primary hover:text-white inline-flex items-center justify-center"
                >
                  Call Now
                </a>
              </div>
              {isSubmitSuccessful && (
                <p className="mt-4 text-sm text-success" role="status">
                  Thank you — we&apos;ll confirm within one business day.
                </p>
              )}
            </form>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-lux bg-primary text-white p-8 sm:p-10 h-full flex flex-col">
              <div className="eyebrow text-gold-soft mb-6">Atelier Details</div>
              <InfoRow icon={MapPin} title="Address">
                {brand.address}
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href={`tel:${brand.phoneHref}`} className="hover:text-gold-soft">
                  {brand.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href={`mailto:${brand.email}`} className="hover:text-gold-soft">
                  {brand.email}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} title="Business Hours">
                {brand.hours}
              </InfoRow>
              <InfoRow icon={MessageCircle} title="WhatsApp">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft"
                >
                  Message the atelier
                </a>
              </InfoRow>
              <div className="mt-6 flex-1 min-h-[180px] rounded-lux overflow-hidden border border-white/10">
                <iframe
                  title="Maison Céleste on Google Maps"
                  src={brand.mapsEmbed}
                  className="w-full h-full min-h-[180px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="block text-[0.72rem] uppercase tracking-wide mb-2">{label}</label>
      {children}
      {error && <p className="text-[0.75rem] text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-4 border-t border-white/10 first:border-t-0 first:pt-0">
      <Icon size={18} className="text-gold shrink-0 mt-0.5" />
      <div>
        <strong className="block text-sm mb-0.5">{title}</strong>
        <span className="text-[0.84rem] text-white/65 leading-relaxed">{children}</span>
      </div>
    </div>
  );
}
