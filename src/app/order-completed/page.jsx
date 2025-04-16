import { CONFIG } from 'src/config-global';

import { EcommerceOrderCompletedView } from 'src/sections/view/ecommerce-order-completed-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed` };

export default function Page() {
  return <EcommerceOrderCompletedView />;
}
