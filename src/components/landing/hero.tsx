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
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          {/*<div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-semibold">
              {data.badge} <span className="ml-2">{data.badgeText}</span>
            </Badge>
          </div>*/}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-primary">{data.title.highlight}</span> {data.title.main}
            <br />
            <span className="text-muted-foreground">{data.title.sub}</span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" className="text-xl" asChild>
              <a href={data.cta.primary.href}>{data.cta.primary.text}</a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl" asChild>
              <a href={data.cta.secondary.href}>{data.cta.secondary.text}</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center text-sm">
            <span className="mr-2">{data.promotion.icon}</span>
            {data.promotion.text}
          </div>
        </div>
      </div>
    </div>
  );
}
