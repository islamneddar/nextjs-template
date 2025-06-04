'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  data: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      content: string;
      author: {
        name: string;
        role: string;
        avatar: string;
      };
      rating: number;
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
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};

export function Testimonials({ data }: TestimonialsProps) {
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

        {/* Testimonials container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-16"
        >
          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          {/* Scrollable content */}
          <div className="flex gap-8 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory">
            {data.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex-shrink-0 snap-center"
                style={{ width: 'clamp(300px, 35vw, 500px)' }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-1"
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </motion.div>

                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mt-8 text-xl leading-8 tracking-tight"
                    >
                      &ldquo;{testimonial.content}&rdquo;
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mt-8 flex items-center gap-4"
                    >
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          className="object-cover"
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          fill
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.author.role}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <p className="text-sm text-muted-foreground">Scroll to see more testimonials →</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
