import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <section className="px-8 py-32 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-white/30 mb-6">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-white/40 mb-16">Last updated: June 2026</p>

        <div className="space-y-12 text-sm text-white/50 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">1. Overview</h2>
            <p>
              Timewalker Inc. (&quot;Timewalker,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) operates timewalker.studio and the ventures listed on this
              site. This Privacy Policy explains what information we collect when you
              visit our site or contact us, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information in the following ways:</p>
            <p className="mb-3">
              Information you provide directly: when you submit a contact form, request
              a quote, or make a payment, we collect details such as your name, email
              address, phone number, and the contents of your message.
            </p>
            <p>
              Information collected automatically: like most websites, we may collect
              basic technical information such as browser type, device type, and pages
              visited through standard hosting and analytics infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">3. How We Use Information</h2>
            <p>
              We use the information we collect to respond to inquiries, provide
              quotes and services, process payments, and improve our site. We do not
              sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">4. Payment Information</h2>
            <p>
              Payments made through this site are processed by Stripe, a third-party
              payment processor. We do not store your full card details on our
              servers. Please refer to Stripe&apos;s own privacy policy for details on
              how they handle payment data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">5. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as
              needed to operate our business (for example, our email and payment
              processors), to comply with the law, or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">6. Data Retention</h2>
            <p>
              We retain contact and project information for as long as reasonably
              necessary to respond to your inquiry, fulfill a service, or meet legal
              and accounting obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">7. Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of the personal
              information we hold about you at any time by contacting us using the
              details below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-3">9. Contact Us</h2>
            <p>
              Questions about this policy can be sent to{' '}
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
