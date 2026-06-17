'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <Link href="/" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition">
          Timewalker Inc.
        </Link>
        <a href="mailto:info@timewalker.studio" className="text-sm text-white/60 hover:text-white transition">
          Contact
        </a>
      </nav>

      {/* Content */}
      <section className="px-8 py-24 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-6"
        >
          About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-10"
        >
          Built on the work,<br />not the idea of it.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-white/60 text-lg leading-relaxed"
        >
          <p>
            Timewalker Inc. is a Florida S-Corporation founded on the principle of work arbitrage — using every role, every skill, and every opportunity as a building block toward independent practice.
          </p>
          <p>
            The firm operates across architecture and construction management, custom apparel and print production, and media. Each venture is a real operation, not a side project.
          </p>
          <p>
            Based in Broward County, Florida. Targeting Florida CGC licensure by 2027–2028. Building the infrastructure now.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/10 mt-16">
        <p className="text-xs text-white/20">© 2026 Timewalker Inc. — Broward County, Florida</p>
      </footer>

    </main>
  );
}