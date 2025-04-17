import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ChaussuresView } from 'src/sections/view/chaussures';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <ChaussuresView products={_products.slice(0, 16)}  />
  );
}
