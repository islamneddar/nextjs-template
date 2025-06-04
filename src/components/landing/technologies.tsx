'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Technologies() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),transparent)]" />

      {/* Blur effect */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/80 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:bg-black/80 dark:ring-indigo-900/20 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Powerful Stack</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Built on Modern Technologies
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ShipAny leverages the most powerful and reliable technologies in the industry to deliver
            a seamless experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center">
            {/* React */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image src="/logo-react.svg" alt="React" fill className="object-contain relative" />
            </motion.div>

            {/* Next.js */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image src="/next.svg" alt="Next.js" fill className="object-contain relative" />
            </motion.div>

            {/* Tailwind */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/tailwind.svg"
                alt="Tailwind CSS"
                fill
                className="object-contain relative"
              />
            </motion.div>

            {/* Vercel */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/vercel.svg"
                alt="Vercel"
                fill
                className="object-contain relative dark:invert"
                priority
              />
            </motion.div>

            {/* Supabase */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="h-12 w-32 object-contain relative" viewBox="0 0 109 113" fill="none">
                <path
                  d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                  fill="url(#paint1_linear)"
                  fillOpacity="0.2"
                />
                <path
                  d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                  fill="#3ECF8E"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="53.9738"
                    y1="54.974"
                    x2="94.1635"
                    y2="71.8295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#249361" />
                    <stop offset="1" stopColor="#3ECF8E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="36.1558"
                    y1="30.578"
                    x2="54.4844"
                    y2="65.0806"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Stripe */}
            <motion.div variants={item} className="relative h-12 w-32 group">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image src="/stripe-v2.svg" alt="Stripe" fill className="object-contain relative" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
