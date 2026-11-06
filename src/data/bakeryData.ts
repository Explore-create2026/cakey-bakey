export interface CakeItem {
  id: string;
  name: string;
  category: 'birthday' | 'chocolate' | 'wedding' | 'bento' | 'fusion';
  categoryLabel: string;
  pricePerHalfKg: number;
  pricePerKg: number;
  description: string;
  flavorNotes: string[];
  egglessAvailable: boolean;
  image: string;
  popular?: boolean;
  bestsellerTag?: string;
  servingsInfo: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  locality: string;
  rating: number;
  date: string;
  comment: string;
  cakeType: string;
}

export const BAKERY_INFO = {
  name: 'Cakey Bakey',
  subtitle: 'Custom cakes',
  tagline: 'Handcrafted custom cakes baked fresh with love in Hridaypur, Kolkata',
  phone: '093305 63954',
  phoneClean: '919330563954',
  phoneDisplay: '+91 93305 63954',
  address: 'Dr Sarada Prasad Ghosh St, Hridaypur, Kolkata, West Bengal 700127',
  landmarks: 'Near Hridaypur Railway Station & Barasat Connector',
  hours: '7:00 AM – 10:00 PM (Monday to Sunday)',
  rating: 5.0,
  reviewsCount: 51,
  priceRange: '₹200 – ₹400 per person',
  googleMapsUrl: 'https://maps.google.com/?q=Cakey+Bakey+Dr+Sarada+Prasad+Ghosh+St+Hridaypur+Kolkata+700127',
  whatsappUrl: (message: string) => `https://wa.me/919330563954?text=${encodeURIComponent(message)}`,
};

