# Greatness — Summer 2026 Clothing

Brand: Greatness

Primary domain: greatnessclothing.com

Quick start:
1. Install dependencies:
   npm install
2. Run dev server:
   npm run dev
3. Build for production:
   npm run build
   npm run start

Environment variables (.env.local):
- STRIPE_SECRET_KEY=sk_test_...
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
- STRIPE_WEBHOOK_SECRET=whsec_... (optional for webhook signature verification)

Notes:
- This starter uses Stripe Checkout for payments. The webhook endpoint (pages/api/webhook.ts) will persist confirmed sessions to data/orders.json for demo purposes. For production, replace with a proper DB (Supabase, Postgres, etc.).
- Deploy to Vercel and configure greatnessclothing.com as a custom domain. Add Stripe live keys in production.

Next steps I can do for you:
- Create a Vercel deployment and connect the repo (I can help).
- Generate PNG/WebP assets for social and touch icons.
- Replace orders.json with a DB-backed persistence and add admin UI.
