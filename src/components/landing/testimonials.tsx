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

export function Testimonials({ data }: TestimonialsProps) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{data.subtitle}</p>
        </div>

        {/* Scrollable container */}
        <div className="relative mt-12">
          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          {/* Scrollable content */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {data.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[350px] snap-center flex flex-col justify-between ring-1 ring-gray-900/5 transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="space-y-6">
                    <p className="text-base leading-7 text-muted-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        width={40}
                        height={40}
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.author.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
