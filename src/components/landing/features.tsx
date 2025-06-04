'use client';

import { motion } from 'framer-motion';
import { Code, LayoutDashboard, Lock, Moon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface FeaturesProps {
  data: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const icons = {
  Lock,
  LayoutDashboard,
  Moon,
  Code,
};

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

export function Features({ data }: FeaturesProps) {
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
          className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2"
        >
          {data.items.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <motion.div key={feature.title} variants={item} className="relative">
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-8">
                    {/* Icon with animated background */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -left-3 -top-3 h-20 w-20 rounded-3xl bg-primary/5 transition-all duration-300 group-hover:scale-110" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </motion.div>

                    {/* Content with staggered animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="mt-6 flex flex-1 flex-col"
                    >
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      <p className="mt-4 flex-1 text-base text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Learn more link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className="mt-6 inline-flex items-center text-sm font-medium text-primary"
                    >
                      Learn more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
