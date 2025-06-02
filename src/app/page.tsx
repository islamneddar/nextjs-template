import { Navbar } from '@/components/landing/Navbar';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import { Pricing } from '@/components/landing/pricing';
import { Technologies } from '@/components/landing/technologies';
import landingContent from '@/config/landing-page.json';

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero data={landingContent.hero} />
      <Technologies />
      <Features data={landingContent.features} />
      <Pricing data={landingContent.pricing} />
    </main>
  );
}
