import { HowToUse } from '@/components/landing/HowToUse';
import { Navbar } from '@/components/landing/Navbar';
import { FAQ } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Pricing } from '@/components/landing/pricing';
import { Technologies } from '@/components/landing/technologies';
import { Testimonials } from '@/components/landing/testimonials';
import { ValueProposition } from '@/components/landing/value-proposition';
import landingContent from '@/config/landing-page.json';

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero data={landingContent.hero} />
      <Technologies />
      <ValueProposition />
      <Features data={landingContent.features} />
      <HowToUse />
      <Testimonials data={landingContent.testimonials} />
      <Pricing data={landingContent.pricing} />
      <FAQ data={landingContent.faq} />
      <Footer />
    </main>
  );
}
