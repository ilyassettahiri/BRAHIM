import { CONFIG } from 'src/config-global';

import { PaymentmethodsView } from 'src/sections/view/payment-methods';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed` };

export default function Page() {
  return <PaymentmethodsView />;
}
