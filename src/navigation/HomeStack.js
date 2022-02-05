import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import HotelDetail from '../screens/HotelDetail';
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen name="Hotels" component={Hotels} />
      <Stack.Screen name="HotelDetail" component={HotelDetail} />
    </Stack.Navigator>
  );
}
export default HomeStack;
