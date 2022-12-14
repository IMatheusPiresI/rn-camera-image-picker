import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import theme from './styles/theme';
import { AppRoutes } from './routes';
import { store } from './store';

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.salmon}
        />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};
