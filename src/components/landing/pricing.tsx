'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Pricing({ data }: PricingProps) {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">{data.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-xl grid-cols-1 items-center gap-8 sm:mt-20 lg:max-w-5xl lg:grid-cols-3"
        >
          {data.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              whileHover={{ scale: plan.popular ? 1.02 : 1.05 }}
              className="relative"
            >
              <Card
                className={`relative flex h-full flex-col ${
                  plan.popular
                    ? 'border-primary/50 bg-primary/5 shadow-xl'
                    : 'transition-colors hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                    <Badge
                      variant="default"
                      className="flex items-center gap-1 rounded-full px-4 py-1 text-sm font-medium"
                    >
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative space-y-4 p-6 text-center">
                  <h3 className="text-2xl font-bold leading-7">{plan.name}</h3>
                  <p className="text-base text-muted-foreground">{plan.description}</p>
                  <div className="flex items-end justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                    <span className="text-sm font-medium text-muted-foreground line-through">
                      ${plan.originalPrice}
                    </span>
                    <span className="mb-1 text-sm font-medium text-muted-foreground">USD</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-6 p-6">
                  <div className="flex-1">
                    <ul role="list" className="space-y-4">
                      {plan.features.map((feature, featureIdx) => (
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIdx * 0.1 }}
                          viewport={{ once: true }}
                          key={feature}
                          className="flex items-center gap-x-3 text-base"
                        >
                          <Check
                            className={`h-5 w-5 flex-none ${
                              plan.popular ? 'text-primary' : 'text-primary/70'
                            }`}
                          />
                          <span className={plan.popular ? 'text-foreground' : ''}>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6">
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    className="w-full text-base font-semibold"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
