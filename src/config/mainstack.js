import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cars from '../screens/cars/cars';
import Hotels from '../screens/hotels/hotels';
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Cars} />
      <Tab.Screen name="Settings" component={Hotels} />
    </Tab.Navigator>
  );
}
export default MainStack;
