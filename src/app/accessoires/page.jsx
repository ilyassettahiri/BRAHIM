import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { AccessoiresView } from 'src/sections/view/accessoires';

// ----------------------------------------------------------------------

export const metadata = { title: `Products` };

export default function Page() {
  return (
    <AccessoiresView products={_products.slice(0, 16)}  />
  );
}
