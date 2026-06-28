'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Nav />

      {/* Hero */}
      <section className="px-8 py-40 max-w-3xl mx-auto border-b border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-8"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8"
        >
          A holding company for things built properly.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base text-white/50 leading-relaxed"
        >
          Timewalker Inc. started as one person&apos;s answer to a simple
          problem: too many good ideas, not enough structure to carry them.
          Instead of picking one and shelving the rest, we built a company
          designed to hold several — each one run on its own, each one held
          to the same standard.
        </motion.p>
      </section>

      {/* Story */}
      <section className="px-8 py-24 max-w-3xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs tracking-widest uppercase text-white/30 shrink-0">The Story</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-base text-white/50 leading-relaxed"
        >
          <p>
            Timewalker Inc. is based in Broward County, Florida, and was
            founded around a straightforward idea: building one thing well
            doesn&apos;t mean you can only build one thing. The name comes
            from the work itself — moving between disciplines, picking up
            skills out of order, and putting them to use as soon as they&apos;re
            ready.
          </p>
          <p>
            What started as a single person learning construction
            management, screen printing, and media production in parallel
            has grown into a small group of ventures, each one given the
            room to develop at its own pace. Architecture & Construction
            Management is working toward Florida CGC licensure. Sherel &
            Shawnel is standing up a full apparel production studio.
            The Hustle Blueprint is building out a media and content
            practice around entrepreneurship.
          </p>
          <p>
            None of them launched before they were ready, and none of them
            will take on clients before the work behind the scenes is solid.
            That&apos;s the standard the whole company runs on.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-8 py-24 max-w-3xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-4 mb-12">
          <p className="text-xs tracking-widest uppercase text-white/30 shrink-0">What We Value</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="space-y-10">
          {[
            {
              n: '01',
              title: 'Craft over speed',
              body: 'Every venture under Timewalker Inc. is judged on the quality of the work, not how fast it shipped.',
            },
            {
              n: '02',
              title: 'Real licensure, real standards',
              body: 'Where a trade requires a license — construction, design-build — we get it before we take a client’s money.',
            },
            {
              n: '03',
              title: 'One name, one standard',
              body: 'Different ventures, same accountability. The Timewalker name is attached to all of them, so all of them carry it the same way.',
            },
          ].map((item) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-8"
            >
              <p className="text-xs tracking-widest uppercase text-white/30 shrink-0 pt-1">{item.n}</p>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xl">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight max-w-md">
            Want to know more about a specific venture?
          </h2>
          <Link
            href="/ventures"
            className="text-sm px-6 py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-200 shrink-0"
          >
            See the ventures →
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
