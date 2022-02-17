import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AnimatedLoader, NoDataFound} from '../../components';
import {COLORS, SIZES} from '../../constants';
import {SingleCarView} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {GestAllCars} from '../../store/actions/cars-action';
import {AddToFavourites} from '../../store/actions/favourite-actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from '../../i18n';
function Hotels({navigation}) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const getUser = async () => {
    let e = await AsyncStorage.getItem('user');
    if (e !== null) {
      setUser(JSON.parse(e));
    }
  };

  useEffect(() => {
    getUser();
    dispatch(GestAllCars());
  }, []);

  const {loading} = useSelector(state => state.CarReducer);
  const {cars} = useSelector(state => state.CarReducer);
  const {fav_loading} = useSelector(state => state.FavouriteReducer);

  return (
    <View style={styles.main_view}>
      {loading ? (
        <AnimatedLoader loadingText={I18n.t('loading_cars')} />
      ) : cars?.length > 0 ? (
        <FlatList
          data={cars}
          keyExtractor={item => item?.key}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleCarView
              name={item?.carName}
              segment={item?.carSegment}
              location={item?.location}
              price={item?.hourlyRate}
              registration={item?.registrationNo}
              image={item?.url}
              onPress={() =>
                navigation.navigate('ItemDetail', {cars: item, user: user})
              }
              loading={fav_loading}
              onPressBookMark={() => {
                dispatch(AddToFavourites(user?.user_id, item?.key));
              }}
            />
          )}
        />
      ) : (
        <NoDataFound />
      )}
    </View>
  );
}
export default Hotels;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    padding: SIZES.padding2,
    backgroundColor: COLORS.light_background,
  },
});
