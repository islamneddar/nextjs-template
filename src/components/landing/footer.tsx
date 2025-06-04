'use client';

import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Changelog', href: '/changelog' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Community', href: '/community' },
    { name: 'Partners', href: '/partners' },
    { name: 'Status', href: '/status' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export function Footer() {
  return (
    <footer className="relative border-t">
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

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-24 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="xl:grid xl:grid-cols-5 xl:gap-8"
        >
          {/* Brand and Newsletter */}
          <motion.div variants={item} className="space-y-8 xl:col-span-2">
            <div className="space-y-4">
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              >
                ShipAny
              </Link>
              <p className="text-base text-muted-foreground max-w-xs">
                Launch your SaaS product faster with our production-ready Next.js template.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold">Subscribe to our newsletter</h3>
              <div className="flex max-w-md gap-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50 backdrop-blur-sm"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get the latest updates and news directly to your inbox.
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 xl:justify-end"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">
              <motion.div variants={item}>
                <h3 className="text-base font-semibold">Product</h3>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-6 space-y-4"
                >
                  {navigation.product.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={listItem}
                      className="transition-transform hover:translate-x-1"
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div variants={item} className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold">Company</h3>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-6 space-y-4"
                >
                  {navigation.company.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={listItem}
                      className="transition-transform hover:translate-x-1"
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div variants={item}>
                <h3 className="text-base font-semibold">Resources</h3>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-6 space-y-4"
                >
                  {navigation.resources.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={listItem}
                      className="transition-transform hover:translate-x-1"
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t pt-8 sm:mt-20"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ShipAny. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
