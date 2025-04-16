import { CONFIG } from 'src/config-global';

import { ContactView } from 'src/sections/view/contact';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed` };

export default function Page() {
  return <ContactView />;
}
