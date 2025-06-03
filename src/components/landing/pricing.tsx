import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PricingProps {
  data: {
    title: string;
    subtitle: string;
    plans: Array<{
      name: string;
      price: string;
      originalPrice: string;
      description: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }>;
  };
}

export function Pricing({ data }: PricingProps) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{data.subtitle}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {data.plans.map((plan, planIdx) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? 'z-10 scale-105 shadow-xl'
                  : planIdx === 0
                    ? 'sm:rounded-r-none'
                    : planIdx === data.plans.length - 1
                      ? 'sm:rounded-l-none'
                      : 'sm:-mx-4 sm:rounded-none'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-10">
                  <Badge variant="default" className="rounded-full px-3 py-1">
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="relative p-6">
                <h3 className="text-2xl font-semibold leading-7">{plan.name}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground line-through">
                    ${plan.originalPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6">USD</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <ul role="list" className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 text-sm leading-6">
                        <Check className="h-5 w-5 flex-none text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-6">
                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
