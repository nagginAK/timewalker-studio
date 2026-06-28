import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <section className="px-8 py-32 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-white/30 mb-6">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-white/40 mb-16">Last updated: June 2026</p>

        <div className="space-y-12 text-sm text-white/50 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              timewalker.studio and any services offered by Timewalker Inc. and its
              ventures (&quot;Timewalker,&quot; &quot;we,&quot; &quot;us&quot;). By using
              this site or engaging our services, you agree to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">2. Services</h2>
            <p>
              Timewalker Inc. operates as a holding company for several independent
              ventures, including architecture and construction management, custom
              apparel, and media production. Specific terms, pricing, and timelines
              for any project will be confirmed directly with you before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">3. Quotes and Estimates</h2>
            <p>
              Any pricing, estimate, or quote provided through this site or in
              correspondence is non-binding until confirmed in writing. Final project
              scope, pricing, and timelines will be set out in a separate agreement or
              invoice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">4. Payments and Deposits</h2>
            <p>
              Where a deposit or payment is requested through this site, payments are
              processed securely through Stripe. Deposits are generally non-refundable
              once work has begun, except as otherwise agreed in writing or required by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">5. Licensing and Compliance</h2>
            <p>
              Where applicable, services such as construction management are performed
              in accordance with applicable Florida licensing requirements. We will not
              represent ourselves as licensed for a given trade unless we hold the
              appropriate license at the time work is performed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">6. Intellectual Property</h2>
            <p>
              All content on this site — including text, graphics, and branding for
              Timewalker Inc. and its ventures — is owned by Timewalker Inc. unless
              otherwise noted, and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Timewalker Inc. is not liable for
              indirect, incidental, or consequential damages arising from your use of
              this site or our services. Nothing in these Terms limits liability that
              cannot be limited under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Florida, without
              regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the site
              after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">10. Contact Us</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a href="mailto:info@timewalker.studio" className="text-white/70 hover:text-white underline">
                info@timewalker.studio
              </a>{' '}
              or via our{' '}
              <Link href="/contact" className="text-white/70 hover:text-white underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
