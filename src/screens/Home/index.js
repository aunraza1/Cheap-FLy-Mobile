import React from 'react';
import {Image, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {dashboardData} from '../../config';
import {SingleRouteView} from './components';
function Home() {
  return (
    <View style={styles.main_view}>
      <View style={styles.menu_view}>
        <FlatList
          contentContainerStyle={{
            padding: SIZES.padding2,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
            marginTop: SIZES.padding2,
          }}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleRouteView icon={item?.icon} text={item?.text} />
          )}
          data={dashboardData}
          numColumns={4}
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
    paddingTop: SIZES.padding2,
  },
  menu_view: {
    elevation: 2,
    borderRadius: SIZES.padding2,
    backgroundColor: COLORS.white_color,
  },
});
export default connect(mapStateToProp, null)(Home);
