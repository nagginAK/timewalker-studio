import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Timewalker Inc.</p>
          <p className="text-xs text-white/20 mt-1">Broward County, Florida</p>
        </div>

        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition">
            Terms of Service
          </Link>
        </div>

        <div className="flex gap-5">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/30 hover:text-white/60 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white/30 hover:text-white/60 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" opacity="0" />
              <path d="M6.5 9h0M6.5 9v9M6.5 6.5v0M11 18v-5.5a2.5 2.5 0 0 1 5 0V18M11 12.5V18" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
