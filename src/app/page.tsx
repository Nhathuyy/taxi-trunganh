"use client";

import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import dynamic from "next/dynamic";

// Dynamic import + Lazy-load (bật suspense nếu muốn)
const Pricing = dynamic(() => import("@/components/Pricing/Pricing"), {
  ssr: false,
  loading: () => <p>Loading pricing...</p>, // Skeleton / fallback
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => <p>Loading testimonials...</p>,
});

const CardStack = dynamic(() => import("@/components/cardStack"), {
  ssr: false,
  loading: () => <p>Loading reviews...</p>,
});

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        {/* Dynamic load review cardStack */}
        <CardStack />

        {/* Dịch vụ */}
        <Section
          id="pricing"
          title="Dịch Vụ"
          description="Những chiếc xe và dịch vụ tốt nhất ở chúng tôi"
        >
          <Pricing />
        </Section>

        {/* Bảng giá */}
        <Section
          id="testimonials"
          title="Bảng giá Taxi EaSup - Đắk Lắk"
          description="Loại xe taxi 4 chổ - 7 chổ"
        >
          <Testimonials />
        </Section>

        <FAQ />
        <Stats />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
