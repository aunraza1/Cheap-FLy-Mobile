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
  faRegistered,
  faPersonBooth,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons';
import I18n from '../../i18n';
import {useDispatch, useSelector} from 'react-redux';
import {AddToFavourites} from '../../store/actions/favourite-actions';

const ItemDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {fav_loading} = useSelector(state => state.FavouriteReducer);
  const {hotel, user, cars} = route?.params;

  let prices = [];
  let carData = [];
  hotel?.singlePrice &&
    prices.push({
      value: hotel?.singlePrice,
      key: I18n.t('single_text'),
      color: COLORS.maroon_color,
    });
  hotel?.doublePrice &&
    prices.push({
      value: hotel?.doublePrice,
      key: I18n.t('double_text'),
      color: COLORS.dark_orange,
    });
  hotel?.kingPrice &&
    prices.push({
      value: hotel?.kingPrice,
      key: I18n.t('king_text'),
      color: COLORS.green_color,
    });
  hotel?.queenPrice &&
    prices.push({
      value: hotel?.queenPrice,
      key: I18n.t('queen_text'),
      color: COLORS.pink_color,
    });

  if (cars) {
    carData.push({
      icon: faCarSide,
      key: I18n.t('segment_text'),
      value: cars?.carSegment,
    });
    carData.push({
      icon: faPersonBooth,
      key: I18n.t('owned_by_text'),
      value: cars?.name,
    });
    carData.push({
      icon: faRegistered,
      key: I18n.t('registration_no_text'),
      value: cars?.registrationNo,
    });
  }
  const getType = () => {
    if (hotel) {
      return prices;
    } else {
      return carData;
    }
  };
  return (
    <ScrollView style={styles.main_view}>
      <Image style={styles.img} source={{uri: hotel ? hotel.url : cars?.url}} />
      <View style={styles.sub_view}>
        <View style={styles.parent_view}>
          <View style={styles.card_view}>
            <View style={styles.card_detail}>
              <Text text={hotel ? hotel?.hotelName : cars?.carName} />
              {fav_loading ? (
                <Loader color={COLORS.maroon_color} size={'small'} />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      AddToFavourites(
                        user?.user_id,
                        hotel ? hotel?.key : cars?.key,
                      ),
                    )
                  }>
                  <IconComponent
                    iconColor={
                      hotel ? COLORS.maroon_color : COLORS.primary_color
                    }
                    iconName={faBookmark}
                  />
                </TouchableOpacity>
              )}
            </View>
            {hotel && <Ratings ratings={hotel?.hotelRatings} />}
            <Text
              style={[styles.text, {marginTop: SIZES.padding2}]}
              text={
                hotel
                  ? hotel?.singlePrice + I18n.t('pkr_night_text')
                  : cars?.hourlyRate + I18n.t('per_hour_text')
              }
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

            <Text
              style={styles.text}
              text={hotel ? hotel.hotelLocation : cars?.location}
            />
          </View>
          {getType()?.map((v, i) => {
            return (
              <View key={i} style={styles.card_detail}>
                <View style={styles.card_detail}>
                  <IconComponent
                    iconColor={v?.color ? v.color : COLORS.primary_color}
                    iconName={v?.icon ? v.icon : faBed}
                  />
                  <Text
                    style={[styles.text, {marginLeft: SIZES.padding2}]}
                    text={v?.key}
                  />
                </View>
                <Text
                  style={styles.text}
                  text={cars ? v.value : v?.value + ' ' + I18n.t('pkr_text')}
                />
              </View>
            );
          })}
        </View>
        <Button
          onPress={() => navigation.navigate('Booking', hotel)}
          buttonTitle={I18n.t('book_now_text')}
          style={{
            backgroundColor: cars ? COLORS.primary_color : COLORS.maroon_color,
            borderRadius: SIZES.padding2,
          }}
        />
      </View>
    </ScrollView>
  );
};
export default ItemDetail;
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
