import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../../constants';
import {IconComponent, Text, Ratings, Loader} from '../../../components';
import {
  faBookmark,
  faMapMarkerAlt,
  faDollarSign,
  faCarSide,
  faRegistered,
} from '@fortawesome/free-solid-svg-icons';
const SingleCarView = ({
  name,
  segment,
  registration,
  image,
  location,
  price,
  onPress,
  loading,
  onPressBookMark,
}) => {
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    if (loading === false) {
      setPressed(false);
    }
  }, [loading]);
  return (
    <TouchableOpacity onPress={onPress} style={styles.main_view}>
      <Image resizeMode="contain" style={styles.img} source={{uri: image}} />
      <View style={styles.sub_view}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={[styles.text, {...FONTS.Medium16}]} text={name} />
          {loading && pressed ? (
            <Loader color={COLORS.maroon_color} size={'small'} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setPressed(true);
                onPressBookMark();
              }}>
              <IconComponent
                iconColor={COLORS.primary_color}
                iconName={faBookmark}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.row}>
          <IconComponent
            size={16}
            iconColor={COLORS.maroon_color}
            iconName={faMapMarkerAlt}
          />
          <Text style={styles.desc} text={location} />
        </View>
        <View style={styles.row}>
          <IconComponent
            iconColor={COLORS.maroon_color}
            size={16}
            iconName={faDollarSign}
          />
          <Text style={styles.desc} text={price} />
        </View>
        <View style={styles.row}>
          <IconComponent
            iconColor={COLORS.maroon_color}
            size={16}
            iconName={faCarSide}
          />
          <Text style={styles.desc} text={segment} />
        </View>
        <View style={styles.row}>
          <IconComponent
            iconColor={COLORS.maroon_color}
            size={16}
            iconName={faRegistered}
          />
          <Text style={styles.desc} text={registration} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SingleCarView;

const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    borderRadius: SIZES.padding2 * 0.7,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.white_color,
    elevation: 1,
    marginTop: SIZES.padding2,
  },
  sub_view: {
    flex: 1,
    padding: SIZES.padding2,
  },
  row: {
    flexDirection: 'row',
    height: SIZES.padding,
  },
  img: {
    borderRadius: SIZES.padding,
    width: '30%',
  },
  text: {
    textAlign: 'left',
    ...FONTS.Light15,
  },
  desc: {
    textAlign: 'left',
    ...FONTS.Light15,
    marginLeft: SIZES.padding2,
  },
});
