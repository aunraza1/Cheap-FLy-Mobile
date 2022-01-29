import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constants';
const Tabs = ({tabArray, accepted, pending, onPress}) => {
  return (
    <View style={styles.tabs_view}>
      {tabArray?.map((v, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => (i === 0 ? onPress('accepted') : onPress('pending'))}
            style={
              i === 0
                ? [
                    styles.pending_view,
                    {
                      backgroundColor: accepted
                        ? COLORS.primary_color
                        : COLORS.white_color,
                      borderTopLeftRadius: SIZES.padding,
                      borderBottomLeftRadius: SIZES.padding,
                    },
                  ]
                : [
                    styles.pending_view,
                    {
                      backgroundColor: pending
                        ? COLORS.maroon_color
                        : COLORS.white_color,
                      borderTopRightRadius: SIZES.padding,
                      borderBottomRightRadius: SIZES.padding,
                    },
                  ]
            }>
            <Text
              style={
                i === 0
                  ? [
                      styles.text,
                      {
                        color: accepted
                          ? COLORS.white_color
                          : COLORS.black_color,
                      },
                    ]
                  : [
                      styles.text,
                      {
                        color: pending
                          ? COLORS.white_color
                          : COLORS.black_color,
                      },
                    ]
              }
              text={v}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Tabs;
const styles = StyleSheet.create({
  tabs_view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white_color,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 2,
    elevation: 1,
  },
  pending_view: {
    width: '50%',
    height: SIZES.padding * 2,
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Medium15,
  },
});
