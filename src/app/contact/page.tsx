'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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
          Let&apos;s talk.
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 mb-16"
        >
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-white/30 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/10 focus:border-white/40 rounded-none px-4 py-3 text-white placeholder:text-white/20 outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-white/30 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/10 focus:border-white/40 rounded-none px-4 py-3 text-white placeholder:text-white/20 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-white/30 mb-2">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/10 focus:border-white/40 rounded-none px-4 py-3 text-white placeholder:text-white/20 outline-none transition"
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-white/30 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/10 focus:border-white/40 rounded-none px-4 py-3 text-white placeholder:text-white/20 outline-none transition resize-none"
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-block text-sm tracking-widest uppercase bg-white text-black px-8 py-3 hover:bg-white/80 transition disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-white/60 pt-2">Thanks — we&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 pt-2">Something went wrong. Please try again.</p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-8 border-t border-white/10 pt-10"
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
