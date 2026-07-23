type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
};

function formatGYD(cents: number) {
  const amount = cents / 100;
  return new Intl.NumberFormat('en-GY', { style: 'currency', currency: 'GYD' }).format(amount);
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow">
      <a href={`/product/${product.slug}`}>
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <div className="mt-2 text-lg font-semibold">{formatGYD(product.price)}</div>
        </div>
      </a>
    </article>
  );
}
