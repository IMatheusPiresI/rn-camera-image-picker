import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

import theme from './styles/theme';
import { AppRoutes } from './routes';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
