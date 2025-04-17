import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { BottinesView } from 'src/sections/view/bottines';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <BottinesView products={_products.slice(0, 16)}  />
  );
}
