import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceProductsView } from 'src/sections/view/ecommerce-products-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <EcommerceProductsView products={_products.slice(0, 16)}  />
  );
}
