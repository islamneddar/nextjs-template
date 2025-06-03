'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Purchase Boilerplate',
    description: 'Get instant access to our production-ready codebase with all essential features.',
    icon: '💳',
  },
  {
    title: 'Clone & Setup',
    description:
      'Follow our detailed documentation to clone the repository and set up your development environment.',
    icon: '📖',
  },
  {
    title: 'Customize',
    description: 'Modify the codebase to match your brand and add your unique business logic.',
    icon: '🎨',
  },
  {
    title: 'Deploy',
    description: 'Push to production with confidence using our deployment guides for Vercel.',
    icon: '🚀',
  },
];

export function HowToUse() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How to Use ShipAny</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your SaaS up and running in four simple steps
          </p>
        </div>

        <div className="mt-8 relative">
          {/* Progress Line */}
          <motion.div
            className="absolute left-[50%] top-0 h-full w-0.5 bg-muted"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex items-center gap-6 ${index % 2 === 0 ? 'justify-end' : ''}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <div
                  className={`w-full lg:w-[300px] ${index % 2 === 0 ? 'text-right' : 'order-last'}`}
                >
                  <motion.div
                    className="bg-card rounded-xl p-4 shadow-lg ring-1 ring-gray-900/5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="flex-1 text-base font-semibold">{step.title}</h3>
                          <span className="text-2xl">{step.icon}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl">{step.icon}</span>
                          <h3 className="flex-1 text-base font-semibold">{step.title}</h3>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="relative flex h-4 w-4 items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    delay: index * 0.2 + 0.3,
                  }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <div className="absolute h-3 w-3 rounded-full border border-primary animate-ping" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
