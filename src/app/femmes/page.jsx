import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { FemmesView } from 'src/sections/view/femmes';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <FemmesView products={_products.slice(0, 16)}  />
  );
}
