import PaymentForm from '@/components/PaymentForm';
import Link from 'next/link';

export default function DepositPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full">
        <Link href="/" className="text-sm text-white/40 hover:text-white transition mb-10 inline-block">
          &larr; Back
        </Link>
        <p className="text-sm tracking-widest text-neutral-500 mb-6">TIMEWALKER INC.</p>
        <h1 className="text-4xl font-bold mb-4">Project Deposit</h1>
        <p className="text-neutral-400 mb-10">
          Enter your project details and deposit amount. You will be redirected to a secure Stripe checkout to complete payment.
        </p>
        <div className="border border-neutral-800 p-8">
          <PaymentForm />
        </div>
      </div>
    </main>
  );
}
