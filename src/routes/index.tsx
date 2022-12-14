import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './Stack.routes';

export const AppRoutes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
