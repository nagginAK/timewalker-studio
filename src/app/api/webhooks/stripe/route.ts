import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const stripe = getStripe();
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Payment received:', session.customer_email, session.amount_total);
      break;
    case 'payment_intent.payment_failed':
      console.log('Payment failed');
      break;
  }

  return NextResponse.json({ received: true });
}
