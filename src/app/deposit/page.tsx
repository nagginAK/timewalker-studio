import DepositButton from '@/components/DepositButton';

export default function DepositPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        <p className="text-sm tracking-widest text-neutral-500 mb-6">TIMEWALKER INC.</p>
        <h1 className="text-4xl font-bold mb-4">Project Deposit</h1>
        <p className="text-neutral-400 mb-10">
          Secure your project start date with a deposit. You will be redirected to a secure Stripe checkout to complete payment.
        </p>
        <div className="border border-neutral-800 p-8">
          <p className="text-neutral-500 text-sm mb-1">Service</p>
          <p className="text-lg mb-6">Design Deposit</p>
          <p className="text-neutral-500 text-sm mb-1">Amount</p>
          <p className="text-3xl font-bold mb-8">$1.00</p>
          <DepositButton service="Design Deposit" amount={1} />
        </div>
      </div>
    </main>
  );
}
