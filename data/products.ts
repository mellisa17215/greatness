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
    image: '/images/breeze-shorts.svg',
    description: 'Comfortable summer shorts.'
  },
  {
    id: 'coast-dress',
    name: 'Coast Dress',
    price: 6900,
    currency: 'usd',
    image: '/images/coast-dress.svg',
    description: 'A breezy dress for evenings by the water.'
  },
  {
    id: 'female-dress',
    name: 'Aster Dress (Women)',
    price: 7900,
    currency: 'usd',
    image: '/images/female-dress.svg',
    description: 'Light, airy summer dress in breathable linen.'
  },
  {
    id: 'male-tee',
    name: 'Harbor Tee (Men)',
    price: 3500,
    currency: 'usd',
    image: '/images/male-tee.svg',
    description: 'Soft cotton tee with a relaxed fit.'
  },
  {
    id: 'kids-onesie',
    name: 'Sprout Onesie (Kids)',
    price: 2400,
    currency: 'usd',
    image: '/images/kids-onesie.svg',
    description: 'Playful onesie with easy snaps for quick changes.'
  },
  {
    id: 'baby-romper',
    name: 'Pebble Romper (Baby)',
    price: 2700,
    currency: 'usd',
    image: '/images/baby-romper.svg',
    description: 'Soft romper made for newborn comfort.'
  },
  {
    id: 'beach-bag',
    name: 'Shore Bag & Accessories',
    price: 4500,
    currency: 'usd',
    image: '/images/bag-accessories.svg',
    description: 'Spacious beach bag with matching straw hat.'
  },
  {
    id: 'family',
    name: 'Family Matching Set',
    price: 9900,
    currency: 'usd',
    image: 'https://ae01.alicdn.com/kf/HTB1pS9sdBmWBuNkSndVq6AsApXay/Family-Clothing-Summer-Matching-Clothes-Mom-and-Daughter-Dress-Family-Matching-Outfits-Father-Son-Stripe-T.jpg',
    description: 'Coordinated family summer outfits for parents and children.'
  }
];
