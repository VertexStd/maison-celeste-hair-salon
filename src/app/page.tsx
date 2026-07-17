import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Treatments } from "@/components/Treatments";
import { Experts } from "@/components/Experts";
import { Journey } from "@/components/Journey";
import { Transformations } from "@/components/Transformations";
import { Testimonials } from "@/components/Testimonials";
import { Membership } from "@/components/Membership";
import { Products } from "@/components/Products";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <WhyChooseUs />
        <Treatments />
        <Experts />
        <Journey />
        <Transformations />
        <Testimonials />
        <Membership />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
