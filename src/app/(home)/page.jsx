import { CONFIG } from 'src/config-global';

import { EcommerceLandingView } from 'src/sections/view/ecommerce-landing-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Home` };

export default function Page() {
  return <EcommerceLandingView />;
}
