'use client';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import landingContent from '@/config/landing-page.json';

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

export function HowToUse() {
  const { title, subtitle, steps, cta } = landingContent.howToUse;

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">{subtitle}</p>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Horizontal line for larger screens */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-0 right-0 top-[88px] hidden h-0.5 bg-primary/10 lg:block"
          />

          {/* Vertical line for mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-[27px] top-0 w-0.5 bg-primary/10 lg:hidden"
          />

          <div className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={item} className="relative pl-16 lg:pl-0">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/20 bg-background lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
                    {step.icon}
                  </div>
                </motion.div>

                <Card className="relative mt-8 overflow-hidden transition-all duration-300 hover:shadow-xl lg:mt-32">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-base text-muted-foreground">
            {cta.text}{' '}
            <a href={cta.link.href} className="font-medium text-primary hover:underline">
              {cta.link.text}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