export const SIGNATURE_CAKES: CakeItem[] = [
  {
    id: 'chocolate-truffle',
    name: 'Belgian Chocolate Truffle Decadence',
    category: 'chocolate',
    categoryLabel: 'Chocolate Lovers',
    pricePerHalfKg: 750,
    pricePerKg: 1350,
    description: 'Moist dark Dutch cocoa sponge layered with 55% Belgian chocolate ganache, handcrafted chocolate truffles, and delicate 24K edible gold flakes.',
    flavorNotes: ['55% Belgian Cocoa', 'Silky Ganache Drip', 'Handcrafted Truffles', 'Moist Crumb'],
    egglessAvailable: true,
    image: '/src/assets/images/cake_chocolate_truffle_1793988633684.jpg',
    popular: true,
    bestsellerTag: 'Top Rated',
    servingsInfo: '0.5 kg serves 4–6 / 1 kg serves 8–12'
  },
  {
    id: 'floral-birthday',
    name: 'Lavender & Wild Berry Rosette',
    category: 'birthday',
    categoryLabel: 'Birthday Special',
    pricePerHalfKg: 700,
    pricePerKg: 1250,
    description: 'Artisanal birthday celebration cake frosted in pastel lavender ombre with hand-piped edible rosettes, fresh strawberries, blueberries, and gold leaf accents.',
    flavorNotes: ['Madagascar Vanilla', 'Wild Berry Compote', 'Swiss Buttercream', 'Fresh Berries'],
    egglessAvailable: true,
    image: '/src/assets/images/cake_floral_birthday_1793988634723.jpg',
    popular: true,
    bestsellerTag: 'Birthday Favorite',
    servingsInfo: '0.5 kg serves 4–6 / 1 kg serves 8–12'
  },
  {
    id: 'korean-bento',
    name: 'Korean Minimalist Bento Box Cake',
    category: 'bento',
    categoryLabel: 'Bento Mini Cakes',
    pricePerHalfKg: 450,
    pricePerKg: 850,
    description: 'Cute, trendy Korean lunchbox cake with pastel sky-blue and cream vintage piping borders, custom cursive hand-lettered message, and eco-friendly packaging.',
    flavorNotes: ['Light Vanilla Chiffon', 'Pastel Buttercream', 'Custom Lettering', 'Eco Bento Box'],
    egglessAvailable: true,
    image: '/src/assets/images/cake_bento_minimalist_1793988635713.jpg',
    popular: true,
    bestsellerTag: 'Trending',
    servingsInfo: 'Lunchbox 300g serves 1–2 / 0.5 kg serves 3–4'
  },
  {
    id: 'luxury-wedding-tiers',
    name: 'Grand Ivory & Rose Tiered Centerpiece',
    category: 'wedding',
    categoryLabel: 'Weddings & Multi-Tier',
    pricePerHalfKg: 1400,
    pricePerKg: 2600,
    description: 'Bespoke multi-tiered celebration cake for weddings and milestone anniversaries, featuring delicate handcrafted blush sugar blossoms, gold rimming, and customized inner sponge layers.',
    flavorNotes: ['Dual Tier Flavors', 'Sugar Art Florals', 'Gold Leaf Accents', 'Velvet Finish'],
    egglessAvailable: true,
    image: '/src/assets/images/cake_wedding_luxury_1793988636275.jpg',
    popular: true,
    bestsellerTag: 'Wedding Masterpiece',
    servingsInfo: '2 kg serves 18–22 / 3 kg serves 28–35'
  },
  {
    id: 'rasmalai-fusion',
    name: 'Royal Bengali Saffron Rasmalai Fusion',
    category: 'fusion',
    categoryLabel: 'Fusion & Bengali Specials',
    pricePerHalfKg: 800,
    pricePerKg: 1450,
    description: 'A tribute to Kolkata dessert heritage. Soft cardamom sponge infused with rich saffron-pistachio kesar milk, layered with soft mini rasmalai and roasted dry fruits.',
    flavorNotes: ['Cardamom Sponge', 'Saffron Milk Soak', 'Soft Rasmalai Pieces', 'Iranian Pistachios'],
    egglessAvailable: true,
    image: '/src/assets/images/hero_cake_display_1793988633365.jpg',
    popular: true,
    bestsellerTag: 'Chef Special',
    servingsInfo: '0.5 kg serves 4–6 / 1 kg serves 8–12'
  },
  {
    id: 'red-velvet-cream-cheese',
    name: 'Classic Red Velvet & Madagascar Vanilla Cream',
    category: 'birthday',
    categoryLabel: 'Birthday Special',
    pricePerHalfKg: 750,
    pricePerKg: 1350,
    description: 'Rich velvety crimson sponge paired with tangy whipped Madagascar vanilla bean cream cheese frosting and fine velvet crumb garnish.',
    flavorNotes: ['Crimson Cocoa Sponge', 'Whipped Cream Cheese', 'Subtle Tang', 'Velvet Dust'],
    egglessAvailable: true,
    image: '/src/assets/images/cake_chocolate_truffle_1793988633684.jpg',
    popular: false,
    servingsInfo: '0.5 kg serves 4–6 / 1 kg serves 8–12'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Ananya Sen',
    locality: 'Hridaypur, Kolkata',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ordered a 2-tier custom floral cake for my daughter’s 5th birthday. The design was identical to the picture I sent on WhatsApp, and the chocolate truffle was so moist and rich without being overly sweet. Easily the best custom cake shop in North 24 Parganas!',
    cakeType: 'Custom 2-Tier Birthday Cake'
  },
  {
    id: 'rev-2',
    name: 'Sourav Mukherjee',
    locality: 'Barasat, Kolkata',
    rating: 5,
    date: '1 month ago',
    comment: 'Cakey Bakey is easily the best custom cake artisan in Hridaypur-Barasat. Prompt communication on WhatsApp, very polite baker, and delivered safely right to our doorstep at the exact agreed hour. 5.0 Google rating is completely genuine!',
    cakeType: 'Belgian Chocolate Truffle'
  },
  {
    id: 'rev-3',
    name: 'Poulomi Das',
    locality: 'Madhyamgram, Kolkata',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Korean Bento cake was ridiculously cute and tasted heavenly. Their eggless options are genuinely soft, fluffy, and never dry. We have found our go-to family cake artisan for every celebration.',
    cakeType: 'Minimalist Bento Cake (Eggless)'
  },
  {
    id: 'rev-4',
    name: 'Arghya Banerjee',
    locality: 'Jessore Road, Kolkata',
    rating: 5,
    date: '1 month ago',
    comment: 'Celebrated our 10th wedding anniversary with their signature Rasmalai fusion cake. Every single guest asked where we ordered it from. Rich saffron aroma and perfect balance. Thank you Cakey Bakey team!',
    cakeType: 'Royal Rasmalai Fusion'
  },
  {
    id: 'rev-5',
    name: 'Debolina Roy',
    locality: 'Dr S.P. Ghosh St, Hridaypur',
    rating: 5,
    date: '2 months ago',
    comment: 'Living just down the street, I have ordered at least 4 times this year. Superb hygiene, customized toppers, fresh cream, and wonderful attitude. Proud to have Cakey Bakey in our neighbourhood!',
    cakeType: 'Red Velvet Designer Cake'
  }
];

