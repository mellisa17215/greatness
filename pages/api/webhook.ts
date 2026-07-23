import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

// Simple webhook that saves order info to data/orders.json (demo only). For production, use a DB.
export const config = {
  api: {
    bodyParser: false,
  },
};

const ordersFile = path.resolve(process.cwd(), 'data', 'orders.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'] as string | undefined;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } else {
      // If no secret provided, parse body directly (unsafe for prod)
      event = JSON.parse(buf.toString());
    }
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // Save to orders.json
    let orders: any[] = [];
    try {
      if (fs.existsSync(ordersFile)) {
        const raw = fs.readFileSync(ordersFile, 'utf-8');
        orders = JSON.parse(raw || '[]');
      }
    } catch (e) {
      orders = [];
    }

    orders.push({ id: session.id, amount_total: session.amount_total, currency: session.currency, customer_email: session.customer_details?.email || null, created: Date.now() });

    try {
      fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
    } catch (e) {
      console.error('Failed to write orders file', e);
    }
  }

  res.status(200).json({ received: true });
}

// Helper to read raw body
async function buffer(req: NextApiRequest) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: any[] = [];
    req.on('data', (chunk) => chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', (err) => reject(err));
  });
}
