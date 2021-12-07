import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/config/rootstack';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
  
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
  );
};

export default App;
