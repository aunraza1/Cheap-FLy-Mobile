import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AnimatedLoader, NoDataFound} from '../../components';
import {COLORS, SIZES} from '../../constants';
import {SingleHotelView} from './components/index';
import {useDispatch, useSelector} from 'react-redux';
import {GetHotels} from '../../store/actions/hotel-actions';
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
    dispatch(GetHotels());
  }, []);
  const {loading} = useSelector(state => state.HotelReducer);
  const {hotels} = useSelector(state => state.HotelReducer);
  const {fav_loading} = useSelector(state => state.FavouriteReducer);
  return (
    <View style={styles.main_view}>
      {loading ? (
        <AnimatedLoader loadingText={I18n.t('loading_hotels')} />
      ) : hotels?.length > 0 ? (
        <FlatList
          data={hotels}
          keyExtractor={item => item?.key}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleHotelView
              name={item?.hotelName}
              location={item?.hotelLocation}
              price={item?.singlePrice}
              ratings={item?.hotelRatings}
              image={item?.url}
              onPress={() =>
                navigation.navigate('HotelDetail', {hotel: item, user: user})
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
