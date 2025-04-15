import { _mock } from './_mock';

// ----------------------------------------------------------------------

const NAMES = [
  '🧼 Égouttoir à Vaisselle Multifonction Haute Efficacité // CM',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
  'Microsoft Surface',
  'Tesla Model S',
  'Amazon Echo',
  'Google Pixel',
  'Bose QuietComfort',
  'Canon EOS',
  'HP Spectre',
  'LG OLED',
  'Rolex Submariner',
  'Chanel No.5',
  'Louis Vuitton Speedy',
  'Gucci Ace',
  'Ray-Ban Aviator',
  'Herschel Little America',
  'Le Creuset Dutch Oven',
  'Yeti Tumbler',
  'Patagonia Nano Puff',
  'Lululemon Align Leggings',
  'Allbirds Wool Runners',
];

const CATEGORIES = [
  'Electronics',
  'Fashion and apparel',
  'Home and garden',
  'Beauty and Personal care',
  'Health and wellness',
  'Toys and games',
  'Sports and outdoors',
  'Baby and kids',
  'Automotive and industrial',
  'Pet supplies',
  'Food and beverage',
  'Office and School supplies',
  'Jewelry and accessories',
  'Arts and crafts',
  'Books and media',
  'Travel and luggage',
  'Gifts and flowers',
  'Musical instruments',
  'Party supplies',
  'Business and Industrial supplies',
  'Tools and hardware',
  'Electronics accessories',
  'Furniture and decor',
  'Computer and software',
];

const DESCRIPTION = `

  <h5>Libérez de l’espace, organisez votre cuisine et séchez votre vaisselle en un clin d’œil</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/CtlR8jGGsPYubjhKKNm8NCisgUTwdW8Onrk0NiQR.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/CtlR8jGGsPYubjhKKNm8NCisgUTwdW8Onrk0NiQR.webp">
  <p></p> Sa structure en fer robuste et sa multifonctionnalité en font l'accessoire <strong>incontournable&nbsp;</strong>pour une cuisine ordonnée et moderne.</p><h5>✨ L’élégance et l’efficacité réunies dans votre cuisine</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/lOvBQ6vU37jv7OM0gMqCtupuPxdkmB55dKeqN04i.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/lOvBQ6vU37jv7OM0gMqCtupuPxdkmB55dKeqN04i.webp"></p><p>Que ce soit pour la vaisselle, les ustensiles ou même des objets de salle de bain ou de bureau, cet étendoir compact mais spacieux transforme votre quotidien. Il allie <strong>design épuré, solidité et gain de place,</strong> tout en gardant vos espaces propres et bien organisés.</p><h5>✅ Caractéristiques du produit :</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/4MUyLdhEzz1GtiJFHvbZ5JDElftWKutz7YVxQXXf.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/4MUyLdhEzz1GtiJFHvbZ5JDElftWKutz7YVxQXXf.webp"></p><p><strong>✓ Matériau :</strong> Fer enduit antirouille, ultra-résistant<br><strong>✓ Multifonction :</strong> cuisine, salle de bain, bureau, etc.<br>✓ Design vertical compact pour gagner de l’espace<br>✓ Égouttage rapide avec plateau récupérateur<br>✓ Séparation intelligente pour assiettes, couverts, tasses<br>✓ Facile à nettoyer et à assembler</p><h5>Ce que vous obtenez</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/5MSnYFRMLbZ4OwHuX0A2iV5evgNWfFWm1gwugrTP.gif" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/5MSnYFRMLbZ4OwHuX0A2iV5evgNWfFWm1gwugrTP.gif"></p><h5>🔒 Garantie 100% Satisfait ou Remboursé</h3><p>Achetez en toute tranquillité : profitez de notre <strong>garantie satisfait ou remboursé pendant 14 jours. Notre équipe est disponible 7j/7</strong> pour toute assistance ou demande d'information.</p><h5>⚠️ Attention : Quantités limitées en stock !</h3><p>Ce produit connaît une <strong>demande très élevée.</strong> Nous recevons des commandes tous les jours et le <strong>stock est presque épuisé. Ne tardez pas !</strong></p><h5>⏳ Commandez aujourd’hui et économisez 20% !</h3><p>Ne ratez pas cette offre exclusive valable jusqu’à minuit seulement :<br>Profitez de -20% dès maintenant !</p>
`;

// ----------------------------------------------------------------------

export const _productsTable = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  orderId: `#011120${index + 1}`,
  item: NAMES[index],
  deliveryDate: _mock.time(index),
  price: _mock.number.price(index),
  status: ['Completed', 'To process', 'Cancelled', 'Return'][index] || 'Completed',
}));

// ----------------------------------------------------------------------

export const _productsCarousel = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.productName(index),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  label: 'Opening Sale Discount 50%',
}));

// ----------------------------------------------------------------------

export const _productsCompare = [
  'Apple iPhone 12 Pro',
  'Apple iPhone 13 Pro',
  'Apple iPhone 14 Pro',
].map((name, index) => ({
  id: _mock.id(index),
  name,
  price: _mock.number.price(index),
  coverUrl: _mock.image.product(4),
  ratingNumber: _mock.number.rating(index),
  details: (index === 0 && [
    'Super Retina XDR (OLED)',
    'Up to 29 hours video playback',
    'A14 Bionic',
    'True Tone',
    'IP68',
    '2017',
  ]) || ['Super Retina XDR (OLED)', '', 'A14 Bionic', '', 'IP68', '2017'],
}));

// ----------------------------------------------------------------------

export const _products = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  stock: 100,
  name: NAMES[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  price: _mock.number.price(index),
  sold: Math.round(100 / (index + 1)),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  ratingNumber: _mock.number.rating(index),
  totalReviews: _mock.number.nativeL(index),
  label: ['sale', 'new', 'sale', 'sale'][index] || '',
  priceSale:
    [
      _mock.number.price(1),
      _mock.number.price(2),
      _mock.number.price(3),
      _mock.number.price(4),
      _mock.number.price(5),
    ][index] || 0,
  images: [
    _mock.image.product(1),
    _mock.image.product(2),
    _mock.image.product(3),
    _mock.image.product(4),
    _mock.image.product(5),
    _mock.image.product(6),
    _mock.image.product(7),
    _mock.image.product(8),
  ],
}));
