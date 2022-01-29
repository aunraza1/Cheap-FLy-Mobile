import React from 'react';
import {Image, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {dashboardData} from '../../config';
import {SingleRouteView} from './components';
function Home({loggedUser}) {
  return (
    <View style={styles.main_view}>
      <View styles={styles.menu_view}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleRouteView icon={item?.icon} text={item?.text} />
          )}
          data={dashboardData}
          numColumns={5}
        />
      </View>
    </View>
  );
}

const mapStateToProp = state => ({
  loggedUser: state.loggedUser,
});

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: '#FAF9F6',
  },
  menu_view: {
    width: '100%',
    backgroundColor: COLORS.primary_color,
    elevation: 2,
    padding: SIZES.padding,
  },
});
export default connect(mapStateToProp, null)(Home);
