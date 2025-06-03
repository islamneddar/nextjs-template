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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero data={landingContent.hero} />

        <div className="space-y-16 py-16 sm:space-y-20 sm:py-20">
          <Technologies />
          <ValueProposition />
          <Features data={landingContent.features} />
          <HowToUse />
          <Testimonials data={landingContent.testimonials} />
          <Pricing data={landingContent.pricing} />
          <FAQ data={landingContent.faq} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
