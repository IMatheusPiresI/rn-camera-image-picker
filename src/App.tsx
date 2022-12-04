import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './screens/Home';
import theme from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);
