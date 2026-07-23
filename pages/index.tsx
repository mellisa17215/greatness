import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-greatness-teal text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Greatness — Summer 2026</h1>
          <p className="mt-3 max-w-xl">Effortless pieces for sunlit days and warm nights.</p>
          <Link href="#shop">
            <a className="inline-block mt-6 bg-greatness-gold text-black px-4 py-2 rounded">Shop the Drop</a>
          </Link>
        </div>
      </header>

      <section id="shop" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={{ id: p.id, name: p.name, price: p.price, image: p.image, slug: p.id }} />
          ))}
        </div>
      </section>
    </main>
  );
}
