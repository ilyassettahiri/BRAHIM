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
  { title: 'Home', path: '/' },


];


