'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <Link href="/" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition">
          Timewalker Inc.
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="text-sm text-white/60 hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="text-sm text-white hover:text-white transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="px-8 py-24 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-6"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-10"
        >
          Let's talk.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-2">Email</p>
            <a href="mailto:info@timewalker.studio" className="text-lg text-white/70 hover:text-white transition">
              info@timewalker.studio
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-2">Based In</p>
            <p className="text-lg text-white/70">Broward County, Florida</p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-2">Services</p>
            <p className="text-lg text-white/70">Architecture & Construction Management · Screen Printing · Media</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/10 mt-16">
        <p className="text-xs text-white/20">© 2026 Timewalker Inc. — Broward County, Florida</p>
      </footer>

    </main>
  );
}