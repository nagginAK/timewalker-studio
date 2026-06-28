'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Nav />

      {/* Hero */}
      <section className="relative px-8 py-40 max-w-5xl mx-auto border-b border-white/10 overflow-hidden">
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base text-white/50 leading-relaxed max-w-md mb-12"
        >
          Timewalker Inc. is a Florida-based holding company building a small
          family of ventures across architecture, apparel, and media — each
          run with the same discipline and craft.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6 mt-4"
        >
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
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs tracking-widest uppercase text-white/30 shrink-0">Ventures</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20">
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

        <div className="mt-10">
          <Link href="/ventures" className="text-sm text-white/60 hover:text-white transition border-b border-white/20 pb-1">
            More on each venture →
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="px-8 py-24 max-w-5xl mx-auto border-t border-white/10">
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs tracking-widest uppercase text-white/30 shrink-0">Approach</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Slow, on purpose</p>
            <p className="text-sm text-white/50 leading-relaxed">
              We&apos;d rather build one venture properly than launch five
              half-finished. Every business under this roof gets the time it
              needs before it takes on clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Hands on the work</p>
            <p className="text-sm text-white/50 leading-relaxed">
              No outsourced production, no white-label shortcuts. The people
              who run Timewalker Inc. are the same people on the press, on
              site, and behind the camera.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Built in Florida</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Based in Broward County, working across South Florida. We know
              the permitting, the climate, and the market we&apos;re building
              in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-5xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-md">
            Have a project, a question, or just want to know more?
          </h2>
          <Link
            href="/contact"
            className="text-sm px-6 py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-200 shrink-0"
          >
            Get in touch →
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
