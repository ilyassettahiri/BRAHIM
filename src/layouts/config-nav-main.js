import { paths } from 'src/routes/paths';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const imagePath = (name) => `${CONFIG.assetsDir}/assets/images/menu/${name}`;

// ----------------------------------------------------------------------

export const pageLinks = [



  {
    subheader: 'E-commerce',
    coverUrl: imagePath('e-commerce.webp'),
    items: [
      { title: 'Landing', path: paths.eCommerce.root },
      { title: 'Products', path: paths.eCommerce.products },
      { title: 'Product', path: paths.eCommerce.product },

      { title: 'Order completed', path: paths.eCommerce.orderCompleted },

    ],
  },

];

// ----------------------------------------------------------------------

export const navData = [


  { title: 'Chaussures Classiques', path: '/chaussures' },
  { title: 'Bottines', path: '/bottines' },
  { title: 'Baskets et Espadrilles', path: '/baskets' },
  { title: 'Mocassins', path: '/mocassins' },
  { title: 'Sandales', path: '/sandales' },
  { title: 'Accessoires', path: '/accessoires' },
  { title: 'Femmes', path: '/femmes' },

];


