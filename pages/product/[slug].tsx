import { useRouter } from 'next/router';
import { products } from '../../data/products';
import { getStripe } from '../../lib/stripe';
import { useState } from 'react';

function formatGYD(cents: number) {
  const amount = cents / 100;
  return new Intl.NumberFormat('en-GY', { style: 'currency', currency: 'GYD' }).format(amount);
}

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((p) => p.id === slug);
  const [loading, setLoading] = useState(false);

  if (!product) return <div className="container mx-auto p-6">Product not found</div>;

  const handleBuyNow = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }] })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');

      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe failed to load');
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error(err);
      alert('Checkout failed — check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img src={product.image} alt={product.name} className="max-h-[420px]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-lg">{formatGYD(product.price)}</p>
          <p className="mt-6">{product.description}</p>
          <button
            onClick={handleBuyNow}
            disabled={loading}
            className="mt-6 bg-greatness-teal text-white px-5 py-2 rounded"
          >
            {loading ? 'Redirecting...' : 'Buy now'}
          </button>
        </div>
      </div>
    </main>
  );
}
