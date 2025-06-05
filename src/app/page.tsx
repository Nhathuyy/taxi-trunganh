import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import CardStack from "@/components/cardStack"; // Đường dẫn tuỳ vị trí bạn đặt file

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />
      <CardStack />

        <Section
          id="pricing"
          title="Dịch Vụ"
          description="Những chiếc xe và dịch vụ tốt nhất ở chúng tôi"
        >
          
        <Pricing />
        </Section>

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
