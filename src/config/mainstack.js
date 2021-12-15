import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/Home/HomeStack';
import Hotels from '../screens/hotels/hotels';
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Saved" component={Hotels} />
      <Tab.Screen name="Bookings" component={Hotels} />
    </Tab.Navigator>
  );
}
export default MainStack;
