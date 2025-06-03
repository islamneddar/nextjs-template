'use client';

import { Code, LayoutDashboard, Lock, Moon } from 'lucide-react';

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

export function Features({ data }: FeaturesProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">{data.subtitle}</p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {data.items.map((feature) => {
              const Icon = icons[feature.icon as keyof typeof icons];
              return (
                <div key={feature.title} className="flex flex-col gap-6">
                  <dt className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-2xl font-semibold">{feature.title}</span>
                  </dt>
                  <dd className="text-lg leading-7 text-muted-foreground">{feature.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
