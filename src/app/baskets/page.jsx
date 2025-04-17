import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { BasketsView } from 'src/sections/view/baskets';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <BasketsView products={_products.slice(0, 16)}  />
  );
}
