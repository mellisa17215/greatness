import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { items } = req.body as { items: Array<{ id: string; name: string; price: number; image?: string; quantity?: number }> };
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    const line_items = items.map((it) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: it.name,
          images: it.image ? [ `${req.headers.origin}${it.image}` ] : []
        },
        unit_amount: it.price
      },
      quantity: it.quantity ?? 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`
    });

    return res.status(200).json({ id: session.id });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
