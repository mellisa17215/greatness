import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-4">
            <img src="/images/greatness-logo.svg" alt="Greatness logo" className="h-12" />
          </a>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/collections"><a className="text-gray-700 hover:text-gray-900">Collections</a></Link>
          <Link href="/about"><a className="text-gray-700 hover:text-gray-900">About</a></Link>
          <Link href="/cart"><a className="px-3 py-1 bg-greatness-gold text-black rounded">Shop</a></Link>
        </nav>
      </div>
    </header>
  );
}
