import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import {Image} from 'react-native'
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'rgba(50, 50, 122, 1)'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitle: () => (
          <Image
            style={{height: 50, width: 50}}
            source={require('../../../assets/logo.png')}
          />
        ),
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default HomeStack;
