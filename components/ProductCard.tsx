import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow">
      <Link href={`/product/${product.slug}`}>
        <a>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{product.name}</h3>
            <div className="mt-2 text-lg font-semibold">${(product.price/100).toFixed(2)}</div>
          </div>
        </a>
      </Link>
    </article>
  );
}