export const DELIVERY_ZONES = [
  { pincode: '700127', name: 'Hridaypur (Store Hub)', fee: 0, time: '30–45 mins / Same Day Available', freeNotice: 'Free Delivery' },
  { pincode: '700124', name: 'Barasat (Colony / Champadali)', fee: 40, time: '45–60 mins', freeNotice: 'Free over ₹1,000' },
  { pincode: '700125', name: 'Barasat (Dakshinpara / Kazipara)', fee: 50, time: '45–60 mins', freeNotice: 'Free over ₹1,000' },
  { pincode: '700126', name: 'Barasat (Nabapally)', fee: 45, time: '45–60 mins', freeNotice: 'Free over ₹1,000' },
  { pincode: '700129', name: 'Madhyamgram (Station / Chowmatha)', fee: 50, time: '45–60 mins', freeNotice: 'Free over ₹1,000' },
  { pincode: '700130', name: 'Madhyamgram (Michael Nagar)', fee: 60, time: '50–70 mins', freeNotice: 'Free over ₹1,200' },
  { pincode: '700131', name: 'Birati / Airport Gate 1', fee: 80, time: '60–80 mins', freeNotice: 'Free over ₹1,500' },
  { pincode: '700052', name: 'Dum Dum / Airport', fee: 100, time: 'Scheduled Delivery', freeNotice: 'Free over ₹1,800' },
  { pincode: '700156', name: 'New Town / Rajarhat', fee: 120, time: 'Scheduled Delivery', freeNotice: 'Free over ₹2,000' },
  { pincode: '700091', name: 'Salt Lake / Sector V', fee: 140, time: 'Scheduled Delivery', freeNotice: 'Free over ₹2,200' }
];

export const CAKE_SIZES = [
  { id: 'bento', label: 'Bento Mini (300g)', serves: '1–2 persons', basePrice: 450, popular: false },
  { id: '0.5kg', label: '0.5 kg (Standard)', serves: '4–6 persons', basePrice: 700, popular: true },
  { id: '1.0kg', label: '1.0 kg (Celebration)', serves: '8–12 persons', basePrice: 1250, popular: true },
  { id: '1.5kg', label: '1.5 kg (Party)', serves: '14–18 persons', basePrice: 1750, popular: false },
  { id: '2.0kg', label: '2.0 kg (Grand)', serves: '20–25 persons', basePrice: 2350, popular: false },
  { id: '3.0kg', label: '3.0 kg (2-Tier Masterpiece)', serves: '30+ persons', basePrice: 3500, popular: false }
];

export const CAKE_FLAVORS = [
  { id: 'belgian-truffle', name: 'Belgian Dark Chocolate Truffle', tag: 'Rich & Dense', addOn: 100 },
  { id: 'vanilla-berry', name: 'Madagascar Vanilla Bean & Fresh Berries', tag: 'Aromatic & Light', addOn: 50 },
  { id: 'red-velvet', name: 'Red Velvet with Cream Cheese', tag: 'Velvety & Classic', addOn: 80 },
  { id: 'rasmalai-kesar', name: 'Royal Saffron Rasmalai Fusion', tag: 'Kolkata Signature', addOn: 120 },
  { id: 'butterscotch-crunch', name: 'Butterscotch & Caramel Praline', tag: 'Crunchy & Sweet', addOn: 40 },
  { id: 'black-forest', name: 'Classic Black Forest with Brandied Cherries', tag: 'Traditional Favorite', addOn: 0 },
  { id: 'mango-passion', name: 'Alphonso Mango & White Chocolate Gateau', tag: 'Fruity & Refreshing', addOn: 80 }
];

export const DESIGN_STYLES = [
  { id: 'fresh-cream', name: 'Fresh Cream Vintage Piping', price: 0, description: 'Soft textured piping, border scallops, and delicate pastel coloring.' },
  { id: 'semi-naked', name: 'Rustic Semi-Naked with Florals', price: 150, description: 'Exposed sponge layers adorned with organic fresh flowers and greenery.' },
  { id: 'chocolate-drip', name: 'Glossy Belgian Chocolate Drip', price: 120, description: 'Luxurious dark ganache cascade with chocolate truffles and macarons.' },
  { id: 'buttercream-flowers', name: 'Hand-Piped Buttercream Rosettes', price: 200, description: 'Sculpted edible blossoms, pearls, and botanical artistry.' },
  { id: 'fondant-custom', name: '3D Fondant Themed Sculpting', price: 350, description: 'Handcrafted theme figurines, characters, or sculpted elements.' },
  { id: 'korean-minimalist', name: 'Korean Minimalist Calligraphy', price: 100, description: 'Smooth matte finish with clean pastel palette and cursive message.' }
];

export const ADDONS = [
  { id: 'acrylic-topper', name: 'Custom Acrylic Name/Age Topper', price: 120 },
  { id: 'photo-sheet', name: 'Edible Sugar Photo Print', price: 180 },
  { id: 'gold-flakes', name: '24K Edible Gold Foil & Pearls', price: 150 },
  { id: 'fresh-strawberries', name: 'Loaded Fresh Strawberries & Berries', price: 160 },
  { id: 'sparkler-candle', name: 'Celebration Sparkler & Metallic Candles', price: 60 }
];
