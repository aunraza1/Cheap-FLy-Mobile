import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AnimatedLoader, NoDataFound} from '../../components';
import {COLORS, SIZES} from '../../constants';
import {SingleHotelView} from './components/index';
import {useDispatch, useSelector} from 'react-redux';
import {GetHotels} from '../../store/actions/hotel-actions';
import I18n from '../../i18n';
function Hotels() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetHotels());
  }, []);
  const {loading} = useSelector(state => state.HotelReducer);
  const {hotels} = useSelector(state => state.HotelReducer);
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
