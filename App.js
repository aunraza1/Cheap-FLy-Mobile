import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigator from './Navigator';
import {AlertModal} from './src/components';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
      <AlertModal />
    </Provider>
  );
};

export default App;
