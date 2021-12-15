import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {Provider} from 'react-redux';
import store from './src/store/index';
import {connect} from 'react-redux';
import Navigator from './Navigator';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
});
connect(mapStateToProps, null)(Navigator);
export default App;
