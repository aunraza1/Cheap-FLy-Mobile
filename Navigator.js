import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/config/rootstack';
import MainStack from './src/config/mainstack';
import {connect} from 'react-redux';
function Navigator({loggedUser}) {
  React.useEffect(() => {
    console.log(loggedUser);
  }, []);
  return (
    <NavigationContainer>
      {(loggedUser == ''|| loggedUser===undefined )? <RootStackNavigation /> : <MainStack />}
    </NavigationContainer>
  );
}
const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
});
export default connect(mapStateToProps, null)(Navigator);
