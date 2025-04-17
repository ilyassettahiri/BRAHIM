import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SandalesView } from 'src/sections/view/sandales';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <SandalesView products={_products.slice(0, 16)}  />
  );
}
