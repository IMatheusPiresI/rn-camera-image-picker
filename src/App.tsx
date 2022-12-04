import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

import { StackRoutes } from './routes/Stack.routes';
import theme from './styles/theme';

export const App = () => {
  useEffect(() => {
    console.log('executei');
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
