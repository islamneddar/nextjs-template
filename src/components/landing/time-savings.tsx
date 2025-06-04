'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const timeCards = [
  {
    hours: '80h+',
    title: 'Designing all web app pages & the landing',
    color: 'text-red-500',
  },
  {
    hours: '240h+',
    title: 'Coding from scratch all pages in NextJS',
    color: 'text-red-500',
  },
  {
    hours: '6h+',
    title: 'Implementing & handling all Stripe webhooks',
    color: 'text-red-500',
  },
  {
    hours: '2h+',
    title: 'Setting up all essential SEO details & tags',
    color: 'text-red-500',
  },
  {
    hours: '10h+',
    title: 'Setting up the whole Supabase structure & tables',
    color: 'text-red-500',
  },
  {
    hours: 'Infinite hours',
    title: 'On completely useless things',
    color: 'text-red-500',
  },
];

export function TimeSavings() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary"
          >
            SAVE HUNDREDS OF HOURS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            We know you are tired of this:
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            We know you&apos;re tired of wasting hundreds of hours of coding & design starting from
            scratch on every project and trying to set up all integrations, components & sections.
            We&apos;ve thought of everything so you don&apos;t have to.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative">
            {/* Curved connecting lines */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full h-full max-w-4xl mx-auto">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100,100 C200,50 300,150 400,100 C500,50 600,150 700,100 C800,50 900,150 1000,100"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>
            </div>

            {/* Cards */}
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {timeCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={item}
                  className="relative rounded-2xl border bg-background/50 p-6 backdrop-blur-sm"
                >
                  <dt>
                    <p className={`text-2xl font-semibold ${card.color}`}>{card.hours}</p>
                    <p className="mt-4 text-lg font-semibold leading-7">{card.title}</p>
                  </dt>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2 text-lg font-medium">
            <span>=</span>
            <span className="text-primary">338+ saved hours</span>
            <span>from the beginning with the help of</span>
            <span className="font-bold">ShipAny</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
