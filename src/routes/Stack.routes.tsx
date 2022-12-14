import { createStackNavigator } from '@react-navigation/stack';

import { Camera } from '../screens/Camera';
import { Gallery } from '../screens/Gallery';
import { Home } from '../screens/Home';
import { Onboarding } from '../screens/Onboarding';
import { PhotoTypeSeparate } from '../screens/PhotoTypeSeparate';
import { PhotoView } from '../screens/PhotoView';
import { SplashScreen } from '../screens/Splash';

const Stack = createStackNavigator();

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Camera" component={Camera} />
    <Stack.Screen name="PhotoTypeSeparate" component={PhotoTypeSeparate} />
    <Stack.Screen name="PhotoView" component={PhotoView} />
    <Stack.Screen name="Gallery" component={Gallery} />
  </Stack.Navigator>
);
