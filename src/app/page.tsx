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
          <Link href="/contact" className="text-sm text-white/60 hover:text-white transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 py-40 max-w-5xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Quick win 1: large faint background monogram */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-10 right-0 text-[22rem] font-bold leading-none tracking-tighter text-white/[0.03]"
        >
          TW
        </span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-8"
        >
          Florida · Architecture · Print · Media
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8"
        >
          Design.<br />Build.<br />Brand.<br />Document.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6 mt-12"
        >
          {/* Quick win 2: one CTA upgraded to a button */}
          <Link
            href="/contact"
            className="text-sm px-6 py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-200"
          >
            Get in touch →
          </Link>
          <Link href="/about" className="text-sm text-white/60 hover:text-white transition border-b border-white/20 pb-1">
            About the firm →
          </Link>
        </motion.div>
      </section>

      {/* Ventures */}
      <section className="px-8 py-24 max-w-5xl mx-auto">
        {/* Quick win 5: full-width line next to section header */}
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs tracking-widest uppercase text-white/30 shrink-0">Ventures</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Quick win 4: grid dividers bumped to white/20 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20">

          {/* Quick wins 3 & 6: stronger hover + whileInView animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-black p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-6">01</p>
            <h2 className="text-2xl font-semibold mb-4">Architecture & CM</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">Residential and commercial design-build services. Florida CGC licensure in progress. First paid client target: early 2027.</p>
            <p className="text-xs text-white/30 tracking-widest uppercase group-hover:text-white/50 transition-colors">In progress →</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-black p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-6">02</p>
            <h2 className="text-2xl font-semibold mb-4">Sherel & Shawnel</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">Custom apparel and merchandise. South Florida print studio. Manual press, fusion dryer, full production setup.</p>
            <p className="text-xs text-white/30 tracking-widest uppercase group-hover:text-white/50 transition-colors">Launching soon →</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-black p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]"
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-6">03</p>
            <h2 className="text-2xl font-semibold mb-4">The Hustle Blueprint</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">Entrepreneurship, systems, and the build. Canon 5D Mark IV, RØDECaster Pro, full studio setup. Coming soon.</p>
            <p className="text-xs text-white/30 tracking-widest uppercase group-hover:text-white/50 transition-colors">Coming soon →</p>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-xs text-white/20">© 2026 Timewalker Inc.</p>
          <p className="text-xs text-white/20">Broward County, Florida</p>
        </div>
      </footer>

    </main>
  );
}
