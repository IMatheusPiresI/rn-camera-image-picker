import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';

import theme from './styles/theme';
import { AppRoutes } from './routes';

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
