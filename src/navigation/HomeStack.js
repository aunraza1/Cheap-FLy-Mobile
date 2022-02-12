import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import { Flights } from '../screens/Flights/Flights.js';
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen name="Hotels" component={Hotels} />
      <Stack.Screen name="Flights" component={Flights} />
    </Stack.Navigator>
  );
}
export default HomeStack;
