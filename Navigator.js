import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import AuthStack from './src/navigation/AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';
const Navigator = () => {
  const [route, setRoute] = useState(null);
  const goToLogin = async () => {
    let e = await AsyncStorage.getItem('user');
    if (e === null) {
      setRoute('AuthStack');
      return 'AuthStack';
    } else {
      setRoute('Tabs');
      return 'Tabs';
    }
  };
  useEffect(() => {
    goToLogin().then(r => {
      RNBootSplash.hide();
    });
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {route === 'AuthStack' ? (
        <Stack.Navigator
          initialRouteName="AuthStack"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      ) : route === 'Tabs' ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : (
        <></>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
