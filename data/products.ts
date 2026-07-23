export type Product = {
  id: string;
  name: string;
  price: number; // cents
  currency: string;
  image: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 'sunset-tank',
    name: 'Sunset Tank',
    price: 2900,
    currency: 'usd',
    image: '/images/sunset-tank.svg',
    description: 'Lightweight tank for sunlit days.'
  },
  {
    id: 'breeze-shorts',
    name: 'Breeze Shorts',
    price: 3900,
    currency: 'usd',
    image: '/images/sunset-tank.svg',
    description: 'Comfortable summer shorts.'
  },
  {
    id: 'coast-dress',
    name: 'Coast Dress',
    price: 6900,
    currency: 'usd',
    image: '/images/sunset-tank.svg',
    description: 'A breezy dress for evenings by the water.'
  }
];
