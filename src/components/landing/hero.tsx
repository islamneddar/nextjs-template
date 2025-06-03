import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HeroProps {
  data: {
    badge: string;
    badgeText: string;
    title: {
      highlight: string;
      main: string;
      sub: string;
    };
    description: string;
    cta: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
    promotion: {
      text: string;
      icon: string;
    };
  };
}

export function Hero({ data }: HeroProps) {
  return (
    <div className="relative isolate">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden bg-gradient-to-r from-background via-muted/20 to-background"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
              <span className="font-semibold text-primary">{data.badge}</span>
              <span className="ml-1 text-muted-foreground">{data.badgeText}</span>
            </Badge>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-primary">{data.title.highlight}</span>{' '}
            <span className="block">{data.title.main}</span>{' '}
            <span className="block text-muted-foreground">{data.title.sub}</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            {data.description}
          </p>

          {/* Call to action */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[200px] text-base">
              <Link href={data.cta.primary.href}>
                {data.cta.primary.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base">
              <Link href={data.cta.secondary.href}>{data.cta.secondary.text}</Link>
            </Button>
          </div>

          {/* Promotion */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>{data.promotion.icon}</span>
            <span>{data.promotion.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
