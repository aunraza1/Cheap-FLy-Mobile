import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Signup from '../screens/signup/signup';
import Login from '../screens/Login';
import { COLORS, images } from '../constants'

const Stack = createNativeStackNavigator();
function RootStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary_color },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitle: () => (
          <Image
            style={{ height: 50, width: 50 }}
            source={images.logo}
          />
        ),
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
export default RootStackNavigation;
