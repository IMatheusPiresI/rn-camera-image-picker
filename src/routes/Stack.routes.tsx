import { createStackNavigator } from '@react-navigation/stack';

import { Camera } from '../screens/Camera';
import { PhotoTypeSeparate } from '../screens/PhotoTypeSeparate';
import { SplashScreen } from '../screens/Splash';

const Stack = createStackNavigator();

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Camera" component={Camera} />
    <Stack.Screen name="PhotoTypeSeparate" component={PhotoTypeSeparate} />
  </Stack.Navigator>
);
