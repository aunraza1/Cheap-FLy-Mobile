import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import AuthStack from './src/navigation/AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function Navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
