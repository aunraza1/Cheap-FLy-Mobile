import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import HotelDetail from '../screens/HotelDetail';
import Booking from '../screens/Booking';
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
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
}
export default HomeStack;
