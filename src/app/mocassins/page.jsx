import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { MocassinsView } from 'src/sections/view/mocassins';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <MocassinsView products={_products.slice(0, 16)}  />
  );
}
