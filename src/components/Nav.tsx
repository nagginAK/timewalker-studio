'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/ventures', label: 'Ventures' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
      <Link href="/" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition">
        Timewalker Inc.
      </Link>
      <div className="flex gap-6">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition ${
              pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
