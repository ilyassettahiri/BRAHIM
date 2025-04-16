import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceProductView } from 'src/sections/view/ecommerce-product-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product details` };

export default function Page({ params }) {

  const { productId } = params;

  const product = _products.find((product) => String(product.id) === productId);


  return <EcommerceProductView product={product} />;
}
