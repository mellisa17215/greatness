export type Product = {
  id: string;
  name: string;
  price: number; // cents (in GYD)
  currency: string;
  image: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 'sunset-tank',
    name: 'Sunset Tank',
    price: 606700,
    currency: 'GYD',
    image: '/images/sunset-tank.svg',
    description: 'Lightweight tank for sunlit days.'
  },
  {
    id: 'breeze-shorts',
    name: 'Breeze Shorts',
    price: 815900,
    currency: 'GYD',
    image: '/images/breeze-shorts.svg',
    description: 'Comfortable summer shorts.'
  },
  {
    id: 'coast-dress',
    name: 'Coast Dress',
    price: 1443500,
    currency: 'GYD',
    image: '/images/coast-dress.svg',
    description: 'A breezy dress for evenings by the water.'
  },
  {
    id: 'female-dress',
    name: 'Aster Dress (Women)',
    price: 1652700,
    currency: 'GYD',
    image: '/images/female-dress.svg',
    description: 'Light, airy summer dress in breathable linen.'
  },
  {
    id: 'male-tee',
    name: 'Harbor Tee (Men)',
    price: 732200,
    currency: 'GYD',
    image: '/images/male-tee.svg',
    description: 'Soft cotton tee with a relaxed fit.'
  },
  {
    id: 'kids-onesie',
    name: 'Sprout Onesie (Kids)',
    price: 502100,
    currency: 'GYD',
    image: '/images/kids-onesie.svg',
    description: 'Playful onesie with easy snaps for quick changes.'
  },
  {
    id: 'baby-romper',
    name: 'Pebble Romper (Baby)',
    price: 564800,
    currency: 'GYD',
    image: '/images/baby-romper.svg',
    description: 'Soft romper made for newborn comfort.'
  },
  {
    id: 'beach-bag',
    name: 'Shore Bag & Accessories',
    price: 941400,
    currency: 'GYD',
    image: '/images/bag-accessories.svg',
    description: 'Spacious beach bag with matching straw hat.'
  },
  {
    id: 'family',
    name: 'Family Matching Set',
    price: 2071100,
    currency: 'GYD',
    image: '/images/family.webp',
    description: 'Coordinated family summer outfits for parents and children.'
  }
];
