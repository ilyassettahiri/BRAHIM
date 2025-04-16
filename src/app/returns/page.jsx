import { CONFIG } from 'src/config-global';

import { ReturnsView } from 'src/sections/view/returns';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed` };

export default function Page() {
  return <ReturnsView />;
}
