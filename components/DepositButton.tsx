'use client';

import { useState } from 'react';

export default function DepositButton({
  service,
  amount,
}: {
  service: string;
  amount: number;
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service, amount }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-white text-black px-6 py-3 font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50"
    >
      {loading ? 'Redirecting...' : `Pay $${amount} Deposit`}
    </button>
  );
}
