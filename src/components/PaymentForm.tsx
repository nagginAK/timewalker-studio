'use client';

import { useState } from 'react';

export default function PaymentForm() {
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    const numericAmount = parseFloat(amount);
    if (!service.trim()) {
      setError('Please enter a project or service name.');
      return;
    }
    if (!numericAmount || numericAmount <= 0) {
      setError('Please enter a valid amount greater than zero.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: service.trim(), amount: numericAmount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-neutral-500 text-sm mb-2">Project / Service</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="e.g. Logo Design Deposit"
          className="w-full bg-transparent border border-neutral-800 px-4 py-3 text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-neutral-500 text-sm mb-2">Amount (USD)</label>
        <input
          type="number"
          min="1"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="500"
          className="w-full bg-transparent border border-neutral-800 px-4 py-3 text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none transition-colors"
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-white text-black px-6 py-3 font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50"
      >
        {loading ? 'Redirecting...' : 'Continue to Payment'}
      </button>
    </div>
  );
}
