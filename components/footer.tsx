'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" 
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-20"
        >
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 flex-1"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-zinc-100">Ready to Transform Your Vision?</h3>
              <p className="text-zinc-400 text-lg">Let's create something extraordinary together. Your success story starts here.</p>
            </div>
            <Button 
              size="lg" 
              className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Book a Call
              <IconArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-zinc-400 mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2 text-zinc-100">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`}>{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <TextHoverEffect text="Design" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 -mt-16"
          >
            {/* Copyright */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="text-zinc-400 text-sm"
            >
              © {new Date().getFullYear()} Design
            </motion.p>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.8 }}
              className="flex text-zinc-400 gap-1"
            >
              {['Twitter', 'GitHub', 'LinkedIn'].map((social, index) => (
                <motion.div key={social}>
                  <motion.a
                    href="#" 
                    className="text-zinc-400 hover:text-zinc-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                  >
                    {social}
                  </motion.a>
                  {index < 2 && <span className="mx-1">,</span>}
                </motion.div>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 2.2 }}
              className="flex gap-4 text-sm text-zinc-400"
            >
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
