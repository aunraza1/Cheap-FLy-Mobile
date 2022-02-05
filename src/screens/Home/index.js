import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {dashboardData} from '../../config';
import {SingleRouteView} from './components';
import {Text} from '../../components';
import I18n from '../../i18n';
import {addToFavourite} from '../../functions';
const Home = ({navigation}) => {
  useEffect(() => {
    // addToFavourite('G4ItK9z31OeqIrP1UIrnBDaCY1i2', 'Mhml9MeuYqbfRcwpqor');
  }, []);
  return (
    <View style={styles.main_view}>
      <View style={styles.menu_view}>
        <View style={styles.sub_view}>
          <Text style={styles.text} text={I18n.t('looking_for_text')} />
        </View>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
            marginTop: SIZES.padding2,
          }}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleRouteView
              onPress={() => navigation.navigate(item?.route)}
              icon={item?.icon}
              text={item?.text}
            />
          )}
          data={dashboardData}
          numColumns={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: '#FAF9F6',
    paddingTop: SIZES.padding2,
  },
  menu_view: {
    padding: SIZES.padding2,
    elevation: 2,
    borderRadius: SIZES.padding2,
    backgroundColor: COLORS.white_color,
  },
  sub_view: {
    height: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.padding,
    justifyContent: 'center',
    backgroundColor: COLORS.light_gray,
  },
  text: {
    ...FONTS.Light16,
    color: COLORS.primary_color,
    textAlign: 'left',
  },
});
export default Home;
