import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconComponent, Ratings, Text, Button, Loader} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import {
  faBookmark,
  faMapMarkerAlt,
  faBed,
} from '@fortawesome/free-solid-svg-icons';
import I18n from '../../i18n';
import {useDispatch, useSelector} from 'react-redux';
import {AddToFavourites} from '../../store/actions/favourite-actions';

const HotelDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {fav_loading} = useSelector(state => state.FavouriteReducer);
  const {hotel, user} = route?.params;
  let prices = [];
  hotel?.singlePrice &&
    prices.push({
      price: hotel?.singlePrice,
      room: I18n.t('single_text'),
      color: COLORS.maroon_color,
    });
  hotel?.doublePrice &&
    prices.push({
      price: hotel?.doublePrice,
      room: I18n.t('double_text'),
      color: COLORS.dark_orange,
    });
  hotel?.kingPrice &&
    prices.push({
      price: hotel?.kingPrice,
      room: I18n.t('king_text'),
      color: COLORS.green_color,
    });
  hotel?.queenPrice &&
    prices.push({
      price: hotel?.queenPrice,
      room: I18n.t('queen_text'),
      color: COLORS.pink_color,
    });

  return (
    <ScrollView style={styles.main_view}>
      <Image style={styles.img} source={{uri: hotel.url}} />
      <View style={styles.sub_view}>
        <View style={styles.parent_view}>
          <View style={styles.card_view}>
            <View style={styles.card_detail}>
              <Text text={hotel?.hotelName} />
              {fav_loading ? (
                <Loader color={COLORS.maroon_color} size={'small'} />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    dispatch(AddToFavourites(user?.user_id, hotel?.key))
                  }>
                  <IconComponent
                    iconColor={COLORS.maroon_color}
                    iconName={faBookmark}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Ratings ratings={hotel?.hotelRatings} />
            <Text
              style={[styles.text, {marginTop: SIZES.padding2}]}
              text={hotel?.singlePrice + I18n.t('pkr_night_text')}
            />
          </View>
        </View>
        <View style={styles.detail_view}>
          <View style={styles.card_detail}>
            <View style={styles.card_detail}>
              <IconComponent
                iconColor={COLORS.primary_color}
                iconName={faMapMarkerAlt}
              />
              <Text
                style={[styles.text, {marginLeft: SIZES.padding2}]}
                text={I18n.t('location_text')}
              />
            </View>

            <Text style={styles.text} text={hotel?.hotelLocation} />
          </View>
          {prices?.map((v, i) => {
            return (
              <View key={i} style={styles.card_detail}>
                <View style={styles.card_detail}>
                  <IconComponent iconColor={v.color} iconName={faBed} />
                  <Text
                    style={[styles.text, {marginLeft: SIZES.padding2}]}
                    text={v.room}
                  />
                </View>
                <Text
                  style={styles.text}
                  text={v.price + ' ' + I18n.t('pkr_text')}
                />
              </View>
            );
          })}
        </View>
        <Button
          onPress={() => navigation.navigate('Booking', hotel)}
          buttonTitle={I18n.t('book_now_text')}
          style={{
            backgroundColor: COLORS.maroon_color,
            borderRadius: SIZES.padding2,
          }}
        />
      </View>
    </ScrollView>
  );
};
export default HotelDetail;
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    backgroundColor: COLORS.light_background,
  },
  img: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: SIZES.padding,
    borderBottomRightRadius: SIZES.padding,
  },
  sub_view: {
    padding: SIZES.padding,
  },
  parent_view: {
    height: SIZES.padding * 3.4,
  },
  card_view: {
    backgroundColor: COLORS.white_color,
    padding: SIZES.padding * 1.3,
    borderRadius: SIZES.padding2 * 0.6,
    position: 'absolute',
    bottom: SIZES.padding,
    left: 0,
    right: 0,
    elevation: 1,
  },
  card_detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detail_view: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white_color,
  },
  text: {
    ...FONTS.Light14,
    marginTop: SIZES.padding2 * 0.4,
    textAlign: 'left',
  },
});
