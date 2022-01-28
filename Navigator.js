import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import AuthStack from './src/navigation/AuthStack';

import {connect} from 'react-redux';
function Navigator({loggedUser}) {
  React.useEffect(() => {
    console.log(loggedUser);
  }, []);
  return (
    <NavigationContainer>
      {loggedUser == '' || loggedUser === undefined ? <AuthStack /> : <Tabs />}
    </NavigationContainer>
  );
}
const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
});
export default connect(mapStateToProps, null)(Navigator);
