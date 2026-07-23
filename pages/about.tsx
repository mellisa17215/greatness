import Head from 'next/head';
import Link from 'next/link';
import { site } from '../data/site';

export default function About() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>About — Summer Clothing</title>
        <meta name="description" content="About Summer Clothing — lightweight, stylish pieces for warm weather." />
        <meta property="og:site_name" content={site.companyName} />
        <meta property="og:url" content={site.companyUrl} />
      </Head>

      <header className="bg-greatness-teal text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">About Summer Clothing</h1>
          <p className="mt-3 max-w-xl">Lightweight, stylish pieces designed for warm weather — from casual sundresses to elegant options that flatter all body shapes.</p>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Types of Summer Clothing</h2>
        <p className="mb-4">We design versatile summer pieces that keep you cool and confident.</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Lightweight sundresses, breezy shorts, crop tops, tank tops, and lightweight pants.</li>
          <li>Dress styles range from casual to elegant with options for all body shapes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Fabrics</h2>
        <p className="mb-4">We prioritize breathable, natural fabrics and light colors to help you stay comfortable in the heat.</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Breathable fabrics like cotton and linen to keep you cool.</li>
          <li>Light or pastel colors reflect sunlight and absorb less heat.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Essential Items</h2>
        <p className="mb-4">Build a summer wardrobe with these staples.</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Tops: crop tops and tank tops.</li>
          <li>Bottoms: shorts and skirts.</li>
          <li>Dresses: from sundresses to maxi dresses.</li>
          <li>Accessories: wide-brimmed hats and sunglasses for sun protection.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Fashionable Outfits</h2>
        <p className="mb-6">Pair casual pieces with stylish accessories to create versatile summer looks for beach days, city explorations, or garden parties.</p>

        <div className="mt-8">
          <Link href="/collections"><a className="inline-block bg-greatness-gold text-black px-4 py-2 rounded">Shop the Collection</a></Link>
        </div>
      </section>

      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-6 text-sm text-gray-700">
          <div>Company: <a href={site.companyUrl} className="text-greatness-teal underline">{site.companyName}</a></div>
          <div>Contact: <a href={`tel:+${site.phone}`} className="underline">+{site.phone}</a></div>
        </div>
      </footer>
    </main>
  );
}
