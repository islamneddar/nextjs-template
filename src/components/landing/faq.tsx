'use client';

import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  data: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function FAQ({ data }: FAQProps) {
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
          className="mx-auto mt-16 max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {data.questions.map((faqItem, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <AccordionItem value={`item-${index}`} className="border-none px-6">
                  <AccordionTrigger className="gap-4 py-6 text-left text-lg font-medium [&[data-state=open]>svg]:text-primary">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-base leading-7 text-muted-foreground"
                    >
                      {faqItem.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact support link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-base text-muted-foreground">
            Still have questions?{' '}
            <a href="#contact" className="font-medium text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
