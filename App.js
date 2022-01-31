import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigator from './Navigator';
import {AlertModal} from './src/components';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
      <AlertModal />
    </Provider>
  );
};


export default App;
