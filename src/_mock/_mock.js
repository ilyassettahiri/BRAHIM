import { fSub } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';

import {
  _id,

  _prices,


  _ratings,

  _descriptions,


} from './assets';


export const _mock = {
  id: (index) => _id[index],






  number: {

    rating: (index) => _ratings[index],

    price: (index) => _prices[index],


  },
  // Media
  image: {
    cover: (index) => `${CONFIG.assetsDir}/assets/images/cover/cover-${index + 1}.webp`,
    product: (index) => `${CONFIG.assetsDir}/assets/images/z-product/product-${index + 1}.webp`,
  },

};
