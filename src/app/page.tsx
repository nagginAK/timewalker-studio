'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
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
          <a href="mailto:info@timewalker.studio" className="text-sm text-white/60 hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col justify-center px-8 py-32 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Design. Build.<br />Brand. Document.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/50 max-w-xl"
        >
          Timewalker Inc. is a Florida-based design and construction management firm operating across architecture, print, and media.
        </motion.p>
      </section>

      {/* Ventures */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-white/30 mb-10">Ventures</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-white/10 p-6 hover:border-white/30 transition"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Architecture & CM</p>
            <h2 className="text-xl font-semibold mb-2">Timewalker Studio</h2>
            <p className="text-sm text-white/50">Residential and commercial design-build services. Florida CGC licensure in progress.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-white/10 p-6 hover:border-white/30 transition"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Screen Printing</p>
            <h2 className="text-xl font-semibold mb-2">Sherel & Shawnel</h2>
            <p className="text-sm text-white/50">Custom apparel and merchandise. South Florida print studio. Launching soon.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-white/10 p-6 hover:border-white/30 transition"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Podcast</p>
            <h2 className="text-xl font-semibold mb-2">The Hustle Blueprint</h2>
            <p className="text-sm text-white/50">Entrepreneurship, systems, and the build. Coming soon.</p>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/10 mt-16">
        <p className="text-xs text-white/20">© 2026 Timewalker Inc. — Broward County, Florida</p>
      </footer>

    </main>
  );
}