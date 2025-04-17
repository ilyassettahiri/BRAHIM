import { _mock } from './_mock';


const NAMES = [
  '🧼 Égouttoir à Vaisselle Multifonction Haute Efficacité',
  'title 2',
  'title 3',
  'title 4',
  'title 5',
  'title 6',
  'title 7',
  'title 8',
  'title 9',



];

const CATEGORIES = [
  'Chaussures Classiques',
  'Bottines',
  'Baskets et Espadrilles',
  'Mocassins',
  'Sandales',
  'Accessoires',
  'Femmes',
];

const PRICES = [
  { prixAvant: 65000, prixApres: 49900 }, // Chaussures Classiques
  { prixAvant: 80000, prixApres: 59900 }, // Bottines
  { prixAvant: 55000, prixApres: 42900 }, // Baskets et Espadrilles
  { prixAvant: 60000, prixApres: 45900 }, // Mocassins
  { prixAvant: 40000, prixApres: 29900 }, // Sandales
  { prixAvant: 15000, prixApres: 12000 }, // Accessoires
  { prixAvant: 70000, prixApres: 53900 }, // Femmes
];


const DESCRIPTION = [
  `

   <h5>Libérez de l’espace, organisez votre cuisine et séchez votre vaisselle en un clin d’œil</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/CtlR8jGGsPYubjhKKNm8NCisgUTwdW8Onrk0NiQR.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/CtlR8jGGsPYubjhKKNm8NCisgUTwdW8Onrk0NiQR.webp">
   <p></p> Sa structure en fer robuste et sa multifonctionnalité en font l'accessoire <strong>incontournable&nbsp;</strong>pour une cuisine ordonnée et moderne.</p><h5>✨ L’élégance et l’efficacité réunies dans votre cuisine</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/lOvBQ6vU37jv7OM0gMqCtupuPxdkmB55dKeqN04i.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/lOvBQ6vU37jv7OM0gMqCtupuPxdkmB55dKeqN04i.webp"></p><p>Que ce soit pour la vaisselle, les ustensiles ou même des objets de salle de bain ou de bureau, cet étendoir compact mais spacieux transforme votre quotidien. Il allie <strong>design épuré, solidité et gain de place,</strong> tout en gardant vos espaces propres et bien organisés.</p><h5>✅ Caractéristiques du produit :</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/4MUyLdhEzz1GtiJFHvbZ5JDElftWKutz7YVxQXXf.webp" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/4MUyLdhEzz1GtiJFHvbZ5JDElftWKutz7YVxQXXf.webp"></p><p><strong>✓ Matériau :</strong> Fer enduit antirouille, ultra-résistant<br><strong>✓ Multifonction :</strong> cuisine, salle de bain, bureau, etc.<br>✓ Design vertical compact pour gagner de l’espace<br>✓ Égouttage rapide avec plateau récupérateur<br>✓ Séparation intelligente pour assiettes, couverts, tasses<br>✓ Facile à nettoyer et à assembler</p><h5>Ce que vous obtenez</h3><p><img src="https://cdn.youcan.shop/stores/6f9d0740b3150deb70dadc525e99d7e7/others/5MSnYFRMLbZ4OwHuX0A2iV5evgNWfFWm1gwugrTP.gif" style="width: 300px;" class="fr-fic fr-dib" data-name="stores/6f9d0740b3150deb70dadc525e99d7e7/others/5MSnYFRMLbZ4OwHuX0A2iV5evgNWfFWm1gwugrTP.gif"></p><h5>🔒 Garantie 100% Satisfait ou Remboursé</h3><p>Achetez en toute tranquillité : profitez de notre <strong>garantie satisfait ou remboursé pendant 14 jours. Notre équipe est disponible 7j/7</strong> pour toute assistance ou demande d'information.</p><h5>⚠️ Attention : Quantités limitées en stock !</h3><p>Ce produit connaît une <strong>demande très élevée.</strong> Nous recevons des commandes tous les jours et le <strong>stock est presque épuisé. Ne tardez pas !</strong></p><h5>⏳ Commandez aujourd’hui et économisez 20% !</h3><p>Ne ratez pas cette offre exclusive valable jusqu’à minuit seulement :<br>Profitez de -20% dès maintenant !</p>

  `,


  `

      <h5>despt 2</h5>

  `,


  `

      <h5>despt 3</h5>

  `,


  `

      <h5>despt 4</h5>

  `,


  `

      <h5>despt 5</h5>

  `,

  `

      <h5>despt 6</h5>

  `,


  `

      <h5>despt 7</h5>

  `,


  `

      <h5>despt 8</h5>

  `,


  `

      <h5>despt 9</h5>

  `,
];


export const _productsCarousel = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),


  coverUrl: _mock.image.product(index),
  label: 'Opening Sale Discount 50%',
}));


export const _products = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  stock: 100,
  name: NAMES[index],
  description: DESCRIPTION[index],
  category: CATEGORIES[index],
  price: PRICES[index],


  sold: Math.round(100 / (index + 1)),

  coverUrl: _mock.image.product(index),
  ratingNumber: _mock.number.rating(index),

  label: ['sale', 'new', 'sale', 'sale'][index] || '',

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
