import { CONFIG } from 'src/config-global';

import { EcommerceOrderCompletedView } from 'src/sections/view/ecommerce-order-completed-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return <EcommerceOrderCompletedView />;
}
