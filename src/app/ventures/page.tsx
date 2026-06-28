'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const VENTURES = [
  {
    n: '01',
    name: 'Architecture & CM',
    status: 'In progress',
    summary: 'Residential and commercial design-build services, run under Timewalker Inc.',
    body: [
      'Architecture & Construction Management is the firm’s design-build practice — full-service work spanning concept, drawings, permitting, and construction oversight for residential and small commercial projects.',
      'Florida CGC (Certified General Contractor) licensure is currently in progress. We’re building the practice the right way: getting licensed before taking on paid client work, not after. Target for the first paid engagement is early 2027.',
      'Once licensed, the practice will focus on South Florida — renovations, additions, and ground-up small-scale builds — with the same hands-on approach across design and construction.',
    ],
  },
  {
    n: '02',
    name: 'Sherel & Shawnel',
    status: 'Launching soon',
    summary: 'Custom apparel and merchandise out of a South Florida print studio.',
    body: [
      'Sherel & Shawnel is Timewalker Inc.’s apparel and merchandise venture — custom screen printing for individuals, small businesses, teams, and events.',
      'The studio runs a manual press and fusion dryer, with a full production setup built for short runs and custom orders rather than mass-market volume. That means more attention per order, not less.',
      'We’re in the final stages of standing up production before opening to outside orders. Follow along for the launch announcement.',
    ],
  },
  {
    n: '03',
    name: 'The Hustle Blueprint',
    status: 'Coming soon',
    summary: 'Media and content built around entrepreneurship, systems, and the build.',
    body: [
      'The Hustle Blueprint is the media arm of Timewalker Inc. — a content practice focused on entrepreneurship, business systems, and documenting the process of building multiple ventures at once.',
      'Production runs on a Canon 5D Mark IV and a RØDECaster Pro, with a full studio setup for video and audio. The goal is straightforward: show the real, unglamorous work behind building something, not just the highlight reel.',
      'Currently in development. First releases are coming soon.',
    ],
  },
];

export default function Ventures() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <section className="px-8 py-32 max-w-3xl mx-auto border-b border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-8"
        >
          Ventures
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
        >
          Three ventures. One standard.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base text-white/50 leading-relaxed"
        >
          Each venture under Timewalker Inc. is built and run independently,
          on its own timeline — but held to the same bar for craft and
          professionalism.
        </motion.p>
      </section>

      {VENTURES.map((v, i) => (
        <section
          key={v.n}
          className={`px-8 py-24 max-w-3xl mx-auto ${i < VENTURES.length - 1 ? 'border-b border-white/10' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <p className="text-xs tracking-widest uppercase text-white/30">{v.n}</p>
              <h2 className="text-2xl md:text-3xl font-semibold">{v.name}</h2>
              <span className="text-xs tracking-widest uppercase text-white/40 border border-white/15 px-3 py-1 ml-auto">
                {v.status}
              </span>
            </div>
            <p className="text-base text-white/60 mb-8">{v.summary}</p>
            <div className="space-y-4">
              {v.body.map((p, j) => (
                <p key={j} className="text-sm text-white/50 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </section>
      ))}

      <section className="px-8 py-24 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight max-w-md">
            Interested in working with one of our ventures?
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
