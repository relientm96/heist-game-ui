import 'braid-design-system/reset';

import { BraidLoadableProvider } from 'braid-design-system';
import React from 'react';

import { AppHeader } from 'src/components/AppHeader/AppHeader';

interface AppProps {
  site: string;
}

export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <AppHeader />
  </BraidLoadableProvider>
);
