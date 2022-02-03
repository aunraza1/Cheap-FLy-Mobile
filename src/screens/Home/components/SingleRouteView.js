import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconComponent, Text} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constants';

const SingleRouteView = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.main_view}>
      <View style={styles.icon_view}>
        <IconComponent iconColor={COLORS.maroon_color} iconName={icon} />
      </View>
      <Text style={styles.text} text={text} />
    </TouchableOpacity>
  );
};
export default SingleRouteView;
const styles = StyleSheet.create({
  main_view: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_view: {
    height: SIZES.padding * 2,
    width: SIZES.padding * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light_gray,
    borderRadius: SIZES.padding,
  },
  text: {
    ...FONTS.Light12,
    color: COLORS.primary_color,
  },
});
