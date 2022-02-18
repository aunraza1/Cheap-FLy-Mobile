import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import { Flights } from '../screens/Flights/Flights.js';
import Booking from '../screens/Booking';
import { FlightModal } from '../screens/Flights/FlightModal/FlightModal';
import ItemDetail from '../screens/ItemDetail';
import Cars from '../screens/Cars';
import { Favourites } from '../screens/Fovourites/Favourites';
import Requests from '../screens/Requests';
import { More } from '../screens/More/More';
import { Discounts } from '../screens/Discounts/Discounts';
import { Tours } from '../screens/Tours/Tours';
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
      <Stack.Screen name="FlightModal" component={FlightModal} />
      <Stack.Screen name="Cars" component={Cars} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Saved" component={Favourites} />
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Tours" component={Tours} />
      <Stack.Screen name="Discounts" component={Discounts} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}
export default HomeStack;
